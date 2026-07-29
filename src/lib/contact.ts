import { collection, addDoc, Timestamp, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';
import type { ContactFormData } from '../types';

const CONTACT_REQUESTS_COLLECTION = 'contact_requests';

// Rate limiting constants
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  request_id?: string;
  error?: string;
}

/**
 * Enhanced email validation with common typo detection
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  // Block common typos
  const invalidDomains = ['gmial.com', 'gmai.com', 'yahooo.com', 'outlok.com'];
  const domain = email.split('@')[1]?.toLowerCase();
  if (invalidDomains.includes(domain)) return false;

  return true;
}

/**
 * Check if email has exceeded rate limit
 * Prevents spam by limiting to 3 requests per hour per email
 */
async function checkRateLimit(email: string): Promise<boolean> {
  try {
    const oneHourAgo = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

    const q = query(
      collection(db, CONTACT_REQUESTS_COLLECTION),
      where('email', '==', email.toLowerCase()),
      where('submitted_at', '>', Timestamp.fromDate(oneHourAgo)),
      orderBy('submitted_at', 'desc'),
      limit(MAX_REQUESTS_PER_WINDOW + 1)
    );

    const snapshot = await getDocs(q);

    if (snapshot.size >= MAX_REQUESTS_PER_WINDOW) {
      console.log('[CONTACT] Rate limit exceeded', { email, count: snapshot.size });
      return false;
    }

    return true;
  } catch (error) {
    console.error('[CONTACT] Rate limit check failed', error);
    // If rate limit check fails, allow the request (fail open)
    return true;
  }
}

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .substring(0, 5000); // Max length cap
}

/**
 * Submit contact form request with enhanced validation and rate limiting
 *
 * @param formData - Contact form data with user message
 * @returns Promise with submission response
 */
export async function submitContactRequest(
  formData: ContactFormData
): Promise<ContactSubmissionResponse> {
  console.log('[CONTACT] Starting submission...', { email: formData.email });

  try {
    // Validate email format
    if (!isValidEmail(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'Invalid email format',
      };
    }

    // Normalize email
    const normalizedEmail = formData.email.trim().toLowerCase();
    console.log('[CONTACT] Normalized email:', normalizedEmail);

    // Check rate limit
    const withinRateLimit = await checkRateLimit(normalizedEmail);
    if (!withinRateLimit) {
      return {
        success: false,
        message: 'Too many requests. Please try again in an hour.',
        error: 'Rate limit exceeded',
      };
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: normalizedEmail,
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
      status: 'new',
      submitted_at: Timestamp.now(),
      read_at: null,
      responded_at: null,
      response_message: null,
    };

    console.log('[CONTACT] Adding to Firestore...');
    const docRef = await addDoc(
      collection(db, CONTACT_REQUESTS_COLLECTION),
      sanitizedData
    );
    console.log('[CONTACT] SUCCESS! Doc ID:', docRef.id);

    return {
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.',
      request_id: docRef.id,
    };
  } catch (err) {
    console.error('[CONTACT] ERROR:', err);
    console.error('[CONTACT] Error details:', {
      name: err instanceof Error ? err.name : 'Unknown',
      message: err instanceof Error ? err.message : 'Unknown error',
      code: (err as any).code,
      stack: err instanceof Error ? err.stack : 'No stack trace'
    });

    // Check for specific Firebase errors
    if (err instanceof Error) {
      if (err.message.includes('permission-denied')) {
        return {
          success: false,
          message: 'Permission denied. Please try again or contact support.',
          error: 'Firestore permission denied',
        };
      }

      if (err.message.includes('network')) {
        return {
          success: false,
          message: 'Network error. Please check your connection and try again.',
          error: 'Network error',
        };
      }

      return {
        success: false,
        message: 'Failed to submit request. Please try again.',
        error: err.message,
      };
    }

    return {
      success: false,
      message: 'Failed to submit request. Please try again.',
      error: 'Unknown error occurred',
    };
  }
}
