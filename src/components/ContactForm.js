import React from 'react'

export default function ContactForm() {
  return (
    <div className='contact-form'>
      <div className='form-textbox'>
        <h1>Kom i kontakt.</h1>
        <p>
          Vi vil elske at høre om din idé!<br /> <br />
          Om det er hjælp til en ny hjemmeside eller noget helt andet, så er vi klar til at give vores besyv med.<br /> <br />
          Brug kontaktformularen her til at kontakte os, og så vil vi vende tilbage hurtigst muligt.<br /> <br />
          Ellers sidder vi også klar ved telefonen på: <br className='phone-break-line' /> <b>+45 12 34 56 78</b>
        </p>
      </div>
      <form action='https://getform.io/f/853d289e-6fdb-4753-85b3-b792b793fad0' method='POST'>
        <input type='text' name='name' placeholder='Navn'></input>
        <input type='tel' name='phone' minLength={8} maxLength={8} placeholder='Telefon nummer'></input>
        <input type='email' name='email' placeholder='Email'></input>
        <textarea type='text' name='message' placeholder='Skriv din besked her'></textarea>
        <button type='submit'>Send besked</button>
      </form>
    </div>
  )
}
