import React from 'react'
import SubpageHeroText from '../components/SubpageHeroText'
import Employee from '../components/Employee'
import Steffen from "../images/Steffen.webp"
import Lasse from "../images/Lasse.webp"
import Julie from "../images/Julie.webp"
import Tom from "../images/Tom.webp"
import Handshake from "../images/handshake.webp"
import Planning from "../images/planning.webp"
import Working from "../images/working.webp"

export default function About() {
  return (
    <div className='page'>
      <SubpageHeroText whiteText="Er du klar til at tage din virksomhed til et helt nyt niveau? " greyText="Fedt, så står vi klar til at hjælpe."/>
      <section className='about-image-section'>
        <div className='image-2'>
          <img src={Handshake} width={650} height={400} alt='Kunderelation'/>
          <img src={Planning} width={750} height={400} alt='Samarbejde'/>
        </div>
        <div>
          <img src={Working} width={1500} height={500} alt='Kontor arbejde'/>
        </div>
      </section>
      <section className="meet-your-team-section">
        <h1>Mød dit kommende team.</h1>
        <div className='gradient-line'></div>
        <div className='employees'>
          <Employee name="Julie" imgSrc={Julie} imgDesc="Julie" title="CEO, Social media manager" email="juro@levels.com"/>
          <Employee name="Steffen" imgSrc={Steffen} imgDesc="Steffen" title="Partner, Webudvikler" email="stsv@levels.com"/>
          <Employee name="Tom" imgSrc={Tom} imgDesc="Tom" title="Fullstack udvikler" email="toha@levels.com"/>
          <Employee name="Lasse" imgSrc={Lasse} imgDesc="Lasse" title="Designer, Content creator" email="laen@levels.com"/>
        </div>
      </section>
      <section className='quote-section'>
        <h1 className='shade-center'>Hos Levels arbejder vores kompetente team i døgndrift for at skabe skalérbare produkter, samt en grønnere fremtid. <span className='span-white'>Skal du med på rejsen?</span></h1>
      </section>
    </div>
  )
}
