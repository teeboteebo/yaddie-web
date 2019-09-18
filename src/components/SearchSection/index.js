import React from 'react';
import { Col, Input, Button } from 'reactstrap';
import './style.scss';
import { NavLink } from 'react-router-dom';

class SearchSection extends React.Component {
  render() {
    return (
      <section className='search-section'>
        <Col lg={9} md={10} sm={12} className='button-inside'>
          <Input
            className='search-bar'
            type='text'
            name='search'
            placeholder='Sök efter recept..'
          />
          <Button type='btn' color='success' className='search-button'>
            Sök
          </Button>
        </Col>
        <Col sm={12}>
          <NavLink
            to='/till-receptvyn'
            exact
            type='btn'
            className='btn btn-success search-by-category text-white'>
            Sök efter kategori!
          </NavLink>
        </Col>
        <Col sm={12}>
          <NavLink
            to='/nytt-recept'
            exact
            type='btn'
            className='btn btn-primary add-recipes text-white'>
            Lägg till recept!
          </NavLink>
        </Col>
      </section>
    );
  }
}
export default SearchSection;
