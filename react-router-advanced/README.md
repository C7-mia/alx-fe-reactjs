# REACT ROUTER ADVANCED

 # Project Overview

This project demonstrates advanced routing techniques in a React application using React Router v6.
It focuses on:

Nested routes (Profile sub-pages: details, settings)

Protected routes with authentication

Dynamic routes (Blog posts with variable IDs)

Error handling for unmatched routes


The goal is to build a robust, scalable React application with clean route management, proper authentication flow, and dynamic content rendering.

# Technical Stack

Frontend Framework: React 18

Routing: React Router v6

State Management: React Context API (AuthContext)

Build Tool: Vite

Package Manager: npm
# Project Structure

react-router-advanced/
├─ .gitignore
├─ package.json
├─ vite.config.js
├─ index.html
├─ README.md
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ components/
   │  └─ NavBar.jsx
   ├─ context/
   │  └─ AuthContext.jsx
   ├─ routes/
   │  └─ ProtectedRoute.jsx
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ Login.jsx
   │  ├─ Blog.jsx
   │  ├─ Post.jsx
   │  ├─ Profile.jsx
   │  ├─ ProfileDetails.jsx
   │  ├─ ProfileSettings.jsx
   │  └─ NotFound.jsx
   └─ data/
      └─ posts.js

# Key Features

🔹 Nested Routes

Profile page has sub-routes for ProfileDetails and ProfileSettings.

Navigation is seamless within the profile section.


🔹 Protected Routes

Certain routes (e.g., /profile) require authentication.

Implemented via ProtectedRoute.jsx using React Context (AuthContext).

Redirects unauthenticated users to /login.


🔹 Dynamic Routes

Blog posts have dynamic URLs: /blog/:postId.

Post.jsx fetches the post from data/posts.js based on the postId parameter.


🔹 Error Handling

NotFound.jsx handles unmatched routes (path="*").


🔹 Navigation

NavBar.jsx provides navigation links for Home, Blog, Login, Profile, etc.

# Implementation Details

App.jsx: Sets up routing with <Routes> and <Route> components.

AuthContext.jsx: Manages authentication state globally.

ProtectedRoute.jsx: Wraps protected routes, checks isAuthenticated state, redirects if needed.

Blog.jsx & Post.jsx: Render posts list and individual post based on postId.

Profile.jsx: Acts as a layout for nested routes (details, settings).

NotFound.jsx: Generic 404 page for unknown routes.

# Sample Navigation Flow

/           → Home
/blog       → Blog list
/blog/1     → Post details for postId=1
/login      → Login form
/profile    → Protected Route
   /details   → Profile details (nested)
   /settings  → Profile settings (nested)
/unknown    → 404 NotFound page

# Setup & Installation

1. Clone the repository:


git clone https://github.com/C7-mia/alx-fe-reactjs.git
cd alx-fe-reactjs/react-router-advanced

2. Install dependencies:



npm install

3. Run the development server:


npm run dev

# open in browser:

http://localhost:5173

# Future Enhancements

Integrate API calls for Blog posts instead of static data.

Add real authentication with JWT or OAuth.

Add protected admin routes.

Add unit/integration tests for routes and protected logic.
# License

This project is part of the ALX Front-End Web Development program and intended for educational purposes.

