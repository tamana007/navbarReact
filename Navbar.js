import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <>
    <nav className='nav-header'>
      <div>Logo goes here</div>
      <div className='links-container'>
        <ul className='links-container'>
          {links.map((item)=>{return <li>{item.text}</li>})}
          
        
          </ul>
        
        </div>
      <div>social media goes here</div>
    </nav>
    </>
  )

}

export default Navbar
