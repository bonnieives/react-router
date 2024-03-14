import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/"
        className={({isActive}) => (isActive ? "active" : "not-active")}>Home</NavLink>
        <NavLink to="/about"
        className={({isActive}) => (isActive ? "active" : "not-active")}>About</NavLink>
    </nav>
  )
}

export default Navbar
