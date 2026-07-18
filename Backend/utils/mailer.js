import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

export const sendOwnerNotification = async ({ name, email, subject, message }) => {
  return transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    replyTo: email,
    subject: `New portfolio message: ${subject || 'No subject'}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });
};

export const sendUserConfirmation = async ({ name, email }) => {
  return transporter.sendMail({
    from: `"Santhosh R" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'Thanks for reaching out!',
    html: `
      <h2>Hi ${name},</h2>
      <p>Thanks for getting in touch. I've received your message and will get back to you as soon as I can.</p>
      <br/>
      <p>Best regards,</p>
      <p><strong>Santhosh R</strong></p>
    `,
  });
};