🧳 TripIndia — AI-Powered Travel Planner

TripIndia is a full-stack travel planning web app for exploring India. Search any destination, discover famous places, hotels, and local food, get a step-by-step journey planner from your city, and generate a personalized AI-powered day-by-day itinerary — all in one place.

🔗 Live Demo: [Add your deployed link here once live]


✨ Features


🔐 Authentication — Register/Login with JWT, bcrypt password hashing, and a welcome email on signup
🏞️ 30 Indian Destinations — Curated places, hotels, food, and transport info for each
🔍 Explore & Search — Live search across all destinations
🗺️ Journey Planner — Step-by-step travel guide from your city to any destination, with auto location detection
🤖 AI Itinerary Generator — Personalized day-by-day trip plans based on duration, budget, and interests
💾 Save Trips — Save generated itineraries to your account and view/delete them anytime
📧 Contact Form — Sends real emails via Nodemailer
📱 Fully Responsive — Works smoothly on mobile and desktop



🛠️ Tech Stack

Frontend: React, React Router, Tailwind CSS
Backend: Node.js, Express
Database: MySQL
AI: Groq API (llama-3.3-70b-versatile)
Email: Nodemailer (Gmail App Password)
Geolocation: Nominatim / OpenStreetMap (for auto-detect location)
Auth: JWT, bcrypt


📁 Project Structure

tripIndia/
├── client/my-app/      # React frontend
│   ├── src/
│   │   ├── pages/       # Landing, Login, Register, Home, Destination, Itinerary, Journey, MyTrips, etc.
│   │   ├── components/  # Navbar, ProtectedRoute
│   │   └── data/        # destinations.js — data for 30 destinations
│   └── public/
│
└── server/              # Node.js backend
    ├── config/          # db.js, mailer.js
    ├── controllers/      # auth, itinerary, trips, contact
    ├── routes/
    └── middleware/       # JWT auth middleware


🚀 Getting Started Locally

Prerequisites


Node.js
MySQL
A Groq API key (free at console.groq.com)
A Gmail account with an App Password (for email features)


1. Clone the repo

bashgit clone https://github.com/baji532/tripindia.git
cd tripindia

2. Backend Setup

bashcd server
npm install

Create a .env file in server/:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=tripindia
JWT_SECRET=your_jwt_secret
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
GROQ_API_KEY=your_groq_api_key

Set up the database:

sqlCREATE DATABASE tripindia;
USE tripindia;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE saved_trips (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  destination VARCHAR(100) NOT NULL,
  days INT NOT NULL,
  budget VARCHAR(50),
  itinerary_data JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

Run the server:

bashnpm run dev

3. Frontend Setup

bashcd client/my-app
npm install
npm start

The app will be running at http://localhost:3000


📌 Roadmap / Future Improvements


Add real hotel booking integration
Replace placeholder images with verified destination photography
Add user reviews on places
PDF export for saved itineraries



👤 Author

Built solo by [Your Name] as a full-stack portfolio project.


📄 License

This project is for educational and portfolio purposes.
