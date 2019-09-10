import React from 'react'
import './styles.scss'
import { Row, Col, } from 'reactstrap';
import SearchSection from '../SearchSection';

class Header extends React.Component {
  render(){
    return(
      <header>
        Header
        <Row className="justify-content-md-center">
          <Col xs="3">
            1 of 3
          </Col>
          <Col md="6"><SearchSection /></Col>
          <Col xs="3">
            3 of 3
          </Col>
        </Row>

        

      </header>
    )
  }
}
export default Header