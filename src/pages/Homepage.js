import React, { useRef, useState } from 'react'
import GreenImg from '../images/green-hero.webp'
import NatureImg from '../images/nature-hero.webp'
import PeopleImg from '../images/people-hero.webp'
import WorkImg from '../images/Work.webp'
import DesignImg from '../images/Design.webp'
import Testimonial from '../components/Testimonial'
import Henrik from "../images/henrik.webp"
import Olivia from "../images/olivia.webp"
import Peter from "../images/peter.webp"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Homepage() {
  return (
    <div className='page'>
      <section className='hero-section'>
        <div>
          <img src={GreenImg} width={300} height={200} alt='Green' />
          <span><i className='hero-word'>Nytænkende</i><b>Webbureau</b> for</span>
        </div>
        <div>
          <span><b>Folket</b> og</span>
          <img src={PeopleImg} width={900} height={220} alt='People smilling' />
        </div>
        <div>
          <img src={NatureImg} width={900} height={220} alt='Nature' />
          <span><b>Fremtiden</b></span>
        </div>
      </section>
      <section className='col-2'>
        <div>
          <h1>Få et indblik.</h1>
          <div className='gradient-line'></div>
          <p>Vi er et transparent webbureau med højt til loftet, hvor vores team består af erfarende sjæle og nysgerrige talenter.</p>
          <p>Hos os er rummet fyldt af kompetencer indenfor web-design, udvikling, markedsføring, SEO, content-creation og meget mere.</p>
          <p>Levels er placeret i et centralt kontorfællesskab, hvor væggene rummer flere forskellige virksomheder indenfor IT-branchen. Dette ser vi som en styrke, da vi har en masse erfarne sparringspartnere som i sidste ende kan være med til at skabe endnu bedre løsninger for vores kunder.</p>
          <p>På vores kontor tror vi på at man kan hente et bedre produkt ved tæt samarbejde med kunden. Vi er derfor altid transparente i vores arbejde og kunden har altid det første og sidste ord at indføre.</p>
          <p>Vi rummer mange forskellige arbejdsopgaver og er altid klar på nye og spændende projekter!</p>
          <b><i>Levels</i></b>
        </div>
        <div>
          <img src={WorkImg} width={700} height={680} alt='Kontor' />
        </div>
      </section>
      <section className='col-2 info-section'>
        <div className='design-box'>
          <div className='tool-text'>
            <h3>Design</h3>
            <p>Vi har mange værktøjer når det gælder design.</p>
            <p>Om det er Figma, Adobe XD eller noget helt trejde så garanterer vi et stilrent design med tanke bag.</p>
          </div>
          <img src={DesignImg} width={400} height={400} alt='Design' />
        </div>
        <div>
          <div className='tool-text-full'>
            <h3>Udvikling</h3>
            <p>Hos Levels kan vi lave alt fra standardløsninger som Wordpress, Wix, Webflow til custom løsninger i Vue og React. Kender du intet til disse værktøjer så fortvivl ej! Vores dygtige konsulenter rådgiver dig altid til den løsning der skaber mest værdi for dig og din ide.</p>
            <p>Vi er altid up-to-date med de nyeste teknologier så vi kan sikre dig en fremtidssikret løsning.</p>
            <p>Skal vi lave en fed løsning til dig? Så kontakt os endelig.</p>
          </div>
        </div>
        <div className='grey-box border-corner'>
          <div className='tool-box-text'>
            <h3>Hosting</h3>
            <p>Ønsker du at tilkøbe hosting er det også en mulighed hos os.</p>
            <p>Vi tilbyder en abonnementsløsning, hvor vi hoster din hjemmeside for et månedligt beløb. Ved køb af en hjemmeside får du de 3 første måneders hosting gratis!</p>
            <p>Når det kommer til hosting bruger vi kun grønne servere. Dvs. at din hjemmeside kommer til at blive drevet af grøn energi.</p>
          </div>
        </div>
        <div className='grey-box right-side-line'>
          <div className='tool-text'>
            <h3>Markedsføring</h3>
            <p>Et must hvis du skal drive en ecommerce eller anden form for online handelsevirksomhed er god markedsføring!</p>
            <p>Markedsføring kan være mange ting. Det kan være nyhedsbreve, visitkort, SEO optimering, Google Ads osv.. Og vi kan hjælpe dig med det hele.</p>
            <p>Er du klar til at sparke døren ind hos din målgruppe? For det er vi!</p>
          </div>
        </div>
      </section>
      <section className='testimonial-section'>
        <div>
          <h1>Hvad siger vores kunder?</h1>
          <div className='gradient-line'></div>
          <p>Vores kunder betyder utrolig meget for os, og vi vil gøre alt i vores magt for, at de alle er tilfredse.</p>
          <p>Hos Levels går vi ind for et tæt samarbejde med kunden og vi ligger aldrig skjul på noget. </p>
          <p>Vores priser er transparente og vi er altid til at få fat på hvis du kommer på gode ideer til din løsning.</p>
          <p>Det vil sige, at du som kunde hos os altid er sikker på, at der ikke kommer tillægsgebyr eller lignende ind af brevsprækken, mens du samtidig er garanteret en god service og et godt produkt.</p>
        </div>
        <div>
          <Swiper
            navigation={true} modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <Testimonial name="Henrik" imgSrc={Henrik} title="CEO, Outdoor Games" text="Jeg kan helt klart anbefale Levels. Det er et seriøst webbureau der vil en det bedste og Jeg var meget glade for det engagement de havde til mit projekt." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name="Peter" imgSrc={Peter} title="CEO, PA Lagerservice" text="Jeg havde tidligere arbejdet med webbureauer der kun tænkte på penge, men sådan var samarbejdet med Levels slet ikke! Levels hører hvad man siger." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial name="Olivia" imgSrc={Olivia} title="CEO, Åens Frisør" text="Levels hjalp os med at se fordele ved en bæredygtig hjemmeside. De har skærpet vores kunders brugeroplevelse, samt sat et grønt aftryk på kloden!" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  )
}
