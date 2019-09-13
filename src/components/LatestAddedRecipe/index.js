import React from 'react';
import {
  Container,
  Row,
  Col,
  CardImg,
  CardText,
  CardSubtitle
} from 'reactstrap';
import Rating from '../Rating';
import Tags from '../Tags';

import './styles.scss';

class LatestAddedRecipe extends React.Component {
  render() {
    return (
      <article className='latest-added-recipe'>
        <a href='/recept/test'>
          <Container fluid>
            <Row>
              <Col xs='12' md='4' className='px-0'>
                <CardImg
                  src='/images/yummie-pizza.jpg'
                  className='img-fluid min-h-100'
                  alt='Delicious pizza with meat and vegetables'
                />
              </Col>
              <Col xs='12' md='8'>
                <CardSubtitle className='recipe-title'>
                  <h4>Pizza á la Fantastico</h4>
                </CardSubtitle>
                <CardText className='recipe-card-resume'>
                  Inte för den svaga typen. Extrem hetta men smakerna florerar
                  och ger dig en upplevelse utan dess like. Det är det bästa
                  recept på pizza som någon någonsin har skapat!
                </CardText>
                <div className='recipe-card-time'>30 min</div>
                <div className='preview-rating'>
                  <Rating rating={2} size='16' />
                </div>
                <div className='preview-tag mb-4 mb-md-0'>
                  <Tags tags={['Pizza', 'Hot', 'Machoman']} />
                </div>
              </Col>
            </Row>
          </Container>
        </a>
      </article>
    );
  }
}
export default LatestAddedRecipe;
