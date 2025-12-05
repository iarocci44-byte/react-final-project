import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Footer() {
  return (
    <div className='footer'>
        <p>© 2025 Movie Explorer | Powered by OMDb API</p>
        <p className='nav__links2'>Created by <Link to="http://christopheriarocci.me/" className='nav__links2' target="_blank" rel="noopener noreferrer"><span className="yellow__link--bg">Christopher Iarocci</span></Link></p>
    </div>
  )
}

export default Footer