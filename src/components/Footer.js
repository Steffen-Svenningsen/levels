import React from 'react'
import Logo from './icons/Logo'
import { NavLink } from 'react-router-dom'
import PhoneIcon from './icons/PhoneIcon'
import MailIcon from './icons/MailIcon'

export default function Footer() {
  return (
    <footer>
      <div className='footer-top'>
        <Logo /> Levels
      </div>
      <div className='footer-main'>
        <div>
          <h1>Kontakt</h1>
          <p>Ringvej Syd 104</p>
          <p>8260, Viby J</p>
          <a className='phone' href='mailto:info@levels.com'><MailIcon />info@levels.com</a>
          <a className='mail' href='callto:12345678'><PhoneIcon />+45 12 34 56 78</a>
        </div>
        <div>
          <h1>Åbningstider</h1>
          <p><span>Mandag:</span>09:00-17:00</p>
          <p><span>Tirsdag:</span>09:00-17:00</p>
          <p><span>Onsdag:</span>09:00-16:00</p>
          <p><span>Torsdag:</span>09:00-17:00</p>
          <p><span>Fredag:</span>09:00-15:00</p>
        </div>
        <div>
          <h1>Genveje</h1>
          <NavLink to="/ydelser">Ydelser</NavLink>
          <NavLink to="/cases">Cases</NavLink>
          <NavLink to="/priser">Priser</NavLink>
          <NavLink to="/om-os">Ydelser</NavLink>
          <NavLink to="/vaerdier">Værdier</NavLink>
        </div>
      </div>
      <div className='footer-bottom'>
        © Copyright Levels 2023
      </div>
    </footer>
  )
}
