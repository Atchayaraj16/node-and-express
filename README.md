 ## Movie Gallery App — MERN Stack Project
A fully functional Movie Gallery CRUD application built using the MERN stack (MongoDB, Express.js, React, Node.js) with an optional index.html version using plain HTML, CSS, and JavaScript.

You can add, edit, delete, and search movie records in real time.

## Tech Stack
Frontend
- React.js
- HTML, CSS, JavaScript (index.html version)
- Axios (for API calls)

Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS / JSON middleware

Hosting
- Backend: Render

Example endpoint: https://node-and-express-6.onrender.com/movies

- Frontend: Can run locally (npm start) 
## Features
- Add new movies (Title, Description)
- Edit existing movie details
- Delete movies by ID
- Search movies by title
- Auto-fetch all movies on page load
- Fully API-integrated with MongoDB
## Deployment
- Backend
Hosted on Render
- Update the base API URL in React:
axios.get("https://node-and-express-6.onrender.com/movies")
## Why Two Frontends?
- React Version: Full-featured, component-based UI using state/hooks.
- HTML/CSS/JS Version: For practice/demo purposes, no build step required.
Key Learnings
Connecting React frontend with Express backend via Axios

## Key Learnings
- Connecting React frontend with Express backend via Axios
- RESTful routing in Express
- MongoDB CRUD via Mongoose
- Dynamic rendering using React's state and useEffect
- Hosting with Render


