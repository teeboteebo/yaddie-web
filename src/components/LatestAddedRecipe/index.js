import React from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';

import './styles.scss';

class LatestAddedRecipe extends React.Component {
  render() {
    return (
      <article>
        <Card>
          <CardImg src='..public/images/Flamberad-gummibjörn.jpg' />
          <CardBody>
            <CardSubtitle>Flamberad gummibjörn</CardSubtitle>
            <CardText>
              Yaddie loves Candy! Yaddie loves Candy! Yaddie loves Candy! Yaddie
              loves Candy! Yaddie loves Candy! Yaddie loves Candy! Yaddie loves
              Candy! Yaddie loves Candy! Yaddie loves Candy! Yaddie loves Candy!{' '}
            </CardText>
          </CardBody>
        </Card>
      </article>
    );
  }
}

export default LatestAddedRecipe;
