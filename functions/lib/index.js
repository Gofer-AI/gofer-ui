"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmails = void 0;
const firestore_1 = require("firebase-functions/v2/firestore");
const firebase_functions_1 = require("firebase-functions");
const resend_1 = require("resend");
const adminNotification_1 = require("./emails/adminNotification");
const userConfirmation_1 = require("./emails/userConfirmation");
/**
 * Cloud Function triggered when a new contact request is created in Firestore.
 * Sends two emails:
 * 1. Admin notification to contact@goferai.space (forwarded via ImprovMX)
 * 2. User confirmation to the submitter
 */
exports.sendContactEmails = (0, firestore_1.onDocumentCreated)('contact_requests/{requestId}', async (event) => {
    var _a, _b, _c, _d, _e;
    const requestId = event.params.requestId;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!data) {
        firebase_functions_1.logger.error('[CONTACT] No data found in document', { requestId });
        return;
    }
    firebase_functions_1.logger.info('[CONTACT] Processing new contact request', {
        requestId,
        email: data.email,
        subject: data.subject
    });
    try {
        // Initialize Resend inside the function (secrets available at runtime)
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            firebase_functions_1.logger.error('[CONTACT] RESEND_API_KEY environment variable not set');
            throw new Error('RESEND_API_KEY environment variable is required');
        }
        const resend = new resend_1.Resend(apiKey);
        const contactData = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
        };
        const fromEmail = process.env.FROM_EMAIL;
        if (!fromEmail) {
            firebase_functions_1.logger.error('[CONTACT] FROM_EMAIL environment variable not set');
            throw new Error('FROM_EMAIL environment variable is required');
        }
        // Send admin notification to contact@goferai.space (forwarded via ImprovMX)
        firebase_functions_1.logger.info('[CONTACT] Sending admin notification');
        const adminResult = await resend.emails.send({
            from: fromEmail,
            to: 'contact@goferai.space',
            subject: `[Gofer AI Contact] ${contactData.subject}`,
            html: (0, adminNotification_1.getAdminEmailHTML)(contactData, requestId),
            text: (0, adminNotification_1.getAdminEmailText)(contactData, requestId),
            reply_to: 'contact@goferai.space',
        });
        if (adminResult.error) {
            firebase_functions_1.logger.error('[CONTACT] Admin email failed', {
                error: adminResult.error,
                requestId
            });
            throw new Error(`Admin email failed: ${adminResult.error.message}`);
        }
        firebase_functions_1.logger.info('[CONTACT] Admin notification sent successfully', {
            emailId: (_b = adminResult.data) === null || _b === void 0 ? void 0 : _b.id,
            requestId
        });
        // Send user confirmation
        firebase_functions_1.logger.info('[CONTACT] Sending user confirmation');
        const userResult = await resend.emails.send({
            from: fromEmail,
            to: contactData.email,
            subject: 'We received your message - Gofer AI',
            html: (0, userConfirmation_1.getUserEmailHTML)(contactData),
            text: (0, userConfirmation_1.getUserEmailText)(contactData),
            reply_to: 'contact@goferai.space',
        });
        if (userResult.error) {
            firebase_functions_1.logger.error('[CONTACT] User confirmation failed', {
                error: userResult.error,
                requestId
            });
            // Don't throw - admin email already sent successfully
        }
        else {
            firebase_functions_1.logger.info('[CONTACT] User confirmation sent successfully', {
                emailId: (_c = userResult.data) === null || _c === void 0 ? void 0 : _c.id,
                requestId
            });
        }
        firebase_functions_1.logger.info('[CONTACT] Email processing complete', {
            requestId,
            adminEmailId: (_d = adminResult.data) === null || _d === void 0 ? void 0 : _d.id,
            userEmailId: (_e = userResult.data) === null || _e === void 0 ? void 0 : _e.id,
        });
    }
    catch (error) {
        firebase_functions_1.logger.error('[CONTACT] Error processing emails', {
            error: error instanceof Error ? error.message : 'Unknown error',
            requestId,
            stack: error instanceof Error ? error.stack : undefined
        });
        // Don't throw - we don't want to retry repeatedly
        // The contact form submission already succeeded in Firestore
        // Manual follow-up can happen if emails fail
    }
});
//# sourceMappingURL=index.js.map