import Navbar from '../components/Navbar';

function Privacy() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar alwaysSolid />

      <div className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy 🔒</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">1. Information We Collect</h2>
            <p>When you create an account on TripIndia, we collect your name, email address, and a securely hashed password. We never store your password in plain text.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">2. How We Use Your Information</h2>
            <p>Your information is used to manage your account, save your travel itineraries, and send you a welcome email upon registration. We do not sell or share your data with third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">3. Saved Trips</h2>
            <p>Itineraries you generate and save are stored securely and linked only to your account. Only you can view, access, or delete your saved trips.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">4. Third-Party Services</h2>
            <p>We use AI services to generate travel itineraries. Destination search queries may be processed by these services solely to generate your requested content.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">5. Cookies & Storage</h2>
            <p>We use browser local storage to keep you logged in. No tracking cookies or third-party advertising scripts are used on this site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please reach out via our Contact page.</p>
          </section>

          <p className="text-sm text-gray-400 pt-4 border-t">
            Note: TripIndia is a student/portfolio project. This policy is provided for transparency and demonstration purposes.
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default Privacy;