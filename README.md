# 🏨 Resort Room Booking System

A full-stack web application that allows users to browse resort rooms, view room details, and make online reservations. The project is built using React for the frontend and Node.js, Express.js, and MongoDB for the backend.

---

## 📌 Features

- 🏠 Responsive Home Page
- 🛏️ Browse Different Room Categories
- 📖 View Room Details
- 📝 Online Room Booking Form
- ✅ Client-side Form Validation
- 🔒 Backend API Integration
- 💾 Booking Data Stored in MongoDB
- 📱 Responsive User Interface
- ⚡ Fast Navigation using React Router

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Bootstrap
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
Resort-Room-Booking-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.js
│   │   └── index.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/resort-room-booking-system.git
```

---

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/resortBookingDB
```

---

### 5. Start Backend

```bash
npm run dev
```

---

### 6. Start Frontend

```bash
npm start
```

The application will run at:

Frontend:
```
http://localhost:3000
```

Backend:
```
http://localhost:5000
```

---

## 📌 API Endpoint

### Create Booking

**POST**

```
/api/bookings
```

Stores booking information in MongoDB.

---

## 📸 Screenshots

- Home Page
- Room Listing
- Room Details
- Booking Form
- Booking Confirmation

*(Add screenshots here after uploading images.)*

---

## 📊 System Architecture

```
User
   │
   ▼
React Frontend
   │
REST API
   │
Node.js + Express
   │
Mongoose
   │
MongoDB
```

---

## 🚀 Future Enhancements

- User Authentication (JWT)
- Admin Dashboard
- Room Availability Management
- Online Payment Integration
- Booking History
- Email Confirmation
- Reviews & Ratings

---

## 👩‍💻 Author

**Shraddha Deore**

Computer Engineering Student

---

## 📄 License

This project is developed for educational and internship purposes.