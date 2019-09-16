import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import '../styles.scss'

class CookingStep extends React.Component {
  state = {
    text: '',
    timer: false,
    time: ''
  }

  onTextChange = e => this.setState({ text: e.target.value })

  onCheckChange = () => this.setState({ timer: !this.state.timer })

  deleteCookingStep = e => this.props.deleteCookingStep(e.target.id)

  render() {
    const { id } = this.props

    return (
      <Row className="align-items-center cooking-step">
        <Col>
          <FormGroup>
            <Label for={'step-' + id}>Steg {id + 1}</Label>
            <Input type="textarea" name={'step-' + id} id={'step-' + id} value={this.state.text} onChange={this.onTextChange} />
          </FormGroup>
          <Row className="align-items-center">
            <Col xs="auto">
              <FormGroup check>
                <Input type="checkbox" name={'timer-' + id} id={'timer-' + id} onChange={this.onCheckChange} checked={this.state.timer} />
                <Label for={'timer-' + id} check>Timer?</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input type="time" name={'time-' + id} id={'time-' + id} step="1" disabled={!this.state.timer} />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <i className="fas fa-times" id={id} onClick={this.deleteCookingStep} title="Ta bort steg" />
        </Col>
      </Row>
    )
  }
}

export default CookingStep