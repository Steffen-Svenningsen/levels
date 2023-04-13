import React from 'react'

export default function Employee(props) {
  return (
    <div className='employee-card'>
        <img src={props.imgSrc} width={420} height={420} alt={props.imgDesc}/>
        <h3>{props.name}</h3>
        <p>{props.title}</p>
        <p>{props.email}</p>
    </div>
  )
}
