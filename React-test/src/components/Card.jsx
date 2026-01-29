import React from 'react'
import './card.css'
import {useState} from 'react'

function Card({ name, image, studentClass}) {
  const [imgHeight,setHeight]=useState(250);
  const [imgwidth,setWidth]=useState(250);
  return (
    <div className="student-card">
      <h3>My Card</h3>
      <div className="card-top">
        <img src={image} height={imgHeight} width={imgwidth} alt={name} className="card-avatar" />
      </div>
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-meta">{studentClass}</p>
      </div>
      <div className="resizers">
        <button onClick={()=>setHeight(imgHeight+10)}>Increase Height</button>
        <button onClick={()=>setHeight(imgHeight-10)}>Decrease Height</button>
        <button onClick={()=>setWidth(imgwidth+10)}>Increase Width</button>
        <button onClick={()=>setWidth(imgwidth-10)}>Decrease Width</button>
      </div>
    </div>
  )
}

export default Card
