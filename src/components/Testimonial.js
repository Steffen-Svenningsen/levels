import React from 'react'

export default function Testimonial(props) {
  return (
    <div className='testimonial'>
        <div>
            <img src={props.imgSrc} width={190} height={190} alt='Kunde'/>
            <h3>{props.name}</h3>
            <span>{props.title}</span>
        </div>
        <div className='testimonial-text-box'>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
