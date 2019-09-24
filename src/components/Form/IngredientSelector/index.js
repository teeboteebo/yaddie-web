import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import '../styles.scss'

import SearchSelect from '../../SearchSelect'

class IngredientSelector extends React.Component {
  state = {
    chosenIngredient: '',
    entities: ['kg', 'hg', 'g', 'mg', 'l', 'dl', 'cl', 'ml', 'msk', 'tsk', 'krm', 'styck']
  }

  // FIXA ENTITY!!!

  changeIngredient = e => {
    this.setState({ chosenIngredient: e.value })
    this.props.onTextChange(e.value, this.props.id)
  }

  changeDisplayName = e => this.props.onDisplayNameChange(e.target.value, this.props.id)

  changeQuantity = e => this.props.onQuantityChange(e.target.value, this.props.id)

  changeEntity = e => this.props.onEntityChange(e.target.value, this.props.id)

  deleteIngredient = e => this.props.deleteIngredient(e.target.id)

  render() {
    const { id } = this.props

    return (
      <Row className="align-items-center ingredient-selector">
        <Col>
          <FormGroup>
            <SearchSelect id={'ingredients-' + id} value={this.state.chosenIngredient} changeSelect={this.changeIngredient} results={this.props.ingredientsData.data} placeholder="Välj ingrediens..." />
            {this.state.chosenIngredient ?
              <div>
                <Row className="mt-2">
                  <Col>
                    <FormGroup className="mb-0">
                      <Label for={'display-name-' + id}><em>Visningsnamn</em></Label>
                      <Input bsSize="sm" type="text" name={'display-name-' + id} id={'display-name-' + id} onChange={this.changeDisplayName} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label xs="auto" className="pl-0" for={'quantity-' + id}><em>Mängd</em> *</Label>
                      <Input bsSize="sm" type="number" name={'quantity-' + id} id={'quantity-' + id} onChange={this.changeQuantity} />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label xs="auto" className="pl-0" for={'entity-' + id}><em>Enhet</em> *</Label>
                      <Input bsSize="sm" type="select" name={'entity-' + id} id={'entity-' + id} onChange={this.changeEntity}>
                        <option value="">Välj enhet...</option>
                        {this.state.entities.map((entity, idx) => <option key={idx} value={entity}>{entity}</option>)}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
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