import React from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'

class IngredientSelector extends React.Component {
  state = {
    ingredients: ['Gurka', 'Kyckling', 'Lök', 'Ägg']
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Input type="select" name="ingredients1" id="ingredients1">
            <option>Välj ingrediens...</option>
            {this.state.ingredients.map((ingredient, idx) => <option key={idx}>{ingredient}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Mängd</Label>
          <Input type="number" name="quantity" id="quantity" />
          <FormText color="muted">gram*</FormText>
        </FormGroup>
      </div>
    )
  }
}

export default IngredientSelector