const axios = require('axios');
require('dotenv').config();

const sendWelcomeEmail = async (toEmail, name) => {
  await axios.post(
    'https://api.brevo.com/v3/smtp/email',
    {
      sender: { name: 'TripIndia', email: process.env.SENDER_EMAIL },
      to: [{ email: toEmail, name: name }],
      subject: 'Welcome to TripIndia! 🎉',
      htmlContent: `
        <h2>Hi ${name},</h2>
        <p>Welcome to <b>TripIndia</b> — your smart travel companion!</p>
        <p>You can now explore famous places, plan trips, and get AI-powered itineraries.</p>
        <br/>
        <p>Happy Travels! </p>
        <p><i>- Team TripIndia</i></p>
      `
    },
    {
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json'
      }
    }
  );
};

module.exports = { sendWelcomeEmail };