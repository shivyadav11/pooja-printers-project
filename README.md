# 🖨️ Pooja Printers - Full Stack Printing Services Website

A modern and professional **Full Stack Printing Services Website** built for a real printing business named  
**Pooja Printers** located in **Kandivali West, Mumbai**.

This project includes a complete **User Website + Admin Panel + Backend API + MongoDB Database**.




## 🌟 Project Highlights

✅ Modern & Premium UI Design  
✅ Fully Responsive Website (Mobile + Desktop)  
✅ Portfolio Upload with Image Upload  
✅ Pricing Packages Management  
✅ Quote Form with Design Upload  
✅ Admin Panel Dashboard  
✅ MongoDB Database Integration  
✅ REST API using Express.js  
✅ WhatsApp Direct Chat Button  
✅ Call Now Button  

---

## 🔥 Features

### 🌐 User Side Website
- Home Page with Professional Hero Section
- Services Listing
- Portfolio Gallery
- Pricing Packages
- Get Quote Form (Upload Design)
- Contact Page
- WhatsApp Order Button (Direct WhatsApp Chat)
- Floating WhatsApp Button

---

### 🛠 Admin Panel
- Admin Login Page
- Dashboard Overview
- Manage Services (Add / Delete)
- Manage Pricing (Add / Delete)
- Manage Portfolio (Upload / Delete)
- View Quote Requests
- Admin Sidebar Navigation UI

---

### ⚙️ Backend Features
- MongoDB Database Connection
- CRUD APIs for:
  - Services
  - Portfolio
  - Pricing
  - Quotes
- File Upload using Multer
- Clean folder structure (routes/controllers/models)

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (File Upload)
- Dotenv
- CORS

---



## 📁 Folder Structure

pooja-printers-project/
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── layouts/
│ │ ├── pages/
│ │ │ ├── admin/
│ │ │ ├── Home.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Portfolio.jsx
│ │ │ ├── Pricing.jsx
│ │ │ ├── Quote.jsx
│ │ │ ├── Contact.jsx
│ │ ├── utils/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── package.json
│
├── server/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── uploads/
│ ├── server.js
│ ├── package.json
│
└── README.md

# 🚀 Setup Guide (Zero to Run)

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/pooja-printers-project.git
cd pooja-printers-project


## 2️⃣ Backend Setup (Node + Express)
📌 Move into server folder
cd server

📌 Install dependencies
npm install

📌 Create .env file inside server folder

📌 server/.env

PORT=5000
MONGO_URI=your_mongodb_connection_string

📌 Start Backend Server
npm run dev


Backend runs on:
✅ http://localhost:5000

3️⃣ Frontend Setup (React + Tailwind)
📌 Move into frontend folder
cd ../frontend

📌 Install dependencies
npm install

📌 Start Frontend
npm run dev


Frontend runs on:
✅ http://localhost:5173

🔑 Admin Panel Login

Admin Panel URL:

✅ http://localhost:5173/admin/login

Default Admin Credentials
Email: admin@pooja.com
Password: 12345

Live demo: https://pooja-printers-project.vercel.app/services
