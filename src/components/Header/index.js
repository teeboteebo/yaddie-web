import React from 'react';
import './styles.scss';
import { Row, Col, } from 'reactstrap';
import SearchSection from '../SearchSection';
import logo from '../../img/yaddie-logo-orange.png';

class Header extends React.Component {
  render(){
    return(
      <header>
          <Row className="justify-content-md-center">
            <Col md="2"><img className="logo" src={logo} alt={"logo"}/> </Col>
          <Col md="8"> <SearchSection /></Col>
        </Row>
        
      </header>
    )
  }
}
export default Header