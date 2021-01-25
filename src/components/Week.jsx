import React from 'react'
import '../styles/week.css'
import Day from './Day'

const Week = props => {
//   const days = new Array(7)
//   days.fill(<Day />)
  
  const getDays = () => {
      return props.days.map((day, i) => {
        return (
            <Day style ={{border: '1px solid black', height: '100px', width: '100px'}} key= {i} eventInfo = {day} />
        )
    })
  }
  

    return (
      <div className="week">
        {getDays()}
      </div>
    )

}

export default Week; 