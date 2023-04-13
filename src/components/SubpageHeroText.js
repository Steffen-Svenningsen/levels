import React from 'react'

export default function SubpageHeroText(props) {
  return (
    <div className='low-opacity-text'>
        <h1><span className='span-white'>{props.whiteText}</span>{props.greyText}</h1>
    </div>
  )
}
