import React from 'react'
import Week from './Week'

const Calendar = props => {
  return (
    <div>
      <div className='week'> 
        <Week days={props.days.slice(0, 7)}/> 
      </div>

      <div className='week'> 
        <Week days={props.days.slice(7)} /> 
      </div>
    </div>
  )
}




export default Calendar;