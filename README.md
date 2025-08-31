# NetflixGPT 🎬🤖

**Discover movies with AI-powered recommendations, built with React, Tailwind, Firebase, TMDB, and OpenAI GPT.**

---

## 📖 Overview
NetflixGPT is a React-based movie discovery platform powered by **OpenAI's GPT**, **TMDB**, and **Firebase**.  
It features:
- User authentication
- AI-based movie suggestions
- Trailer playback
- Multi-language support
- Sleek responsive UI built with Tailwind CSS

---

## ✨ Features

### 🔐 Authentication & User Management
- Sign Up / Sign In / Sign Out with **Firebase Auth**
- Profile creation & updates
- Auth-based route guarding
- Cleanup of auth listeners

### 🎥 Movie Browsing
- Fetch and display **“Now Playing”** from TMDB
- Responsive movie cards & hero trailer section
- Trailer autoplay (muted)
- Visual layout powered by TMDB image CDN
- Performance optimization with **memoization** & custom hooks

### 🤖 AI Movie Search
- **GPT-powered** search bar & suggestion engine
- Multi-language support (English, Hindi, Spanish, etc.)
- TMDB-based detail fetching for GPT suggestions
- Clean responsive UI for all devices

---

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS
- **State Management:** Redux Toolkit (`userSlice`, `movieSlice`, `gptSlice`)
- **Backend Services:** Firebase (Auth & Hosting)
- **APIs:** TMDB API (Movie Data), OpenAI GPT (AI Suggestions)
- **Routing:** React Router
- **Utilities:** `useRef`, Custom Hooks, Memoisation
- **Config:** Environment variables via `.env`

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/siddhesh494/NetflixGPT.git
cd NetflixGPT

# Install dependencies
npm install

# Create a .env file in the root directory and add:
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key

# Run the development server
npm start
