import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './icons/Logo'
import MailIcon from './icons/MailIcon'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'

export default function Header() {
  return (
    <header>
        <NavLink className="logo" to="/"><Logo/>Levels</NavLink>
        <nav>
            <NavLink to="/ydelser">Ydelser</NavLink>
            <NavLink to="/cases">Cases</NavLink>
            <NavLink to="/priser">Priser</NavLink>
            <NavLink to="/om-os">Om os</NavLink>
            <NavLink to="/vaerdier">Værdier</NavLink>
            <div className='header-seperator-line'></div>
            <a href='#' target='_blank'><FacebookIcon/></a>
            <a href='#' target='_blank'><InstagramIcon/></a>
            <a href='mailto:info@levels.com' target='_blank'><MailIcon/></a>
        </nav>
        <div className='hamburger'>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
        </div>
        <div className='mobile-menu'>
            <NavLink to="/ydelser">Ydelser</NavLink>
            <NavLink to="/cases">Cases</NavLink>
            <NavLink to="/priser">Priser</NavLink>
            <NavLink to="/om-os">Om os</NavLink>
            <NavLink to="/vaerdier">Værdier</NavLink>
        </div>
    </header>
  )
}
