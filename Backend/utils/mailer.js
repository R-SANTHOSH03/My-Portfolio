import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_APP_PASSWORD,
//   },
// });
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Verify Error:", error);
  } else {
    console.log("SMTP Server is ready");
  }
});

export const sendOwnerNotification = async ({ name, email, subject, message }) => {
  return transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    replyTo: email,
    subject: `New portfolio message: ${subject || 'No subject'}`,
    html: `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background-color:#f4f5f7; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
              
              <!-- Header -->
              <tr>
                <td style="background-color:#111827; padding:28px 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="color:#ffffff; font-size:18px; font-weight:600; letter-spacing:0.3px;">
                        📩 New Contact Form Submission
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:16px; border-bottom:1px solid #eef0f3;">
                        <p style="margin:0 0 4px 0; font-size:12px; color:#9ca3af; text-transform:uppercase; letter-spacing:0.5px;">Name</p>
                        <p style="margin:0; font-size:15px; color:#111827; font-weight:500;">${name}</p>
                      </td>
                    </tr>
                    <tr><td style="height:16px;"></td></tr>
                    <tr>
                      <td style="padding-bottom:16px; border-bottom:1px solid #eef0f3;">
                        <p style="margin:0 0 4px 0; font-size:12px; color:#9ca3af; text-transform:uppercase; letter-spacing:0.5px;">Email</p>
                        <p style="margin:0; font-size:15px; color:#111827; font-weight:500;">
                          <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>
                        </p>
                      </td>
                    </tr>
                    <tr><td style="height:16px;"></td></tr>
                    <tr>
                      <td style="padding-bottom:16px; border-bottom:1px solid #eef0f3;">
                        <p style="margin:0 0 4px 0; font-size:12px; color:#9ca3af; text-transform:uppercase; letter-spacing:0.5px;">Subject</p>
                        <p style="margin:0; font-size:15px; color:#111827; font-weight:500;">${subject || '-'}</p>
                      </td>
                    </tr>
                    <tr><td style="height:20px;"></td></tr>
                    <tr>
                      <td>
                        <p style="margin:0 0 8px 0; font-size:12px; color:#9ca3af; text-transform:uppercase; letter-spacing:0.5px;">Message</p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; border-radius:8px; border:1px solid #eef0f3;">
                          <tr>
                            <td style="padding:16px; font-size:14px; color:#374151; line-height:1.6;">
                              ${message.replace(/\n/g, '<br/>')}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#f9fafb; padding:18px 32px; border-top:1px solid #eef0f3;">
                  <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center;">
                    This message was sent via your portfolio contact form.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `,
  });
};

export const sendUserConfirmation = async ({ name, email }) => {
  return transporter.sendMail({
    from: `"Santhosh R" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'Thanks for reaching out!',
    html: `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background-color:#f4f5f7; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

              <!-- Header with gradient -->
              <tr>
                <td style="background:linear-gradient(135deg,#4f46e5,#7c3aed); padding:40px 32px; text-align:center;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <p style="margin:0; font-size:20px; font-weight:600; color:#ffffff;">Message Received!</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 32px;">
                  <p style="margin:0 0 16px 0; font-size:16px; color:#111827;">Hi <strong>${name}</strong>,</p>
                  <p style="margin:0 0 16px 0; font-size:15px; color:#4b5563; line-height:1.7;">
                    Thank you for getting in touch! I've received your message and truly appreciate you taking the time to reach out.
                    I'll review it and get back to you as soon as possible — usually within 24–48 hours.
                  </p>
                  <p style="margin:0 0 28px 0; font-size:15px; color:#4b5563; line-height:1.7;">
                    In the meantime, feel free to check out my latest work or connect with me on social media.
                  </p>

                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color:#4f46e5; border-radius:6px;">
                        <a href="https://my-portfolio-topaz-one-ltxegvbwyz.vercel.app/" style="display:inline-block; padding:12px 28px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none;">
                          Visit My Portfolio
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Signature -->
              <tr>
                <td style="padding:0 32px 32px 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eef0f3; padding-top:20px;">
                    <tr>
                      <td>
                        <p style="margin:0; font-size:14px; color:#111827;">Best regards,</p>
                        <p style="margin:2px 0 0 0; font-size:15px; color:#111827; font-weight:700;">Santhosh R</p>
                        <p style="margin:2px 0 0 0; font-size:13px; color:#9ca3af;">Full-Stack Developer</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#f9fafb; padding:18px 32px; border-top:1px solid #eef0f3;">
                  <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center;">
                    This is an automated confirmation from my portfolio contact form.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `,
  });
};