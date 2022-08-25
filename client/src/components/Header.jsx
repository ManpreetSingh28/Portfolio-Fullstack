import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            Manpreet Singh
        </div>
     <ul>
        <li>
            Home
        </li>
        <li>
            About
        </li>
        <li>
            Projects
        </li>
        <li>
            Connect with me
        </li>
     </ul>
    </div>
   
  )
}

export default Header