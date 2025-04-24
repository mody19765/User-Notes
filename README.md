# 📝 User-Notes API

A full-featured Notes Management REST API built with Node.js, Express, and MongoDB, designed for seamless note-taking experiences with robust authentication, authorization, and role-based access control.

## 🚀 Features

- JWT Authentication (Login / Signup)
- User Roles: `user` & `admin`
- Notes CRUD: Create, Read, Update, Delete
- Role-based Access Control:
  - Admins can add users
  - Users manage only their own notes
- Data Validation using Joi
- Clean structure (controllers, services, routes)

## 📁 Project Structure

User-Notes/
├── config/         → MongoDB connection
├── controllers/    → Logic for users & notes
├── middleware/     → Auth & validation middleware
├── models/         → Mongoose schemas
├── routes/         → Express routes
├── services/       → Business logic
├── utils/          → Utility functions
└── index.js        → App entry point

## 🔧 Installation

1. Clone the repo:
   git clone https://github.com/mody19765/User-Notes.git
   cd User-Notes

2. Install dependencies:
   npm install

3. Create a `.env` file:
   PORT=3000  
   MONGO_URI=your_mongo_connection_string  
   JWT_SECRET=your_jwt_secret

4. Start the app:
   npm start

## 🔑 API Endpoints

### Auth Routes
- `POST /signup` → Register a new user
- `POST /login` → Login and receive token

### Notes Routes
- `POST /notes` → Create a note (user only)
- `GET /notes` → Get your notes
- `GET /notes/user/:id` → Admin fetches any user notes
- `PATCH /notes/:id` → Update a note
- `DELETE /notes/:id` → Delete a note

### Admin Route
- `POST /users/add` → Admin adds user

## 📦 MongoDB Models

**User**
- name: String  
- email: String  
- password: String (hashed)  
- age: Number  
- role: 'user' | 'admin'

**Note**
- title: String  
- description: String  
- createdBy: ObjectId (User)

## ✅ Upcoming Features

- Password reset with email
- Dashboard stats
- Note search and filters
- Swagger docs

## 📫 Contact

Mohamed Ehab  
Email: mody.19765@gmail.com  
GitHub: https://github.com/mody19765

## ⭐️ Support

If you like this project, please consider giving it a ⭐️ on GitHub!
