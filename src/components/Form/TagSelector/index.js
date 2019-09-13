import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'
import '../styles.scss'

class TagSelector extends React.Component {
  state = {
    tags: ['Bakverk', 'Bröd/Mjöl/Gryn', 'Bönor/Ärtor/Linser', 'Dessert', 'Dryck', 'Fisk', 'Frukt & Bär', 'Fågel', 'Förrätt', 'Frukost', 'Griskött', 'Grönsaker/Rotfrukter', 'Kalvkött', 'Lammkött', 'Lunch', 'Matbröd', 'Mejeriprodukter', 'Mellanmål', 'Middag', 'Nötkött', 'Pasta', 'Potatis', 'Skaldjur', 'Soppa', 'Sås', 'Tillbehör', 'Viltkött', 'Ägg'],
    chosenTag: ''
  }

  changeTag = e => this.setState({ chosenTag: e.target.value })

  deleteTag = e => this.props.deleteTag(e.target.id)

  render() {
    const { id } = this.props

    return (
      <FormGroup className="tag-selector">
        <Row className="align-items-center">
          <Col>
            <Input type="select" name={'tags-' + id} id={'tags-' + id} onChange={this.changeTag}>
              <option value="">Välj tagg...</option>
              {this.state.tags.map((tag, idx) => <option key={idx} value={tag}>{tag}</option>)}
            </Input>
          </Col>
          <Col xs="auto">
            <i className="fas fa-times" id={id} onClick={this.deleteTag} title="Ta bort tagg" />
          </Col>
        </Row>
      </FormGroup>
    )
  }
}

export default TagSelector