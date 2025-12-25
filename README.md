# Online Courses Platform

A front-end React application for an online courses platform. The project demonstrates core React concepts, routing, state management, and responsive UI using Tailwind CSS. All data is handled using dummy data with no backend integration.

---

## 🌟 Project Overview

This project allows users to browse online courses, view course details, add courses to a shopping cart, and simulate a simple login process. The goal is to showcase practical React skills in a clean, organized, and production-ready structure.

---

## 🧩 Features

- Home page with Hero, About, and Features sections
- Courses listing with pagination (6 courses per page)
- Course details page with dynamic routing
- Shopping cart with add / remove functionality
- Cart persistence using localStorage
- Simple login / logout simulation (no backend)
- Protected cart actions for logged-in users only
- Custom 404 Not Found page
- Fully responsive design

---

## 🗂 Project Structure

```
src/
│
├─ components/
│   ├─ Navbar.jsx
│   ├─ Hero.jsx
│   ├─ CourseCard.jsx
│   └─ Pagination.jsx
│
├─ pages/
│   ├─ Home.jsx
│   ├─ Courses.jsx
│   ├─ CourseDetails.jsx
│   ├─ Cart.jsx
│   ├─ Login.jsx
│   └─ NotFound.jsx
│
├─ context/
│   ├─ CartContext.jsx
│   └─ AuthContext.jsx
│
├─ data/
│   └─ coursesData.js
│
├─ App.jsx
├─ main.jsx
└─ index.css
```

---

## 🚀 How to Run the Project

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm run dev
```

3. Open the app in your browser:
```
http://localhost:5173
```

---

## 🔐 Authentication Logic

- Login is simulated (no backend)
- User login state is stored in localStorage
- Logged-out users are redirected to the Login page when attempting to add courses to the cart
- Navbar dynamically updates based on authentication state

---

## 🛠 Technologies Used

- React
- React Router DOM
- React Hooks (useState, useEffect, useContext)
- Tailwind CSS
- Vite

---

## 📌 Notes

- This project is front-end only and uses dummy data
- The structure is designed to be easily extendable with a backend in the future

---

## ✅ Deployment

The project can be deployed using:
- Vercel
- GitHub Pages

---

Thank you for reviewing this project.

