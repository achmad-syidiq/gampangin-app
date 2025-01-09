# Inventory Management App

***Inventory Management*** web application with Smart Predict Stock built using MERN stack.

Developer Detail:
- Achmad Syidiq : 212102015
- EviListianingsih : 212102006
- Irfan Fauzi : 212102025

## Technology
This project uses the following technologies:

- **Front-end**: ReactJS, 

- **Back-end**: NodeJS, ExpressJS, MongoDB,

## Configuration
Add your own `MongoURI` from your Mongo Atlas database in `./config/keys.js`

```
module.exports = {
  mongoURI: "YOUR_MONGO_URI",
  sessionSecret: "SECRET_WORD"
};
```

## Quick Start

Make sure you have **Node** (version: `12.14.0` or above) installed in your system.

```
// Install dependencies for server & client

npm install

// Run client with concurrently
npm run dev

// Run server with concurrently
npm start

// Server runs on http://localhost:5000 and client on http://localhost:5173
```
