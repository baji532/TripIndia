import { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [sending, setSending] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);
  setError('');
  try {
    await axios.post('http://localhost:5000/api/contact/send', formData);
    setSubmitted(true);
  } catch (err) {
    setError('Failed to send message. Please try again.');
  } finally {
    setSending(false);
  }
};
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar alwaysSolid />

      <div className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch 📬</h1>
        <p className="text-gray-500 mb-10">
          Have a question, feedback, or found a bug? We'd love to hear from you.
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-10">
              <p className="text-5xl mb-4">✅</p>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
              <p className="text-gray-500">Thanks for reaching out — we'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button
                type="submit"disabled={sending}
                className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition disabled:opacity-50">
                    {sending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
          )}
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default Contact;