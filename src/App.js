import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import StartPage from './views/StartPage'
import Footer from './components/Footer'
import CategoriesPage from './views/CategoriesPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route exact path="/kategorier" component={CategoriesPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
