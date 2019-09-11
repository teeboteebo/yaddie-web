import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'
import './styles.scss'

class TagSelector extends React.Component {
  state = {
    tags: ['Bakverk', 'Bröd/Mjöl/Gryn', 'Bönor/Ärtor/Linser', 'Dessert', 'Dryck', 'Fisk', 'Frukt & Bär', 'Fågel', 'Förrätt', 'Frukost', 'Griskött', 'Grönsaker/Rotfrukter', 'Kalvkött', 'Lammkött', 'Lunch', 'Matbröd', 'Mejeriprodukter', 'Mellanmål', 'Middag', 'Nötkött', 'Pasta', 'Potatis', 'Skaldjur', 'Soppa', 'Sås', 'Tillbehör', 'Viltkött', 'Ägg']
  }

  deleteTag = e => this.props.deleteTag(e.target.id)

  render() {
    return (
      <FormGroup className="tag-selector">
        <Row className="align-items-center">
          <Col>
            <Input type="select" name={'tags' + this.props.id} id={'tags' + this.props.id} onChange={this.onChange}>
              <option>Välj tagg...</option>
              {this.state.tags.map((tag, idx) => <option key={idx}>{tag}</option>)}
            </Input>
          </Col>
          <Col xs="auto" className="pl-0">
            <i className="fas fa-times" id={this.props.id} onClick={this.deleteTag} />
          </Col>
        </Row>
      </FormGroup>
    )
  }
}

export default TagSelector