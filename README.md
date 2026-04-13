# React + Vite

# 📝 To-Do App (React + Vite + JSON Server)





---

## 📌 Project Overview

This is a **Full Functional To-Do (Appointment Management) Application** built using **React + Vite** with a fake backend powered by **JSON Server**.

The application allows users to:

* 🔐 Register & Login
* 📋 Manage Appointments (To-Do Tasks)
* 🔍 View, Filter, Sort Tasks
* ➕ Add New Appointment
* ✏️ Edit Existing Appointment
* ❌ Delete Appointment

---

## 🚀 Features

✅ User Authentication (Login/Register)
✅ Dashboard with Task Management
✅ CRUD Operations (Create, Read, Update, Delete)
✅ Routing using React Router
✅ API Integration using Axios
✅ JSON Server (Fake Backend)
✅ Clean Folder Structure
✅ Responsive UI

---

## 🧠 Concepts Used

### ⚛️ React Concepts

* Functional Components
* Hooks (`useState`, `useEffect`)
* Component Reusability
* Props & State Management

### 🌐 Routing

* React Router DOM
* Protected Routes (Login Required)
* Nested Routing

### 🔗 API Handling

* Axios for API Calls
* REST API Integration
* Async/Await & Promises

### 🗂️ State Management

* Local State Handling
* Form Handling
* Dynamic Rendering

### 🛠️ Backend (Mock)

* JSON Server
* RESTful APIs (`GET`, `POST`, `PUT`, `DELETE`)

---

## 📁 Folder Structure

```
src/
│
├── To-Do-App/
│   ├── Add-Appointment.jsx
│   ├── Appointment-Details.jsx
│   ├── Delete-appointment.jsx
│   ├── Edit-appointment.jsx
│   ├── Home.jsx
│   ├── Todo-Dashboard.jsx
│   ├── Todo-login.jsx
│   ├── Todo-register.jsx
│
├── routes/
│   └── routes.jsx
│
├── assets/
├── App.jsx
├── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/durgashankard/To-Do-App-React.git
cd To-Do-App-React
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

---

### 4️⃣ Run React App

```bash
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /appointments  | Fetch all tasks |
| POST   | /appointments  | Add new task    |
| PUT    | /appointments/ | Update task     |
| DELETE | /appointments/ | Delete task     |

---

## 🔐 Authentication Flow

* User registers → data stored in JSON Server
* Login validates credentials
* After login → redirect to Dashboard
* Unauthorized users cannot access protected routes

---

## 📊 Future Improvements

* 🔒 JWT Authentication
* ☁️ Deploy Backend (Render / Railway)
* 📱 Mobile Responsive UI
* 🔔 Notifications
* 📅 Calendar Integration

---

## 🚀 Deployment

You can deploy using:

* Vercel (Frontend)
* Render / Railway (Backend JSON Server)

---

## 👨‍💻 Author

**Durgashankar Dangi**
📌 BCA Student | MERN Stack Developer

---

## ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub
👉 Share with friends

---

## 📜 License

This project is licensed under the **MIT License**

---
