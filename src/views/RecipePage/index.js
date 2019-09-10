import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './styles.scss'

import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Ingredients from '../../components/Ingredients'
import Nutrients from '../../components/Nutrients'
import InstructionsList from '../../components/InstructionsList'

class RecipePage extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
    this.title = "Spaghetti Bolognese"
    this.rating = 3.5
    this.tags = [
      "Middag",
      "Spaghetti",
      "Köttfärs"
    ]
    this.ingredients = [
      {
        "name": "spaghetti",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "nötfärs",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "krossade tomater",
        "amount": 0.5,
        "unit": "förp"
      },
      {
        "name": "gul lök, hackad",
        "amount": 0.5,
        "unit": "st"
      },
      {
        "name": "vitlöksklyftor",
        "amount": 1,
        "unit": "st"
      },
      {
        "name": "smör",
        "amount": 1,
        "unit": "msk"
      },
      {
        "name": "mjöl",
        "amount": 0.5,
        "unit": "tsk"
      },
      {
        "name": "köttbuljong",
        "amount": 1,
        "unit": "dl"
      },
      {
        "name": "oregano",
        "amount": 0.5,
        "unit": "msk"
      },
      {
        "name": "timjan",
        "amount": 0.5,
        "unit": "krm"
      },
      {
        "name": "salt och malen vitpeppar",
        "amount": "",
        "unit": ""
      },
      {
        "name": "riven parmesanost",
        "amount": 50,
        "unit": "g"
      }
    ]
    this.nutrients = [
      {
        "type": "Kalorier",
        "amount": 126,
        "unit": "kcal"
      },
      {
        "type": "Proteiner",
        "amount": 6.7,
        "unit": "g"
      },
      {
        "type": "Kolhydrater",
        "amount": 18.3,
        "unit": "g"
      },
      {
        "type": "Fett",
        "amount": 3.3,
        "unit": "g"
      }
    ]
    this.instructions = [
      {
        "text": "Skala och hacka löken, fräs tills mjuka i smöret. Lägg i färsen och fräs den gyllenbrun.",
        "timer": 0
      },
      {
        "text": "Pudra över mjölet och rör om. Spä med buljongen och de krossade tomaterna. Krydda såsen med örtkryddorna. Pressa i vitlöken. Sjud på svag värme under lock i 15 minuter. Krydda med salt och peppar.",
        "timer": 15
      },
      {
        "text": "Koka pastan i rikligt med saltat vatten enligt anvisning på paketet. Häll av vattnet. Servera med såsen och parmesanost.",
        "timer": 0
      }
    ]
  }

  render() {
    return (
      <article className="recipe-page">
        <Container fluid className="recipe-header mb-5">
          <Row>
            <Col sm="12" >
              <h2 className="recipe-title">{this.title}</h2>
            </Col>
          </Row>
          <Row>
            <Col sm="12" >
              <Rating rating={this.rating} /> <span className="cooking-time">- 55 minuter</span>
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
                <Col xs="12" className="mt-xs-3 my-md-0">
                  <Tags tags={this.tags} />
                </Col>
                <Col xs="12" className="mt-3">
                  <p>
                    Så här lagar du en klassisk förrätt från Bologna. I en riktig Bolognesesås ingår alltid buljong, morot och rotselleri. Det är dessa ingredienser som ger den alldeles speciella smaken till såsen. Servera med spaghetti och riven parmesanost.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mt-5">
          <Row>
            <Col xs="12" md="5" className="">
              <Row>
                <Col xs="12">
                  <h5>Detta behöver du</h5>
                  <Ingredients props={this.ingredients} />
                </Col>
                <Col xs="12" className="nutrients-desktop">
                  <Nutrients props={this.nutrients} />
                </Col>
              </Row>
            </Col>
            <Col xs="12" md="7" className="border-left border-light min-h-100">
              <h5>Gör så här</h5>
              <InstructionsList props={this.instructions} />
            </Col>
            <Col xs="12" className="nutrients-mobile">
              <Nutrients props={this.nutrients} />
            </Col>
          </Row>
        </Container>
      </article>
    )
  }
}

export default RecipePage