import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
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
        <div>
          <a
            href='/nytt-recept'
            type='btn'
            className='btn btn-primary add-recipes text-white'>
            Lägg till recept!
          </a>
        </div>
      </section>
    );
  }
}
export default SearchSection;
