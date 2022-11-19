import React from 'react'
import { Link } from "react-router-dom";
import "./App.css"
const Navbar = () => {
  
 
 function toggleBar () {
   let icon =  document.getElementById("kk")
   icon.classList.toggle("close")
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle('mobile-menu')
 }
 
  return (
    <div>
    <nav className="navbar">
  <span>Ahmed Raza</span>
  <div className="nav-links">
    <ul className="nav-menu">
    <li className="active"> <Link to='/' >Home</Link>  </li>
      <li><Link to={'/Contact'} >Contact</Link></li>
      <li><Link to={'/Menu'} >Menu</Link></li>
      <li><Link to={'/About'} >About-us</Link></li>
    </ul>
  </div>

    <img  id='kk' onClick={toggleBar}   className='bx bx-grid-alt menu-hamburger' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="" />

</nav>
<header className="header"></header>
    </div>
  )
}

export default Navbar
