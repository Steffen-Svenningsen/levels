import React from 'react'
import Events from "../images/memphis-mansion-events.webp"
import Competition from "../images/memphis-mansion-competition.webp"
import Music from "../images/memphis-mansion-music.webp"

export default function MemphisMansion() {
  return (
    <div className='case-page page'>
      <h1>Memphis Mansion</h1>
      <p className='expertise'>Visuel Identitet, Webdesign, Re-branding, Webudvikling, Event Creation</p>
      <div className='gradient-line no-margin'></div>
      <p className='tools-used'>Figma, HTML, CSS, Photoshop</p>
      <section className='about-image-section'>
        <div className='case-images'>
          <img src={Events} width={715} height={304} alt='Memphis Mansion events for studerende' />
          <img src={Competition} width={715} height={304} alt='Memphis Mansion events og konkurrencer' />
        </div>
        <div>
          <img className='large-case-image' src={Music} width={1500} height={500} alt='Memphis Mansion musik' />
        </div>
      </section>
      <section className='case-info-section'>
        <h1>Et samarbejde med mening.</h1>
        <div className='gradient-line'></div>
        <p>Vi blev kontaktet af Memphis Mansion der gerne ville prøve sig af hos en ny målgruppe, nemlig unge studerende. På den måde håbede de på at kunne tale til den nye generation og sikre sin fremtid den vej. Til det ønskede de Levels hjælp!</p>
        <p>Memphis Mansion havde allerede nogle tanker om hvad der skulle ske, men det var i samarbejde med vores konsulenter, at alt faldt i hak.</p>
        <p>Levels lavede research på målgruppen og hele idéen. Herefter blev der lavet et design til den nye digitale løsning Memphis Mansion ønskede sig, samt idégenerering omkring events og tiltag der kunne tiltrække folk fra målgruppen. Har tænkte man bl.a. på at henvende sig til bylivet i Aarhus og i sin helhed det at henvende sig til Aarhus, hvor vi kunne se en stor mængde af potentielle nye besøgende.</p>
        <p>Memphis Mansion var meget tilfredse med samarbejdet og fortæller at de siden da har set en forøgelse på omkring 225% af besøgende fra målgruppen.</p>
      </section>
    </div>
  )
}
