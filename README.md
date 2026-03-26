# React + Vite

# JobsUI – React Job Listing Application

A simple and clean job listing application built with **React**, **React Router**, **Axios**, and **JSON Server**.  
This project demonstrates full CRUD operations, routing with loaders, reusable layouts, and form handling.

---

## 🚀 Features

- View all job listings
- View job details (with React Router loader)
- Add a new job
- Edit an existing job
- Delete a job
- Toast notifications for all actions
- Clean component structure with layouts and pages
- Axios-based API layer
- JSON Server as mock backend

---

## 🛠️ Tech Stack

- **React 19**
- **React Router 7**
- **Axios**
- **JSON Server**
- **Vite**
- **TailwindCSS (v3)**

---

## 📂 Project Structure

src/
├── layouts/
│    └── MainLayout.jsx
├── pages/
│    ├── HomePage.jsx
│    ├── JobsPage.jsx
│    ├── JobPage.jsx
│    ├── AddJobPage.jsx
│    ├── EditJobPage.jsx
│    └── NotFound.jsx
├── components/
├── App.jsx
└── main.jsx


---

## ⚙️ API Endpoints (JSON Server)

GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
PUT    /api/jobs/:id
DELETE /api/jobs/:id


---

## ▶️ Running the Project

### 1. Install dependencies
npm install

### 2. Start JSON Server
npm run server

### 3. Start Vite dev server
npm run dev

