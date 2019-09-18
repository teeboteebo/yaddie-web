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
    const hoursRender = Math.floor(this.props.time / 60)
    const minutesRender = (this.props.time % 60)

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
        <button className={this.state.started ? "btn timer-button started" : "btn timer-button"} onClick={this.startTimer}>
          {this.state.started ?
            <Countdown
              date={Date.now() + (60000 * this.props.time)}
              zeroPadTime={2}
              autoStart={true}
              renderer={renderer} >
            </Countdown>
            : <span>{hoursRender >= 1 ? hoursRender + ' h ' : ''}{minutesRender} min</span>}
        </button>
        <button className="btn btn-primary reset-btn" onClick={this.resetTimer}><RefreshCcw /></button>
      </div>
    )
  }
}

export default Timer