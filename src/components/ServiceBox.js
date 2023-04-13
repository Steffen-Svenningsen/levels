import React from 'react'

export default function ServiceBox(props) {
  return (
    <div className='service-box'>
        <img src={props.imgSrc} width={700} height={400} alt={props.imgDesc}/>
        <h1>{props.title}</h1>
    </div>
  )
}
