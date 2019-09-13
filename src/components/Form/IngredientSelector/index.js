import React from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'

class IngredientSelector extends React.Component {
  state = {
    ingredients: ['Gurka', 'Kyckling', 'Lök', 'Ägg'],
    chosenIngredient: ''
  }

  changeIngredient = e => this.setState({ chosenIngredient: e.target.value })

  render() {
    return (
      <div>
        <FormGroup>
          <Input type="select" name="ingredients1" id="ingredients1" onChange={this.changeIngredient}>
            <option value="">Välj ingrediens...</option>
            {this.state.ingredients.map((ingredient, idx) => <option key={idx} value={ingredient.toLowerCase()}>{ingredient}</option>)}
          </Input>
        </FormGroup>
        {this.state.chosenIngredient ?
          <FormGroup>
            <Label for="quantity">Mängd</Label>
            <Input type="number" name="quantity" id="quantity" />
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