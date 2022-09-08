import React from 'react'
import '../styles/Header.css'
import Logo from '../assets/developer.jpg'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img alt="img" style={{ height: '35px', width: '35px', float: 'left', marginLeft: '50px' }} src={Logo} />
      </div>
      <h2>PORTFOLIO</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <button className="btn-hover">Connect with me</button>
    </div>
  )
}

export default Header
