import React from 'react'
import './styles.scss'

// Takes props.time as a value in minutes
const Timer = (props) => {
  return (
    <div className="timer">
      {props.time} min
    </div>
  )
}

export default Timer