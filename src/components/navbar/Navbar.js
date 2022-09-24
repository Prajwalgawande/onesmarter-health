import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <nav>
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navelements">
        <li>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/about">About</Link></ul>
          <ul><Link to="/">Services</Link></ul>
          <ul><Link to="/">Product</Link></ul>
          <ul><Link to="/">Team</Link></ul>
          <ul><Link to="/contact">Contact Us</Link></ul>
        </li>
      </div>
    </div>
   </nav>
  )
}

export default Navbar;