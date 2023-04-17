import React from 'react'
import SubpageHeroText from '../components/SubpageHeroText'
import ServiceBox from '../components/ServiceBox'
import Webdesign from "../images/webdesign.webp"
import SEO from "../images/seo.webp"
import Webudvikling from "../images/webudvikling.webp"
import SocialMedia from "../images/socialmedia.webp"
import Hosting from "../images/hosting.webp"
import Marketing from "../images/marketing.webp"
import Tools from "../images/tools.webp"

export default function Services() {
  return (
    <div className='page'>
      <SubpageHeroText whiteText="Kun de nyeste tekonologier er godt nok! " greyText="Hos Levels får du altid en stilren og performance dygtig løsning."/>
      <section className='services-section'>
        <ServiceBox title="Webdesign" imgSrc={Webdesign} imgDesc="Webdesign"/>
        <ServiceBox title="SEO" imgSrc={SEO} imgDesc="SEO"/>
        <ServiceBox title="Webudvikling" imgSrc={Webudvikling} imgDesc="Webudvikling"/>
        <ServiceBox title="SoMe & Content" imgSrc={SocialMedia} imgDesc="SoMe & Content"/>
        <ServiceBox title="Hosting" imgSrc={Hosting} imgDesc="Hosting"/>
        <ServiceBox title="Markedsføring" imgSrc={Marketing} imgDesc="Markedsføring"/>
      </section>
      <section className='col-2'>
        <div>
          <h1>Et hav af værktøjer.</h1>
          <div className='gradient-line'></div>
          <p>Hos Levels finder man et hav af værktøjer indenfor en række forskellige områder. Vi kan hjælpe med alt fra visuel identitet til hybride apps. </p>
          <p>Om du er helt grøn og nystartet, og skal bruge en simpel hjemmeside, eller om I er en større virksomhed der ønsker at få strømlinnet jeres nyværende kodebase eller noget helt tredje, så er vi, Levels, jeres rette samarbejdspartner.</p>
          <p>Vores kompetente team har erfaring og ekspertise i mange forskellige tools bl.a. React, Vue, Figma, Illustrator, Wordpress og meget, meget mere. </p>
          <p>Vi kan altså hjælpe på rigtig mange områder, herved bl.a. grafisk design, udvikling af hjemmesider, seo optimering, videoer og billeder, content creation, udvikling af apps og meget, meget mere.</p>
          <p><b>Skal du med på rejsen?</b> Så kontakt os her under.</p>
        </div>
        <div className='tools-background-img'>
          <img src={Tools} width={700} height={700} alt='Værktøjer'/>
        </div>
      </section>
    </div>
  )
}
