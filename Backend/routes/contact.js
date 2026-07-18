import express from 'express';
import { sendOwnerNotification, sendUserConfirmation } from '../utils/mailer.js';

const router = express.Router();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (message.length > 500) {
    return res.status(400).json({ error: 'Message must be 500 characters or fewer.' });
  }

  try {
    await sendOwnerNotification({ name, email, subject, message });
    await sendUserConfirmation({ name, email });

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

export default router;