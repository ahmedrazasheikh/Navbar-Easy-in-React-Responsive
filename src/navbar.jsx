import React from 'react'
import { Link } from "react-router-dom";
import "./App.css"
const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar">
  <span>Logo</span>
  <div className="nav-links">
    <ul className="nav-menu">
      <li className="active"> <Link to='/' >Home</Link>  </li>
      <li><Link to={'/Contact'} >Contact</Link></li>
      <li><Link to={'/Menu'} >Menu</Link></li>
      <li><Link to={'/About'} >About-us</Link></li>
    </ul>
  </div>
    <i className='bx bx-grid-alt menu-hamburger'></i>

</nav>
<header className="header"></header>
    </div>
  )
}

export default Navbar
