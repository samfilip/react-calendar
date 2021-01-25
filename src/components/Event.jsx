import React from 'react'
import '../styles/event.css'

const Event = props => {



  return (
    <div className='event'>
      <p>{props.summary}</p>
      <p>{props.description}</p>
      <p>{props.location}</p>
      <p>{props.id}</p>
    </div>
  )
}

export default Event