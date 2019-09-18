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
            <Col xs={12} md={3} ><img className="mx-auto d-block logo" src={logo} alt={"logo"}/> </Col>
          <Col xs={12} md={9} className="test"> <SearchSection /></Col>
        </Row>
        
      </header>
    )
  }
}
export default Header