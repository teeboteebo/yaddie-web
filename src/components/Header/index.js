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
          <Col md="6"> <SearchSection /></Col>
        </Row>

        

      </header>
    )
  }
}
export default Header