import React from 'react'
import '../styles/Header.css'
import Logo from '../assets/attachment.svg'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img alt="img" style={{height:"50px",width:"50px"}} src={Logo} />
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
     </ul>
     <button className='btn-hover'>Connect with me</button>

    </div>
   
  )
}

export default Header