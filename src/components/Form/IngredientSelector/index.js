import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import '../styles.scss'

class IngredientSelector extends React.Component {
  state = {
    ingredients: ['Gurka', 'Kyckling', 'Lök', 'Ägg'],
    chosenIngredient: ''
  }

  changeIngredient = e => this.setState({ chosenIngredient: e.target.value })

  deleteIngredient = e => this.props.deleteIngredient(e.target.id)

  render() {
    const { id } = this.props

    return (
      <Row className="align-items-center ingredient-selector">
        <Col>
          <FormGroup>
            <Input type="select" name={'ingredients-' + id} id={'ingredients-' + id} onChange={this.changeIngredient}>
              <option value="">Välj ingrediens...</option>
              {this.state.ingredients.map((ingredient, idx) => <option key={idx} value={ingredient}>{ingredient}</option>)}
            </Input>
            {this.state.chosenIngredient ?
              <Row>
                <Col>
                  <FormGroup>
                    <Label xs="auto" className="pl-0" for={'quantity-' + id}><em>Mängd</em></Label>
                    <Input type="number" name={'quantity-' + id} id={'quantity-' + id} />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label xs="auto" className="pl-0" for={'entity-' + id}><em>Enhet</em></Label>
                    <Input type="select" name={'entity-' + id} id={'entity-' + id}>
                      <option value="">Välj enhet...</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              :
              ''
            }
          </FormGroup>
        </Col>
        {this.state.chosenIngredient ?
          <Col xs="auto" className="mb-3">
            <i className="fas fa-times" id={this.props.id} onClick={this.deleteIngredient} title="Ta bort ingrediens" />
          </Col>
          : ''
        }
      </Row>
    )
  }
}

export default IngredientSelector