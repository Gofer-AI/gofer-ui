import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitWaitlistRequest } from '../lib/waitlist';
import type { WaitlistFormData } from '../types';

/**
 * Props for WaitlistForm component
 */
interface WaitlistFormProps {
  /** Callback when form is successfully submitted */
  onSuccess?: () => void;
}

/**
 * WaitlistForm Component
 *
 * Enhanced waitlist form for demo access requests.
 * Collects detailed user information for selective approval process.
 *
 * Fields:
 * - Full Name (required)
 * - Email (required, validated)
 * - Organization (required)
 * - Role/Title (required)
 * - Use Case (required, min 50 chars)
 * - LinkedIn URL (optional)
 * - Website URL (optional)
 */
export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    full_name: '',
    email: '',
    organization: '',
    role: '',
    use_case: '',
    linkedin_url: '',
    website: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof WaitlistFormData, string>>>({});
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
   * Validate URL format
   */
  const isValidUrl = (url: string): boolean => {
    if (!url) return true; // Optional field
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Validate all form fields
   */
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof WaitlistFormData, string>> = {};

    // Required fields
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Role/Title is required';
    }

    if (!formData.use_case.trim()) {
      newErrors.use_case = 'Please tell us about your use case';
    } else if (formData.use_case.trim().length < 50) {
      newErrors.use_case = 'Please provide at least 50 characters describing your use case';
    }

    // Optional URL validation
    if (formData.linkedin_url && !isValidUrl(formData.linkedin_url)) {
      newErrors.linkedin_url = 'Please enter a valid URL';
    }

    if (formData.website && !isValidUrl(formData.website)) {
      newErrors.website = 'Please enter a valid URL';
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
      const response = await submitWaitlistRequest(formData);

      if (response.success) {
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          full_name: '',
          email: '',
          organization: '',
          role: '',
          use_case: '',
          linkedin_url: '',
          website: '',
        });

        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitError(response.message || 'Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('[FORM] Unexpected error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to submit request. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handle input change
   */
  const handleChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-block text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors">
            Gofer <span className="text-blue-600">AI</span>
          </Link>
        </div>
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Request Submitted Successfully!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for your interest in Gofer AI. We've received your demo access request.
        </p>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6 text-left">
          <h4 className="text-lg font-semibold text-white mb-3">What happens next?</h4>
          <ol className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-semibold mr-3 flex-shrink-0">1</span>
              <span>Our team will review your application within 1 to 2 weeks</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-semibold mr-3 flex-shrink-0">2</span>
              <span>If approved, you'll receive an email with login credentials</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-semibold mr-3 flex-shrink-0">3</span>
              <span>Use your credentials to access the demo at the Demo Access link above</span>
            </li>
          </ol>
        </div>

          <p className="text-gray-400 text-xs">
            Questions? Email us at <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300">support@goferai.space</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="full-name"
          type="text"
          value={formData.full_name}
          onChange={(e) => handleChange('full_name', e.target.value)}
          placeholder="John Doe"
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.full_name ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.full_name && <p className="mt-1 text-sm text-red-500">{errors.full_name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john@example.com"
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
          Organization / Company <span className="text-red-500">*</span>
        </label>
        <input
          id="organization"
          type="text"
          value={formData.organization}
          onChange={(e) => handleChange('organization', e.target.value)}
          placeholder="MIT Robotics Lab"
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.organization ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.organization && <p className="mt-1 text-sm text-red-500">{errors.organization}</p>}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
          Role / Title <span className="text-red-500">*</span>
        </label>
        <input
          id="role"
          type="text"
          value={formData.role}
          onChange={(e) => handleChange('role', e.target.value)}
          placeholder="Research Scientist, PhD Student, Robotics Engineer, etc."
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.role ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
      </div>

      {/* Use Case */}
      <div>
        <label htmlFor="use-case" className="block text-sm font-medium text-gray-300 mb-2">
          Use Case / Why do you want access? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="use-case"
          value={formData.use_case}
          onChange={(e) => handleChange('use_case', e.target.value)}
          placeholder="Tell us about your robotics research, project, or application. What would you use Gofer AI for? (minimum 50 characters)"
          rows={4}
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.use_case ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <div className="flex justify-between items-center mt-1">
          {errors.use_case ? (
            <p className="text-sm text-red-500">{errors.use_case}</p>
          ) : (
            <p className="text-sm text-gray-500">
              {formData.use_case.length} / 50 characters minimum
            </p>
          )}
        </div>
      </div>

      {/* LinkedIn (Optional) */}
      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
          LinkedIn URL <span className="text-gray-500">(optional)</span>
        </label>
        <input
          id="linkedin"
          type="url"
          value={formData.linkedin_url}
          onChange={(e) => handleChange('linkedin_url', e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.linkedin_url ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.linkedin_url && <p className="mt-1 text-sm text-red-500">{errors.linkedin_url}</p>}
      </div>

      {/* Website (Optional) */}
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
          Website / Lab URL <span className="text-gray-500">(optional)</span>
        </label>
        <input
          id="website"
          type="url"
          value={formData.website}
          onChange={(e) => handleChange('website', e.target.value)}
          placeholder="https://yourlab.edu or https://yourwebsite.com"
          className={`w-full px-4 py-3 bg-gray-800 border ${
            errors.website ? 'border-red-500' : 'border-gray-700'
          } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="p-4 bg-red-950 border border-red-800 rounded-lg">
          <p className="text-red-400 text-sm">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-800 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors touch-manipulation"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {isSubmitting ? 'Submitting...' : 'Request Demo Access'}
      </button>

      <p className="text-center text-sm text-gray-500">
        By submitting, you agree to be contacted about demo access.
      </p>
    </form>
  );
}
