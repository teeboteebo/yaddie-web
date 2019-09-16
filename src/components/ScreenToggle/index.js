import React from 'react'
import Toggle from 'react-toggle'
import './styles.scss'
import Nosleep from 'nosleep.js'


class ScreenToggle extends React.Component {
  constructor(){
    super()
    this.state = {
      noSleep: false
    }
    this.nosleep = new Nosleep()
  }
  toggleNoSleep = () => {
    if (this.state.noSleep){
      this.nosleep.disable()
    } else {
      this.nosleep.enable()
    }
    this.setState({
      noSleep: !this.state.noSleep
    })    
  }

  render(){
  return (
    <div className="toggle-button d-md-none mb-3">
      <span className="text-toggle">Förhindra skärmsläckning?</span>
      <Toggle checked={this.state.noSleep} onChange={this.toggleNoSleep} />
    </div>
  )
}
}

export default ScreenToggle