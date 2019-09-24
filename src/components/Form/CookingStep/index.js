import React from 'react'
import { Row, Col, FormGroup, FormText, Label, Input } from 'reactstrap'
import '../styles.scss'

class CookingStep extends React.Component {
  state = { timer: false }

  onTextChange = e => this.props.onTextChange(e.target.value, this.props.id)

  onTimeChange = e => this.props.onTimeChange(e.target.value, this.props.id)

  onCheckChange = () => this.setState({ timer: !this.state.timer })

  deleteCookingStep = e => this.props.deleteCookingStep(e.target.id)

  render() {
    const { id } = this.props

    return (
      <Row className="align-items-center cooking-step mt-4">
        <Col>
          <FormGroup>
            {/* <Input type="textarea" name={'step-' + id} id={'step-' + id} value={this.state.text} onChange={this.onTextChange} /> */}
            <Input type="textarea" name={'step-' + id} id={'step-' + id} onChange={this.onTextChange} />
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
                <Input type="time" name={'time-' + id} id={'time-' + id} onChange={this.onTimeChange} disabled={!this.state.timer} />
                <FormText color="muted">HH:MM</FormText>
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