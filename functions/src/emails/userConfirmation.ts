interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function getUserEmailHTML(data: ContactFormData): string {
  const firstName = data.name.split(' ')[0];

  return `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
  <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); padding: 40px; text-align: center;">
    <h1 style="color: white; margin: 0 0 10px; font-size: 28px;">
      Gofer <span style="color: #93c5fd;">AI</span>
    </h1>
    <p style="color: #bfdbfe; margin: 0; font-size: 14px;">
      Building the Cognitive Layer Between Human Skill & Robotic Execution
    </p>
  </div>

  <div style="padding: 40px 30px; background: #ffffff;">
    <h2 style="color: #111827; margin: 0 0 20px; font-size: 20px;">
      Thanks for reaching out, ${firstName}!
    </h2>

    <p style="color: #374151; margin: 0 0 20px; line-height: 1.6; font-size: 16px;">
      We've received your message and our team will get back to you as soon as possible.
    </p>

    <div style="background: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #2563eb; margin: 30px 0;">
      <p style="color: #6b7280; margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
        YOUR MESSAGE
      </p>
      <p style="color: #111827; margin: 0 0 12px; font-size: 16px; font-weight: 600;">
        ${data.subject}
      </p>
      <p style="color: #374151; margin: 0; font-size: 14px; line-height: 1.6;">
        ${data.message.length > 150 ? data.message.substring(0, 150).replace(/</g, '&lt;').replace(/>/g, '&gt;') + '...' : data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </p>
    </div>

    <p style="color: #374151; margin: 0; font-size: 14px; line-height: 1.6;">
      In the meantime, feel free to explore our
      <a href="https://goferai.space" style="color: #2563eb; text-decoration: none;">website</a>
      or check out our
      <a href="https://github.com/Gofer-AI" style="color: #2563eb; text-decoration: none;">GitHub</a>.
    </p>
  </div>

  <div style="background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
    <div style="margin-bottom: 15px;">
      <a href="https://goferai.space" style="color: #6b7280; text-decoration: none; font-size: 12px; margin: 0 10px;">Website</a>
      <span style="color: #d1d5db;">|</span>
      <a href="https://github.com/Gofer-AI" style="color: #6b7280; text-decoration: none; font-size: 12px; margin: 0 10px;">GitHub</a>
      <span style="color: #d1d5db;">|</span>
      <a href="mailto:contact@goferai.space" style="color: #6b7280; text-decoration: none; font-size: 12px; margin: 0 10px;">Contact</a>
    </div>
    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
      © 2026 Gofer AI. All rights reserved.
    </p>
  </div>
</body>
</html>
  `.trim();
}

export function getUserEmailText(data: ContactFormData): string {
  const firstName = data.name.split(' ')[0];

  return `
GOFER AI - MESSAGE RECEIVED

Hi ${firstName},

Thanks for reaching out! We've received your message and our team will get back to you as soon as possible.

Your Message:
Subject: ${data.subject}

${data.message.length > 200 ? data.message.substring(0, 200) + '...' : data.message}

In the meantime, feel free to explore our website or check out our GitHub for more information about Gofer AI.

Website: https://goferai.space
GitHub: https://github.com/Gofer-AI

---
© 2026 Gofer AI. All rights reserved.
  `.trim();
}
