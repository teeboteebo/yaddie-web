import React from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import './style.scss';

class SearchSection extends React.Component {
  render() {
    return (
      <section className='search-section'>
        <Form>
          <FormGroup>
            <Col sm={12}>
              <Input
                className='search-bar'
                type='text'
                name='search-bar'
                placeholder='Sök efter recept..'
              />
            </Col>
          </FormGroup>
        </Form>
          
         <Col xs={12}>
          <a
          href='/till-receptvyn'
          type='btn'
          className='btn btn-success search-by-category text-white'>
          Sök efter kategori!
        </a>
        <a
          href='/nytt-recept'
          type='btn'
          className='btn btn-primary add-recipes text-white'>
          Lägg till recept!
        </a>
        </Col>
      </section>
    );
  }
}
export default SearchSection;
