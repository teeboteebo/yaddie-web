import React from 'react';
import { Link } from 'react-router-dom'
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
    const hoursRender = Math.floor(this.props.recipe.cookingTime / 60)
    const minutesRender = (this.props.recipe.cookingTime % 60)
    const time = `${hoursRender ? hoursRender + ' h ' : ''}${minutesRender} min`
    // Set max characters on cards
    if (this.props.recipe.summary.length > 180) {
      this.props.recipe.summary = this.props.recipe.summary.slice(0, 180) + '...';
    }
    const recipe = this.props.recipe;
    return (
      <article className='latest-added-recipe'>
        <Link to={'/recept/' + recipe._id}>
          <Container fluid>
            <Row>
              <Col xs='12' md='4' className='px-0'>
                <CardImg
                  src={recipe.image}
                  className='recipe-img'
                  alt={'Maträttsbild på ' + recipe.heading}
                />
              </Col>
              <Col xs='12' md='8' className='pb-5 pb-md-0'>
                <CardSubtitle className='recipe-title mt-1'>
                  <h4>{recipe.heading}</h4>
                </CardSubtitle>
                <CardText className='recipe-card-resume mb-5'>
                  {recipe.summary}
                </CardText>
                <div className='recipe-card-time'>
                  {time}
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
        </Link>
      </article>
    );
  }
}
export default RecipePreview;
