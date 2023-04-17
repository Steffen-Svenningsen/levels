import React from 'react'
import Odgevents from '../images/odg-events.webp'
import Odgtestimonials from '../images/odg-testimonials.webp'
import Odgvideo from '../images/odg-video.webp'

export default function OutdoorGames() {
  return (
    <div className='case-page page'>
      <h1>Outdoor Games</h1>
      <p className='expertise'>Webdesign, Re-design, Webudvikling, Content creation, SEO</p>
      <div className='gradient-line no-margin'></div>
      <p className='tools-used'>Figma, JavaScript, HTML, CSS, Photoshop, Premiere Pro</p>
      <section className='about-image-section'>
        <div className='case-images'>
          <img src={Odgevents} width={715} height={304} alt='Outdoor Games events' />
          <img src={Odgtestimonials} width={715} height={304} alt='Outdoor games testimonials' />
        </div>
        <div>
          <img className='large-case-image' src={Odgvideo} width={1500} height={500} alt='Outdoor games video billede' />
        </div>
      </section>
      <section className='case-info-section'>
        <h1>Re-branding gav pote.</h1>
        <div className='gradient-line'></div>
        <p>Outdoor Games havde brug for en gnist i deres online tilstedeværelse. De kom til os med en opgave hvori de ville have moderniseret deres hjemmeside for at kunne fange nogle kunder den vej igennem, så de ikke <b>kun</b> skulle stole på omtale.</p>
        <p>De havde ikke rigtig noget specielt i tankerne, så de lod os hos Levels overtage hele processen. Selvfølgelig med regelmæssige opdateringer! Dette gav os frie tøjler til at skabe et, fra vores vinkel, tilpasset produkt.</p>
        <p>Vi researchede deres målgruppe og lavede konkurrentanalyse, hvorefter vi gik i gang med små idéer i form af udkast. Gennem dette kom vi frem til det design og layout der bedst passede til det som Outdoor Games ønskede.</p>
        <p>Outdoor Games' ejer, Henrik Kornum, var meget tilfreds med vores arbejde og har siden fortalt at et voksende antal kunder har fundet dem gennem deres nye hjemmeside!</p>
      </section>
    </div>
  )
}
