import React from 'react'
import { Row, Col, FormGroup } from 'reactstrap'
import '../styles.scss'
import SearchSelect from '../../SearchSelect'

class TagSelector extends React.Component {
  constructor() {
    super()
    this.state = {
      chosenTag: ''
    }
  }



  changeTag = e => {
    this.setState({ chosenTag: e.value })
  }

  deleteTag = e => this.props.deleteTag(e.target.id)

  render() {
    const { id } = this.props

    return (
      <FormGroup className="tag-selector">
        <Row className="align-items-center">
          <Col>
            <SearchSelect id={'tags-' + id} value={this.state.chosenTag} changeSelect={this.changeTag} results={this.props.tagNames} placeholder="Välj tagg..." />
          </Col>
          <Col xs="auto" className="pl-0">
            <i className="fas fa-times" id={id} onClick={this.deleteTag} title="Ta bort tagg" />
          </Col>
        </Row>
      </FormGroup>
    )
  }
}

export default TagSelector