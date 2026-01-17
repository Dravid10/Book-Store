import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import { useState } from 'react'
import Signup from './pages/Signup'
import AdminBooks from './pages/AdminBooks'
import AddBook from './pages/AddBook'
import AdminUsers from './pages/AdminUsers'
import BooksPage from './pages/BooksPage'

function App() {

  const [loggedUser, setLoggedUser] = useState(() => {
    const user = sessionStorage.getItem("loggedUser");
    return user ? JSON.parse(user) : null;
  });

  const myNavigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("loggedUser");
    setLoggedUser(null);
    myNavigate("/");
  }

  const isLoggedIn = loggedUser !== null;

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-around'>
        <h3>Bookstore</h3>

        <ul className='navbar-nav'>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/books">Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          {!isLoggedIn ? (
            <Link to="/login" className='btn btn-info'>Login</Link>
          ) : (
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<Login setLoggedUser={setLoggedUser} />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/admin-users' element={<AdminUsers />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </>
  )
}

export default App
