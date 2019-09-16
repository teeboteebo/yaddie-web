import React from 'react'
import Countdown from 'react-countdown-now'
import { RefreshCcw } from 'react-feather'
import './styles.scss'

// Takes props.time as a value in minutes
class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      started: false
    }
  }
  startTimer = () => {
    if(this.state.started){
      return
    } else {
      this.setState({
        started: true
      })
    }
  }
  resetTimer = () => {
    this.setState({
      started: false
    })
  }

  render() {
    const hoursRender = (60 % this.props.time)/60
    const minutesAfterHoursRender = this.props.time - hoursRender * 60
    const Completionist = () => <span>Klar!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span>{hours ? hours + ':' : ''}{minutes}:{seconds}</span>;
      }
    };
    return (
      <div className="timer mt-2">
        <p className="timer-text mb-2">{this.state.started ? 'Klicka på knappen bredvid för att återställa' : 'Klicka på timern för att starta'}</p>
        <button className="btn btn-success timer-button" onClick={this.startTimer}>
          {this.state.started ?
            <Countdown
              date={Date.now() + (60000 * this.props.time)}
              zeroPadTime={2}
              autoStart={true}
              renderer={renderer} >
            </Countdown>
            : <span>{hoursRender ? hoursRender + 'h ' : ''}{minutesAfterHoursRender}min</span>}
        </button>
        <button className="btn btn-primary reset-btn" onClick={this.resetTimer}><RefreshCcw /></button>
      </div>
    )
  }
}

export default Timer