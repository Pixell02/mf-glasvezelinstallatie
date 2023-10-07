import React from 'react'
import logo from '../icons/logo.png'
import './navbar.css'

export default function Navbar() {
  
  return (
    <navbar className="navbar">
      <img src={logo} alt="logo" className='logo-container' />
    </navbar>
  )
}
