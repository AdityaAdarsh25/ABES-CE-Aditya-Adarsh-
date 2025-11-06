import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div id='navbar'>
      <h1>FIA</h1>
      <nav>
        <ul>
          <li className='nav-item'>RedBull</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
