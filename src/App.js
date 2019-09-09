import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import StartPage from './views/StartPage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={StartPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
