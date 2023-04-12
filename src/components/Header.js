import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './icons/Logo'
import MailIcon from './icons/MailIcon'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'

export default function Header() {

  const ref = useRef(null);

  // hamburger line state
  const [open, setOpen] = useState();

  // check if hamburger menu contains inactive class on mount
  // done to prevent animation from playing on page load - just in case :)
  useEffect(() => {
    if (ref.current.classList.contains('inactive')) {
      ref.current.classList.remove('inactive');
      console.log('Element contained class and was removed for page load');
    } else {
      console.log('Element did not contain inactive class, so we are good');
    }
  }, []);

  // handle click event
  const HandleClick = e => {
    console.log('clicked');
    if (ref.current.classList.contains('active')) {
      ref.current.classList.remove('active');
      ref.current.classList.add('inactive');
      console.log('classlist contained active class, so it was replaced with inactive class')
    } else {
      ref.current.classList.add('active');
      console.log('active class was added')
    }

    // flips the boolean value on open when function is called
    setOpen(!open);
    console.log('Boolean for open was flipped')
  };

  return (
    <header>
      <NavLink className="logo" to="/"><Logo />Levels</NavLink>
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
      <div className='hamburger' onClick={HandleClick}>
        <div className={`hamburger-line ${open ? 'smaller-line' : ''}`}></div> {/* add class or empty string based on open value */}
        <div className='hamburger-line'></div>
      </div>
      <nav ref={ref} className={`mobile-menu`}>
        <NavLink onClick={HandleClick} to="/ydelser">Ydelser</NavLink>
        <NavLink onClick={HandleClick} to="/cases">Cases</NavLink>
        <NavLink onClick={HandleClick} to="/priser">Priser</NavLink>
        <NavLink onClick={HandleClick} to="/om-os">Om os</NavLink>
        <NavLink onClick={HandleClick} to="/vaerdier">Værdier</NavLink>
      </nav>
    </header>
  )
}
