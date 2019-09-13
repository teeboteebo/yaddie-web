import React from 'react'
import { Row, Col, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../styles.scss'

class IngredientSelector extends React.Component {
  state = {
    ingredients: ['Gurka', 'Kyckling', 'Lök', 'Ägg'],
    chosenIngredient: ''
  }

  // setValue = ingredient => ingredient.toLowerCase().replace(/[åä]/g, 'a').replace(/ö/g, 'o')

  changeIngredient = e => this.setState({ chosenIngredient: e.target.value })

  deleteIngredient = e => this.props.deleteIngredient(e.target.id)

  render() {
    return (
      <div>
        <FormGroup className="ingredient-selector">
          <Row className="align-items-center">
            <Col>
              <Input type="select" name={'ingredients-' + this.props.id} id={'ingredients-' + this.props.id} onChange={this.changeIngredient}>
                <option value="">Välj ingrediens...</option>
                {this.state.ingredients.map((ingredient, idx) => <option key={idx} value={ingredient}>{ingredient}</option>)}
              </Input>
            </Col>
            <Col xs="auto" className="pl-0">
              <i className="fas fa-times" id={this.props.id} onClick={this.deleteIngredient} title="Ta bort ingrediens" />
            </Col>
          </Row>
        </FormGroup>
        {this.state.chosenIngredient ?
          <FormGroup>
            <Label for={'quantity-' + this.props.id}>Mängd</Label>
            <Input type="number" name={'quantity-' + this.props.id} id={'quantity-' + this.props.id} />
            <FormText color="muted">gram*</FormText>
          </FormGroup>
          :
          ''
        }
      </div>
    )
  }
}

export default IngredientSelector