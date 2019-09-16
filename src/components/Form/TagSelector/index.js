import React from 'react'
import { Row, Col, FormGroup } from 'reactstrap'
import '../styles.scss'
import SearchSelect from '../../SearchSelect'

class TagSelector extends React.Component {
  constructor() {
    super()
    this.state = {
      tags: '',
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
            <SearchSelect id={'tags-' + id} value={this.state.chosenTag} changeSelect={this.changeTag} results={this.state.tagNames ? this.state.tagNames : ''} placeholder="Välj tagg..." />
            {/* <Input type="select" name={'tags-' + id} id={'tags-' + id} onChange={this.changeTag}>
              <option value="">Välj tagg...</option>
              {this.state.tags ? this.state.tags.map((tag, idx) => <option key={idx} value={tag}>{tag}</option>) : ''}
            </Input> */}
          </Col>
          {/* {this.state.chosenTag ? */}
            <Col xs="auto" className="pl-0">
              <i className="fas fa-times" id={id} onClick={this.deleteTag} title="Ta bort tagg" />
            </Col>
            {/* : ''
          } */}
        </Row>
      </FormGroup>
    )
  }
}

export default TagSelector