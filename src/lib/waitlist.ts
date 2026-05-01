import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import type { WaitlistFormData, WaitlistSubmissionResponse } from '../types';

export interface WaitlistEntry {
  email: string;
  timestamp: Date;
  status: 'pending' | 'invited' | 'converted';
  source?: string;
}

const WAITLIST_COLLECTION = 'waitlist';
const WAITLIST_REQUESTS_COLLECTION = 'waitlist_requests';

export async function submitToWaitlist(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check for duplicate in waitlist_requests
    const requestsRef = collection(db, WAITLIST_REQUESTS_COLLECTION);
    const q = query(requestsRef, where('email', '==', normalizedEmail));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return { success: false, error: 'This email is already on the waitlist.' };
    }

    // Write to waitlist_requests with fields required by Firestore rules
    await addDoc(requestsRef, {
      email: normalizedEmail,
      full_name: '',
      organization: '',
      role: '',
      use_case: '',
      status: 'pending',
      submitted_at: Timestamp.now(),
      source: 'landing_inline',
    });

    return { success: true };
  } catch (err) {
    console.error('[WAITLIST] submitToWaitlist error:', err);
    return { success: false, error: 'Connection error. Please try again.' };
  }
}

/**
 * Submit enhanced waitlist request with detailed information
 *
 * @param formData - Complete waitlist form data with user details
 * @returns Promise with submission response
 */
export async function submitWaitlistRequest(
  formData: WaitlistFormData
): Promise<WaitlistSubmissionResponse> {
  console.log('[WAITLIST] Starting submission...', formData);

  try {
    const normalizedEmail = formData.email.trim().toLowerCase();
    console.log('[WAITLIST] Normalized email:', normalizedEmail);

    // Check if email already exists in waitlist_requests
    console.log('[WAITLIST] Checking for duplicate email...');
    const requestsRef = collection(db, WAITLIST_REQUESTS_COLLECTION);
    const q = query(requestsRef, where('email', '==', normalizedEmail));

    let snapshot;
    try {
      snapshot = await getDocs(q);
      console.log('[WAITLIST] Duplicate check complete. Found:', snapshot.size, 'existing entries');
    } catch (queryErr) {
      console.error('[WAITLIST] Error during duplicate check:', queryErr);
      throw queryErr;
    }

    if (!snapshot.empty) {
      console.warn('[WAITLIST] Duplicate email found');
      throw new Error('This email has already submitted a demo access request.');
    }

    // Add to waitlist_requests collection
    console.log('[WAITLIST] Adding to Firestore...');
    const dataToSubmit = {
      full_name: formData.full_name.trim(),
      email: normalizedEmail,
      organization: formData.organization.trim(),
      role: formData.role.trim(),
      use_case: formData.use_case.trim(),
      linkedin_url: formData.linkedin_url?.trim() || null,
      website: formData.website?.trim() || null,
      status: 'pending',
      submitted_at: Timestamp.now(),
      reviewed_at: null,
      reviewed_by: null,
      rejection_reason: null,
      generated_credentials: null,
    };
    console.log('[WAITLIST] Data to submit:', dataToSubmit);

    const docRef = await addDoc(requestsRef, dataToSubmit);
    console.log('[WAITLIST] SUCCESS! Doc ID:', docRef.id);

    return {
      success: true,
      message: 'Demo access request submitted successfully',
      request_id: docRef.id,
    };
  } catch (err) {
    console.error('[WAITLIST] ERROR:', err);
    console.error('[WAITLIST] Error details:', {
      name: err instanceof Error ? err.name : 'Unknown',
      message: err instanceof Error ? err.message : 'Unknown error',
      code: (err as any).code,
      stack: err instanceof Error ? err.stack : 'No stack trace'
    });

    if (err instanceof Error) {
      return {
        success: false,
        message: err.message,
      };
    }

    return {
      success: false,
      message: 'Failed to submit request. Please try again.',
    };
  }
}
