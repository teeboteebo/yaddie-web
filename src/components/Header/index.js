import React from 'react'
import './styles.scss'
import { Row, Col, } from 'reactstrap';
import SearchSection from '../SearchSection';
import logo from '../../img/yaddie-logo-orange.png'

class Header extends React.Component {
  render(){
    return(
      <header>
          <Row className="justify-content-md-center">
          <Col md="8"> <SearchSection /></Col>
        </Row>

        

        Header
        <img class="logo" src={logo} alt={"logo"}/> 
      </header>
    )
  }
}
export default Header