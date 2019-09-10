import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import './style.scss';

class SearchSection extends React.Component {
  render() {
    return (
      <section className='search-section'>
        <Form>
          <FormGroup>
            <Col sm={10}>
              <Input
                type='text'
                name='search-bar'
                placeholder='Sök efter recept..'
              />
            </Col>
          </FormGroup>
        </Form>
        <div>
          <Button color='primary' className='text-white'>
            Lägg till recept!
          </Button>
        </div>
      </section>
    );
  }
}
export default SearchSection;
