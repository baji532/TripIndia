const SibApiV3Sdk = require('@getbrevo/brevo');
require('dotenv').config();

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.authentications['apiKey'].apiKey = process.env.BREVO_API_KEY;

const sendWelcomeEmail = async (toEmail, name) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = 'Welcome to TripIndia! 🎉';
  sendSmtpEmail.htmlContent = `
    <h2>Hi ${name},</h2>
    <p>Welcome to <b>TripIndia</b> — your smart travel companion!</p>
    <p>You can now explore famous places, plan trips, and get AI-powered itineraries.</p>
    <br/>
    <p>Happy Travels! </p>
    <p><i>- Team TripIndia</i></p>
  `;
  sendSmtpEmail.sender = { name: 'TripIndia', email: process.env.BREVO_USER };
  sendSmtpEmail.to = [{ email: toEmail, name: name }];

  return apiInstance.sendTransacEmail(sendSmtpEmail);
};

module.exports = { sendWelcomeEmail };