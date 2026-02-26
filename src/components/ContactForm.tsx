import { useState } from 'react';
import { submitContactRequest } from '../lib/contact';
import type { ContactFormData } from '../types';

/**
 * Props for ContactForm component
 */
interface ContactFormProps {
  /** Callback when form is successfully submitted */
  onSuccess?: () => void;
  /** Callback when user cancels the form */
  onCancel?: () => void;
}

/**
 * ContactForm Component
 *
 * Contact inquiry form for users to reach out to the team.
 * Collects basic contact information and message.
 *
 * Fields:
 * - Name (required)
 * - Email (required, validated)
 * - Subject (required)
 * - Message (required, min 20 chars)
 */
export default function ContactForm({ onSuccess, onCancel }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  /**
   * Validate email format
   */
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Validate all form fields
   */
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log('[CONTACT] Submitting form...');
      const result = await submitContactRequest(formData);

      if (result.success) {
        console.log('[CONTACT] Submission successful');
        setSubmitSuccess(true);

        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        console.error('[CONTACT] Submission failed:', result.error);
        setSubmitError(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('[CONTACT] Error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handle input changes
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitSuccess) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400 mb-6">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-900/60 border ${
              errors.name ? 'border-red-500' : 'border-gray-800'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            placeholder="Your name"
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-900/60 border ${
              errors.email ? 'border-red-500' : 'border-gray-800'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-900/60 border ${
              errors.subject ? 'border-red-500' : 'border-gray-800'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
            placeholder="What is this regarding?"
            disabled={isSubmitting}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-900/60 border ${
              errors.message ? 'border-red-500' : 'border-gray-800'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
            placeholder="Your message..."
            disabled={isSubmitting}
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
          <p className="mt-1 text-xs text-gray-500">
            {formData.message.length} characters (minimum 20)
          </p>
        </div>
      </div>

      {/* Error message */}
      {submitError && (
        <div className="p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
          <p className="text-sm text-red-400">{submitError}</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors border border-gray-700"
          >
            Cancel
          </button>
        )}
      </div>

      <p className="text-gray-400 text-xs text-center">
        Or email us directly at{' '}
        <a href="mailto:contact@goferai.space" className="text-blue-400 hover:text-blue-300">
          contact@goferai.space
        </a>
      </p>
    </form>
  );
}
