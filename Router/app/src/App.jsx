import './App.css'

import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

function App() {
    
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className = {({isActive}) => (isActive ? "active-link" : "")}
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact />} />
            <Route path = "/login" element = {<Login />} />
        </Routes>
    </>
  )
}

export default App
