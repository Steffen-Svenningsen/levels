import React from 'react'
import SubpageHeroText from '../components/SubpageHeroText'
import { NavLink } from 'react-router-dom'
import Ziropa from '../images/ziropa.webp'
import MemphisMansion from '../images/memphis-mansion.webp'
import OutdoorGames from '../images/outdoor-games.webp'

export default function Cases() {
  return (
    <div className='page'>
      <SubpageHeroText whiteText="Hos Levels er vi stolte " greyText="over at kunne vise vores arbejde for vores kunder frem." />
      <section className="case-section">
        <h1>Seneste cases.</h1>
        <div className='gradient-line'></div>
        <div className='cases'>
          <NavLink to="/cases/ziropa" className='case'>
            <h1>Ziropa</h1>
            <img className='ziropa' src={Ziropa} width={1430} height={730} alt='Ziropa' />
          </NavLink>
          <NavLink to="/cases/memphis-mansion" className='case'>
            <h1>Memphis Mansion</h1>
            <img className='memphis-mansion' src={MemphisMansion} width={1430} height={730} alt='Memphis Mansion' />
          </NavLink>
          <NavLink to="/cases/outdoor-games" className='case'>
            <h1>Outdoor Games</h1>
            <img className='outdoor-games' src={OutdoorGames} width={1430} height={730} alt='Outdoor Games' />
          </NavLink>
        </div>
      </section>
      <section className='quote-section'>
        <h1 className='shade-center'>Vi har allerede haft et hav af kunder igennem indenfor webdesign og webudvikling. <span className='span-white'>Er du den næste i rækken?</span></h1>
      </section>
    </div>
  )
}
