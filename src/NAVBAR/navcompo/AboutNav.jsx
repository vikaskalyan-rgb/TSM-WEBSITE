import React from 'react'
import { UserState } from '../../LOGIN PAGE/Context/Context'
import './navbar.css'

function AboutNav() {
  
  return (
    <div className='about-nav'>
        <div className='logo'>
            <img onClick={()=>window.scroll(0,0)} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" />
        </div>
        <div className='nav-link'>
            <ul>
                
                <li><b><a href="/home">HOME</a></b></li>
            </ul>
        </div>
    </div>
  )
}

export default AboutNav