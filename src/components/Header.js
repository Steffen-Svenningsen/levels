import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './icons/Logo'
import MailIcon from './icons/MailIcon'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'

export default function Header() {

  const dropdownRef = useRef(null);
  const burgerRef = useRef(null);
  const logoRef = useRef(null);

  // Hamburger menu state
  const [open, setOpen] = useState(false);

  const HandleClick = e => {
    // console.log('clicked');

    if (burgerRef.current.contains(e.target)) {
      // console.log(burgerRef.current);
      setOpen(!open);
    }

    if (dropdownRef.current.contains(e.target) || logoRef.current.contains(e.target) && dropdownRef.current.classList.contains('active')) {
      setOpen(!open);
    }
  };

  return (
    <header>
      <NavLink ref={logoRef} onClick={HandleClick} className="logo" to="/"><Logo />Levels</NavLink>
      <nav className='desktop-menu'>
        <NavLink to="/ydelser">Ydelser</NavLink>
        <NavLink to="/cases">Cases</NavLink>
        <NavLink to="/priser">Priser</NavLink>
        <NavLink to="/om-os">Om os</NavLink>
        <NavLink to="/vaerdier">Værdier</NavLink>
        <div className='header-seperator-line'></div>
        <a href='https://www.facebook.com/webbureaulevels' target='_blank'><FacebookIcon /></a>
        <a href='https://www.instagram.com/Webbureaulevels' target='_blank'><InstagramIcon /></a>
        <a href='mailto:info@levels.com' target='_blank'><MailIcon /></a>
      </nav>
      <div ref={burgerRef} className='hamburger' onClick={HandleClick}>
        <div className={`hamburger-line ${open ? 'smaller-line' : ''}`}></div> {/* add class or empty string based on open value */}
        <div className='hamburger-line'></div>
      </div>
      <nav ref={dropdownRef} className={`mobile-menu ${open ? 'active' : 'inactive'}`}>
        <NavLink onClick={HandleClick} to="/ydelser">Ydelser</NavLink>
        <NavLink onClick={HandleClick} to="/cases">Cases</NavLink>
        <NavLink onClick={HandleClick} to="/priser">Priser</NavLink>
        <NavLink onClick={HandleClick} to="/om-os">Om os</NavLink>
        <NavLink onClick={HandleClick} to="/vaerdier">Værdier</NavLink>
      </nav>
    </header>
  )
}
