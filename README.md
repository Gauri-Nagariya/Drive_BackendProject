<div align="center">

# 🗄️ MyDrive — File Storage Backend

### A full backend + server-rendered file management system, inspired by Google Drive

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-drive--x6zy.onrender.com-black?style=for-the-badge)](https://drive-x6zy.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-Server--Side%20Rendering-B4CA65?style=for-the-badge)](https://ejs.co/)
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com/)

</div>

---

## 📌 Overview

**MyDrive** is a full backend + server-rendered web application that lets users securely upload, view, download, and delete files — all stored directly inside **MongoDB as Binary Buffers**, with no local disk dependency. Built entirely with Node.js, Express, and EJS for server-side rendering.

> 💡 This project focuses on **backend architecture** — authentication, secure file handling, database storage, and clean MVC structure — with no separate frontend framework needed.

---

## ✨ Features

- 🔐 **User Authentication** — Register & login with JWT stored in cookies
- 🔒 **Password Security** — Hashing with Bcrypt
- 📤 **File Uploads** — Upload any file using Multer
- 🗃️ **MongoDB Binary Storage** — Files stored directly in MongoDB as Buffer/Binary — no local storage, no cloud bucket needed
- 👁️ **View Files** — Browse all uploaded files in a clean dashboard
- ⬇️ **Download Files** — Download any uploaded file on demand
- 🗑️ **Delete Files** — Remove files from the database instantly
- 👤 **Profile Management** — Update username, email, and password
- ✅ **Form Validation** — Server-side validation using `express-validator`
- 🍪 **Cookie Handling** — Secure session management via `cookie-parser`
- 🖥️ **Server-Side Rendering** — Dynamic pages rendered with EJS templates

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework & routing |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM for MongoDB |
| Multer | File upload handling |
| JWT (jsonwebtoken) | Authentication tokens |
| Bcrypt | Password hashing |
| EJS | Server-side HTML templating |
| express-validator | Form & input validation |
| cookie-parser | Cookie parsing middleware |
| dotenv | Environment variable management |
| Nodemon | Dev auto-restart |

---

## 📂 Project Structure

```
Drive_BackendProject/
│
├── config/                 # DB connection & config
├── middlewares/            # Auth middleware, validators
├── models/                 # Mongoose schemas (User, File)
├── routes/                 # Express route definitions
├── views/                  # EJS templates (HTML pages)
├── public/                 # Static assets (CSS, icons)
├── server.js               # App entry point
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository

```bash
git clone https://github.com/Gauri-Nagariya/Drive_BackendProject.git
cd Drive_BackendProject
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Server

```bash
npm run dev
```

App runs on [http://localhost:3000](http://localhost:3000)

---

## 🌐 API & Route Overview

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Home / landing page |
| `GET` | `/auth/register` | Register page |
| `POST` | `/auth/register` | Handle registration |
| `GET` | `/auth/login` | Login page |
| `POST` | `/auth/login` | Handle login, set JWT cookie |
| `GET` | `/home` | User dashboard (protected) |
| `POST` | `/file/upload` | Upload a file |
| `GET` | `/file/download/:id` | Download a file by ID |
| `DELETE` | `/file/delete/:id` | Delete a file by ID |
| `GET` | `/profile` | View profile (protected) |
| `POST` | `/profile/update` | Update profile details |

---

## 🔮 How It Works

```
User registers / logs in
        ↓
JWT token generated → stored in HTTP cookie
        ↓
Auth middleware verifies cookie on protected routes
        ↓
User uploads a file → Multer reads it into memory
        ↓
File binary data saved directly to MongoDB (Buffer)
        ↓
User views / downloads / deletes files from dashboard
        ↓
EJS templates render dynamic pages server-side 🖥️
```

---

## ☁️ Deployment

This project is deployed on **Render** and is fully cloud-ready:

- No local file storage required — everything lives in MongoDB
- Single `npm start` command to boot
- Works seamlessly with MongoDB Atlas for cloud DB

---

## 📬 Contact

**Gauri Nagariya** — Full-Stack / MERN Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gauri%20Nagariya-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/gauri-nagariya/)
[![GitHub](https://img.shields.io/badge/GitHub-Gauri--Nagariya-181717?style=flat&logo=github)](https://github.com/Gauri-Nagariya)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Site-ff69b4?style=flat&logo=vercel)](https://gaurinagariyaportfolio.vercel.app/)

---

<div align="center">
  <sub>Built with ❤️ by Gauri Nagariya &nbsp;|&nbsp; ⭐ Star this repo if you found it useful!</sub>
</div>
