import React from 'react'
import './styles.scss'
import { Container } from 'reactstrap';

import RecipeLister from '../../components/RecipeLister'

class StartPage extends React.Component {
  render() {
    return (
      <div className="start-page">
        <Container className="main-content">
          main content on startpage insert here -->
        </Container>
      </div>
    )
  }
}

export default StartPage