import React from 'react';
import {
  Container,
  Row,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import Rating from '../Rating';

import './styles.scss';

class LatestAddedRecipe extends React.Component {
  render() {
    return (
      <article>
        <Container className='latest-added-recipe'>
          <Row>
            <Col>
              <CardImg
                src='/images/yummie-pizza.jpg'
                alt='Delicious pizza with meat and vegetables'
              />
            </Col>
            <Col>
              <CardSubtitle className='recipe-title'>
                <h4>Pizza á la Fantastico</h4>
              </CardSubtitle>
              <CardText className='recipe-card-resume'>
                Inte för den svaga typen. Extrem hetta men smakerna florerar och
                ger dig en upplevelse utan dess like. Det är det bästa recept på
                pizza som någon någonsin har skapat!
              </CardText>
            </Col>
            <Col>
              <CardText className='recipe-card-time float-right'>
                30 min
              </CardText>
              <Rating rating={2} />
            </Col>
          </Row>
        </Container>
      </article>
    );
  }
}
export default LatestAddedRecipe;
