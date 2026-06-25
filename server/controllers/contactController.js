const { sendWelcomeEmail } = require('../config/mailer'); // we'll add a new function below
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  }
});

exports.sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: `"TripIndia Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // sends to yourself
    replyTo: email,
    subject: `New Contact Message from ${name}`,
    html: `
      <h3>New message from TripIndia Contact Form</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact email error:', err.message);
    res.status(500).json({ message: 'Failed to send message' });
  }
};