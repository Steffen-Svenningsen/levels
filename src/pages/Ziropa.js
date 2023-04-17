import React from 'react'
import ZProducts from '../images/ziropa-products.webp'
import ZAdvice from '../images/ziropa-advice.webp'
import ZGallery from '../images/ziropa-gallery.webp'


export default function Ziropa() {
  return (
    <div className='case-page page'>
      <h1>Ziropa</h1>
      <p className='expertise'>Webdesign, Webudvikling, Webdokumentar, Content creation</p>
      <div className='gradient-line no-margin'></div>
      <p className='tools-used'>Figma, JavaScript, HTML, CSS, Photoshop</p>
      <section className='about-image-section'>
        <div className='case-images'>
          <img src={ZProducts} width={715} height={304} alt='Ziropa produkter' />
          <img src={ZAdvice} width={715} height={304} alt='Ziropa 3 gode råd' />
        </div>
        <div>
          <img className='large-case-image' src={ZGallery} width={1500} height={500} alt='Ziropa galleri' />
        </div>
      </section>
      <section className='case-info-section'>
        <h1>En meningsfuld fortælling.</h1>
        <div className='gradient-line'></div>
        <p>Ziropa kom til os med en opgave vi ikke havde prøvet før, de ville have lavet en webdokumentar. Da vi ikke før havde kastet os ud i den form for medie var det spændende og der kom ekstra research på arbejdslisten.</p>
        <p>De var åbne for idéer og lod Levels vælge den retning Webdokumentaren skulle tage, dog med det krav at vi fik fortalt deres historie. Selvfølgelig begyndte vi med det samme at sætte os ind i hvem Ziropa er, og hvor de kom fra.</p>
        <p>Efter betydelig research valgte vi at målrette Webdokumentaren til nye iværksættere. Vi så dette som en mulighed for at gøre Ziropa til en slags "storebror" for nye iværksættere. Og den ide var Ziropa helt med på!</p>
        <p>Vi fik vha. alle vores værktøjer skabt en guidet og fortællende historie om Ziropas inspirerende vej til succes indenfor iværksætteri.</p>
        <p>På den måde fik vi sået et frø hos unge mennesker, der når de endelig kommer i gang med deres virksomheder, vil kunne tænke tilbage til Ziropa som dem der hjalp med at kickstarte deres drøm!</p>
      </section>
    </div>
  )
}
