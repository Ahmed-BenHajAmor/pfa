import React from 'react'
import './Title.css'

function Title({title, subTitle}) {
  return (
    <div className="title">
        <h1 style={{fontSize: `${title.font}px`}}>{title.text}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title