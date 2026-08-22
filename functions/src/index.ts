import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { logger } from 'firebase-functions';
import { Resend } from 'resend';
import { getAdminEmailHTML, getAdminEmailText } from './emails/adminNotification';
import { getUserEmailHTML, getUserEmailText } from './emails/userConfirmation';

/**
 * Cloud Function triggered when a new contact request is created in Firestore.
 * Sends two emails:
 * 1. Admin notification to contact@goferai.space (forwarded via ImprovMX)
 * 2. User confirmation to the submitter
 */
export const sendContactEmails = onDocumentCreated(
  'contact_requests/{requestId}',
  async (event) => {
    const requestId = event.params.requestId;
    const data = event.data?.data();

    if (!data) {
      logger.error('[CONTACT] No data found in document', { requestId });
      return;
    }

    logger.info('[CONTACT] Processing new contact request', {
      requestId,
      email: data.email,
      subject: data.subject
    });

    try {
      // Initialize Resend inside the function (secrets available at runtime)
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        logger.error('[CONTACT] RESEND_API_KEY environment variable not set');
        throw new Error('RESEND_API_KEY environment variable is required');
      }
      const resend = new Resend(apiKey);

      const contactData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      const fromEmail = process.env.FROM_EMAIL;
      if (!fromEmail) {
        logger.error('[CONTACT] FROM_EMAIL environment variable not set');
        throw new Error('FROM_EMAIL environment variable is required');
      }

      // Send admin notification to contact@goferai.space (forwarded via ImprovMX)
      logger.info('[CONTACT] Sending admin notification');
      const adminResult = await resend.emails.send({
        from: fromEmail,
        to: 'contact@goferai.space',
        subject: `[Gofer AI Contact] ${contactData.subject}`,
        html: getAdminEmailHTML(contactData, requestId),
        text: getAdminEmailText(contactData, requestId),
        reply_to: 'contact@goferai.space',
      });

      if (adminResult.error) {
        logger.error('[CONTACT] Admin email failed', {
          error: adminResult.error,
          requestId
        });
        throw new Error(`Admin email failed: ${adminResult.error.message}`);
      }

      logger.info('[CONTACT] Admin notification sent successfully', {
        emailId: adminResult.data?.id,
        requestId
      });

      // Send user confirmation
      logger.info('[CONTACT] Sending user confirmation');
      const userResult = await resend.emails.send({
        from: fromEmail,
        to: contactData.email,
        subject: 'We received your message - Gofer AI',
        html: getUserEmailHTML(contactData),
        text: getUserEmailText(contactData),
        reply_to: 'contact@goferai.space',
      });

      if (userResult.error) {
        logger.error('[CONTACT] User confirmation failed', {
          error: userResult.error,
          requestId
        });
        // Don't throw - admin email already sent successfully
      } else {
        logger.info('[CONTACT] User confirmation sent successfully', {
          emailId: userResult.data?.id,
          requestId
        });
      }

      logger.info('[CONTACT] Email processing complete', {
        requestId,
        adminEmailId: adminResult.data?.id,
        userEmailId: userResult.data?.id,
      });

    } catch (error) {
      logger.error('[CONTACT] Error processing emails', {
        error: error instanceof Error ? error.message : 'Unknown error',
        requestId,
        stack: error instanceof Error ? error.stack : undefined
      });

      // Don't throw - we don't want to retry repeatedly
      // The contact form submission already succeeded in Firestore
      // Manual follow-up can happen if emails fail
    }
  }
);
