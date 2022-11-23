import React from 'react'
import Image from 'next/image'


export default function TechImage({name, icon}) {
  return (
    <div>
      <h3>{name}</h3>
  
    <div style={{height: '50px', width: '50px', color: '#fff'}}>
     {icon}
     
    </div>
    </div>
  )
}
