import React from 'react'
import TechImage from './TechImage'

export default function Container({tech}) {
  return (
    <div>
      <h3>{tech.header}</h3>
      <p>{tech.description}</p>
      {tech.technologies.map((x, i) => (
        <TechImage key={i.id} name={x.name} icon={x.icon} />
      ))}
    </div>
  )
}
