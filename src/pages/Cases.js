import React from 'react'
import SubpageHeroText from '../components/SubpageHeroText'

export default function Cases() {
  return (
    <div className='page'>
      <SubpageHeroText whiteText="Hos Levels er vi stolte " greyText="over at kunne vise vores arbejde for vores kunder frem."/>
      <section>
        <h1>Seneste cases.</h1>
        <div className='gradient-line'></div>
      </section>
      <section className='quote-section'>
        <h1 className='shade-center'>Vi har gennem mere end 10 år tilfredstillet et hav af kunder indenfor webdesign og webudvikling. <span className='span-white'>Er du den næste i rækken?</span></h1>
      </section>
    </div>
  )
}
