import React from 'react'
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Spinner
} from 'reactstrap'
import { ChevronLeft } from 'react-feather'

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
    const bodyTop = document.body.getBoundingClientRect().top * -1
    const headerBottom = document.body.getElementsByTagName('header')[0].getBoundingClientRect().bottom * -1
    const offset = bodyTop - headerBottom
    let recipeId = this.props.match.params.link
    this.findRecipeToRender(recipeId).then(data => {
      this.setState({
        loaded: true,
        recipe: data,
      })
      document.title = `Yaddie - ${data.heading ? data.heading : 'Sidan saknas'}`
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    })
  }
  async findRecipeToRender(id) {
    const recipe = await axios({
      method: 'GET',
      url: `/api/recipes/populated/${id}`
    })
    return recipe.data
  }
  render() {
    const hoursRender = Math.floor(this.state.recipe.cookingTime / 60)
    const minutesRender = (this.state.recipe.cookingTime % 60)
    const time = `${hoursRender ? hoursRender + ' h ' : ''}${minutesRender} min`
    return (
      <article className="recipe-page">
        <Col xs="12" className="mb-4"><span className="fake-link" onClick={this.props.history.goBack}><ChevronLeft size="16" /> Tillbaka</span></Col>
        {this.state.loaded ?
          this.state.recipe === 'No match' ? 'Gått vilse? Här fanns inget recept...' :
            <div>
              <Container fluid className="recipe-header mb-5">
                <Row>
                  <Col sm="12" >
                    <h2 className="recipe-title">{this.state.recipe.heading}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" >
                    <Rating rating={this.state.recipe.rating} /> <span className="cooking-time">- {time}</span>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="recipe-summary">
                <Row className="">
                  <Col md="6" className="recipe-image">
                    <img src={this.state.recipe.image} className="img-fluid w-100 border-light border" alt="Receptbild" />
                  </Col>
                  <Col md="6" className="summary-text">
                    <Row>
                      <Col xs="12" className="mt-4 my-md-0">
                        <Tags tags={this.state.recipe.tags} size={14} clickable={true} />
                      </Col>
                      <Col xs="12" className="mt-3">
                        <p>
                          {this.state.recipe.summary}
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
                        <Nutrients ingredients={this.state.recipe.ingredients} id={this.state.recipe._id} />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="7" className="recipe-instructions">
                    <h5 className="mt-5 mt-md-0 mb-3 mb-md-4">Gör så här</h5>
                    <ScreenToggle />
                    <InstructionsList props={this.state.recipe.instructions} />
                  </Col>
                  <Col xs="12" className="nutrients-mobile">
                    <Nutrients ingredients={this.state.recipe.ingredients} id={this.state.recipe._id} />
                  </Col>
                </Row>
              </Container>
            </div>
          : <Col xs="12"><Spinner color="primary" /></Col>}
      </article>
    )
  }
}

export default RecipePage