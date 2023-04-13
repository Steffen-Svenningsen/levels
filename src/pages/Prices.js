import React from 'react'
import Cashcow from '../images/cash-cow.webp'

export default function Prices() {
  return (
    <div className='page'>
      <section className='price-intro'>
        <div>
          <h1>Vores priser</h1>
          <div className='gradient-line'></div>
          <p>
            Hos os er der ingen binding. Det vil sige at du ikke er bundet til et abonnement, og at du selv ejer dit website.
          </p>
          <p>
            Det kan være svært at fastlægge en pris, da det kommer an på hvad du ønsker, samt hvilke behov du har.
            Prisen vil tage udgangspunkt i vores første samtale, og vi vil derefter udarbejde en estimeret pris til dig. For os
            er det vigtigt at du får den rigtige løsning der passer til dig og dit budget.
          </p>
        </div>
        <div className='content-separator-line'></div>
      </section>

      <section className='price-examples-wrapper'>
        <h1>Priseksempler - Hjemmeside</h1>
        <div className='gradient-line'></div>
        <div className='price-examples'>
          <div className='price-example'>
            <h3>Pris 1</h3>
            <p>Enkelt design</p>
            <p>Kontaktformular</p>
            <p>Ingen hosting</p>
            <p>Ingen SEO udarbejdelse</p>
            <p>Tekst & indhold</p>
            <p>Markedsføring</p>
            <p>Ét sprog</p>
            <p>Grafisk materiale</p>
            <p>Nyhedsbrev</p>
            <p>Estimeret pris <span className="estimated-price">5000,-</span></p>
          </div>
          <div className='price-example'>
            <h3>Pris 2</h3>
            <p>Enkelt design</p>
            <p>Kontaktformular</p>
            <p>Ingen hosting</p>
            <p>Ingen SEO udarbejdelse</p>
            <p>Tekst & indhold</p>
            <p>Markedsføring</p>
            <p>Ét sprog</p>
            <p>Grafisk materiale</p>
            <p>Nyhedsbrev</p>
            <p>Estimeret pris <span className="estimated-price">5000,-</span></p>
          </div>
          <div className='price-example'>
            <h3>Pris 3</h3>
            <p>Enkelt design</p>
            <p>Kontaktformular</p>
            <p>Ingen hosting</p>
            <p>Ingen SEO udarbejdelse</p>
            <p>Tekst & indhold</p>
            <p>Markedsføring</p>
            <p>Ét sprog</p>
            <p>Grafisk materiale</p>
            <p>Nyhedsbrev</p>
            <p>Estimeret pris <span className="estimated-price">5000,-</span></p>
          </div>
        </div>
        <div className='content-separator-line'></div>
      </section>

      <section className='price-flavor'>
        <div>
          <img src={Cashcow} width={600} height={400} alt='Pengeko' />
        </div>
        <div>
          <h1>Der er mange variabler</h1>
          <div className='gradient-line'></div>
          <p>Vi giver dig en estimeret pris, som er baseret på en række ting. Hvis du har brug for,
            at dit website skal have funktioner såsom et booking system, mulighed for flere sprog,
            eller et login system, så kan prisen stige. Det kan også være at du har brug for en skræddersyet funktion,
            som også kan få prisen til at stige. Derudover kommer det også an på, hvor lang tid projektet kommer til at tage </p>
        </div>
      </section>
    </div>
  )
}
