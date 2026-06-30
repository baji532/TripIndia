const axios = require('axios');
require('dotenv').config();

exports.sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'TripIndia', email: process.env.SENDER_EMAIL },
        to: [{ email: process.env.BREVO_USER, name: 'TripIndia Admin' }],
        replyTo: { email: email, name: name },
        subject: `New Contact Message from ${name}`,
        htmlContent: `
          <h3>New message from TripIndia Contact Form</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact email error:', err.message);
    res.status(500).json({ message: 'Failed to send message' });
  }
};