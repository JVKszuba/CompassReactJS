import './App.css'

import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

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
                <li>
                    <Link to = "/dashboard">Dashboard</Link>
                </li>
            </ul>
            <div>
                <h2>Tasks</h2>
                <Link to = "/tasks/1">Tasks 1</Link>
                <Link to = "/tasks/2">Tasks 2</Link>
                <Link to = "/tasks/3">Tasks 3</Link>
            </div>
            <div>
                <h2>Itens</h2>
                <Link to = "/items/1">Item 1</Link>
            </div>
        </nav>
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/dashboard" element = {<Dashboard />}>
                <Route path = "profile" element = {<Profile />} />
                <Route path = "settings" element = {<Settings />} />
            </Route>
            <Route path = "/tasks/:taskId" element = {<TaskDetails />} />
            <Route path = "*" element = {<NotFound />} />
        </Routes>
    </>
  )
}

export default App
