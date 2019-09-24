import React from 'react';
import './styles.scss';
import { Row, Col, } from 'reactstrap';
import SearchSection from '../SearchSection';
import logo from '../../img/yaddie-logo-orange.png';
import {Link} from "react-router-dom";

class Header extends React.Component {
  render(){
    return(
      <header>
          <Row className="justify-content-md-center">
            
          <div className={"container"}> 
          
          <Row>
          <Col lg={2}>
            <Link to={"/"}>
            <img className="mx-auto d-block" src={logo} alt={"logo"}/> 
            </Link>

          </Col>
          <Col lg={10}>
          <SearchSection />

          </Col>
          </Row>
          
          </div>
        </Row>
        
      </header>
    )
  }
}
export default Header