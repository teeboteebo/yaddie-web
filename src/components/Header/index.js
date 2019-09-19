import React from 'react';
import './styles.scss';
import { Row, Col } from 'reactstrap';
import SearchSection from '../SearchSection';
import logo from '../../img/yaddie-logo-orange.png';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={3}>
            <NavLink
              to='/'
              exact
              className='mx-auto d-block logo'
              >
              <img src={logo} alt='Orange tallrik med vita bestick i form av gaffel och kniv. Hemsidans namn Yaddie finns undertill tallriken i logan.' />
            </NavLink>
          </Col>
          <Col xs={12} md={9} className='test'>
            <SearchSection />
          </Col>
        </Row>
      </header>
    );
  }
}
export default Header;
