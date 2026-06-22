const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  }
});

const sendWelcomeEmail = async (toEmail, name) => {
  const mailOptions = {
    from: `"TripIndia" <${process.env.BREVO_USER}>`,
    to: toEmail,
    subject: 'Welcome to TripIndia! 🎉',
    html: `
      <h2>Hi ${name},</h2>
      <p>Welcome to <b>TripIndia</b> — your smart travel companion!</p>
      <p>You can now explore famous places, plan trips, and get AI-powered itineraries.</p>
      <br/>
      <p>Happy Travels! 🚀</p>
      <p><i>- Team TripIndia</i></p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendWelcomeEmail };