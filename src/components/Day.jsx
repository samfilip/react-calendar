import React from 'react'
import Event from './Event'
import '../styles/day.css'

const Day = props => {
  console.log(props.eventInfo)
  console.log(props.eventInfo[1])

  const getEvents = () => {

    return (
      props.eventInfo[1].map( event => {
        const { id, location, summary, description } = event
        const startTime = 'N/A' ?? event.start.dateTime
        console.log('startTime, ', startTime)

        return (
          <Event id={id} 
          location={location} 
          summary={summary} 
          description={description} 
          startTime={startTime} 
          />
        ) 
      })
    )
  }

  return (
    <div>{getEvents()}</div>
  )
}

export default Day


// days={props.days}
// id={day.id}
// startTime={day.start.dateTime}
// endTime={day.end.dateTime}
// location={day.location}
// create={day.creator.displayName}
// description={day.description}