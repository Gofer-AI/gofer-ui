interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function getAdminEmailHTML(data: ContactFormData, requestId: string): string {
  return `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
  <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Request</h1>
  </div>

  <div style="padding: 30px; background: #ffffff;">
    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 8px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #111827;">${data.name}</span></p>
      <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></p>
      <p style="margin: 8px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #111827;">${data.subject}</span></p>
    </div>

    <div style="margin: 20px 0;">
      <h3 style="color: #111827; margin: 0 0 12px; font-size: 16px;">Message:</h3>
      <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
        <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </div>
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}"
         style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Reply to ${data.name.split(' ')[0]}
      </a>
    </div>
  </div>

  <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
    <p style="color: #6b7280; font-size: 12px; margin: 0;">
      Request ID: ${requestId}<br>
      Submitted via Gofer AI Contact Form
    </p>
  </div>
</body>
</html>
  `.trim();
}

export function getAdminEmailText(data: ContactFormData, requestId: string): string {
  return `
NEW CONTACT REQUEST - Gofer AI

From: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Reply to: ${data.email}
Request ID: ${requestId}
  `.trim();
}
