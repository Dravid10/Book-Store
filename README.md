# 📚 Bookstore - E-Commerce Book Store Application

**Done by Dravid**

A modern, full-featured bookstore application built with React, featuring shopping cart functionality, book browsing, search, and admin features.

## 🚀 Features

- **Book Browsing**: Browse through a collection of books
- **Shopping Cart**: Add books to cart, manage quantities
- **Search & Filters**: Search by book name/author, filter by author, sort by price
- **Book Details**: View detailed information about each book
- **User Authentication**: Login/Signup functionality
- **Admin Dashboard**: Manage books and users (admin only)
- **Responsive Design**: Works on all devices

## 📦 Installation

1. Make sure you have Node.js installed
2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

You need to run TWO servers:

### 1. Backend Server (JSON Server)
Open a terminal and run:
```bash
npm run server
```
This will start the backend API on `http://localhost:5000`

### 2. Frontend Server (React App)
Open another terminal and run:
```bash
npm run dev
```
This will start the React app on `http://localhost:5173`

## 📖 Available Books

The database includes:
- Harry Potter and the Philosopher's Stone
- Harry Potter and the Chamber of Secrets  
- A Game of Thrones

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **React Router** - Navigation
- **Vite** - Build Tool
- **Axios** - HTTP Client
- **Bootstrap 5** - Styling
- **JSON Server** - Mock Backend API

## 📁 Project Structure

```
src/
├── components/     # Reusable components (Header, Footer, etc.)
├── context/        # React Context (CartContext)
├── pages/          # Page components
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## 🎯 Usage

1. Start both servers (backend and frontend)
2. Open `http://localhost:5173` in your browser
3. Browse books, add to cart, and explore!

## 👤 Admin Access

To access admin features, you'll need to create a user with `role: "admin"` in the `db.json` file.

---

**Project created by Dravid**

