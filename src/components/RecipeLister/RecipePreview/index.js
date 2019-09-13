import React from 'react';
import {
  Container,
  Row,
  Col,
  CardImg,
  CardText,
  CardSubtitle
} from 'reactstrap';
import Rating from '../../Rating';
import Tags from '../../Tags';

import './styles.scss';

class RecipePreview extends React.Component {
  render() {
    let hours = 0;
    let minutes = 0;
    if (this.props.recipe.cookingTime > 60) {
      hours = (60 % this.props.recipe.cookingTime) / 60;
      minutes = this.props.recipe.cookingTime - hours * 60;
    }
    if (this.props.recipe.summary.length > 180) {
      this.props.recipe.summary =
        this.props.recipe.summary.slice(0, 180) + '...';
    }
    const recipe = this.props.recipe;
    return (
      <article className='latest-added-recipe'>
        <a href='/recept/test'>
          <Container fluid>
            <Row>
              <Col xs='12' md='4' className='px-0'>
                <CardImg
                  src={recipe.img}
                  className='recipe-img'
                  alt={'Maträttsbild på ' + recipe.title}
                />
              </Col>
              <Col xs='12' md='8' className='pb-5 pb-md-0'>
                <CardSubtitle className='recipe-title mt-1'>
                  <h4>{recipe.title}</h4>
                </CardSubtitle>
                <CardText className='recipe-card-resume mb-5'>
                  {recipe.summary}
                </CardText>
                <div className='recipe-card-time'>
                  {hours
                    ? hours + ' h ' + minutes + ' min'
                    : recipe.cookingTime + ' min'}
                </div>
                <div className='preview-rating'>
                  <Rating rating={recipe.rating} size='16' />
                </div>
                <div className='preview-tag mb-4 mb-md-0'>
                  <Tags tags={recipe.tags} size={14} clickable={false} />
                </div>
              </Col>
            </Row>
          </Container>
        </a>
      </article>
    );
  }
}
export default RecipePreview;
