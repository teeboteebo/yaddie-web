import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import '../styles.scss'

import SearchSelect from '../../SearchSelect'

class IngredientSelector extends React.Component {
  state = {
    chosenIngredient: ''
  }

  changeIngredient = e => this.setState({ chosenIngredient: e.value })

  deleteIngredient = e => this.props.deleteIngredient(e.target.id)

  render() {
    const { id } = this.props

    return (
      <Row className="align-items-center ingredient-selector">
        <Col>
          <FormGroup>
            <SearchSelect id={'ingredients-' + id} value={this.state.chosenIngredient} changeSelect={this.changeIngredient} results={this.props.ingredientNames} placeholder="Välj ingrediens..." />
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
        <Col xs="auto" className="mb-3 pl-0">
          <i className="fas fa-times" id={id} onClick={this.deleteIngredient} title="Ta bort ingrediens" />
        </Col>

      </Row>
    )
  }
}

export default IngredientSelector