import React from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import './styles.scss'

import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Ingredients from '../../components/Ingredients'
import Nutrients from '../../components/Nutrients'
import InstructionsList from '../../components/InstructionsList'
import ScreenToggle from '../../components/ScreenToggle'

class RecipePage extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      recipe: {}
    }
  }

  componentDidMount() {
    let recipeId = this.props.match.params.link
    this.findRecipeToRender(recipeId).then(data => {
      this.setState({
        loaded: true,
        recipe: data,
      })
      document.title = `Yaddie - ${data ? data.heading : 'Sidan saknas'}`
    })

  }
  async findRecipeToRender(id) {
    const recipe = await axios({
      method: 'GET',
      url: `/api/recipes/id/${id}`
    })
    return recipe.data
  }
  render() {
    return (
      <article className="recipe-page">
        {this.state.loaded ? 
          this.state.recipe === 'No match' ? console.log(this.state.recipe) :
          <div>
            <Container fluid className="recipe-header mb-5">
              <Row>
                <Col sm="12" >
                  <h2 className="recipe-title">{this.state.recipe.heading}</h2>
                </Col>
              </Row>
              <Row>
                <Col sm="12" >
                  <Rating rating={this.state.recipe.rating} /> <span className="cooking-time">- 55 minuter</span>
                </Col>
              </Row>
            </Container>
            <Container fluid className="recipe-summary">
              <Row className="">
                <Col md="6" className="recipe-image">
                  <img src="/images/food/pasta-bolog.jpg" className="img-fluid w-100 border-light border" alt="Receptbild" />
                </Col>
                <Col md="6" className="summary-text">
                  <Row>
                    <Col xs="12" className="mt-4 my-md-0">
                      <Tags tags={this.state.recipe.tags} size={14} clickable={true} />
                    </Col>
                    <Col xs="12" className="mt-3">
                      <p>
                        {this.state.recipe.desc}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid className="mt-md-5 pt-md-3">
              <Row>
                <Col xs="12" md="5" className="">
                  <Row>
                    <Col xs="12">
                      <h5 className="mt-5 mt-md-0 mb-3 mb-md-4">Detta behöver du</h5>
                      <Ingredients ingredients={this.state.recipe.ingredients} portions={this.state.recipe.portions} />

                    </Col>
                    <Col xs="12" className="nutrients-desktop">
                      <Nutrients props={this.state.recipe.nutrients} />
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" md="7" className="recipe-instructions">
                  <h5 className="mt-5 mt-md-0 mb-3 mb-md-4">Gör så här</h5>
                  <ScreenToggle />
                  <InstructionsList props={this.state.recipe.instructions} />
                </Col>
                <Col xs="12" className="nutrients-mobile">
                  <Nutrients props={this.state.recipe.nutrients} />
                </Col>
              </Row>
            </Container>
          </div>
          : 'laddar'}
      </article>
    )
  }
}

export default RecipePage