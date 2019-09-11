import React from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import './styles.scss'

class NewRecipePage extends React.Component {
  render() {
    return (
      <Form className="new-recipe-page">
        <h2>Lägg till nytt recept</h2>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="heading">Rubrik</Label>
              <Input type="heading" name="heading" id="heading" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="picture">Bild</Label>
              <Input type="file" name="picture" id="picture" />
              <FormText color="muted">
                Välj en Yaddie upplösning!
              </FormText>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="cooking-time">Tillagningstid</Label>
              <Input type="number" name="cookingTime" id="cooking-time" />
              <FormText color="muted">Ange i minuter</FormText>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="portions">Antal portioner</Label>
              <Input type="number" name="portions" id="portions" />
              <FormText color="muted">2-10 portioner</FormText>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="summary">Sammanfattning</Label>
          <Input type="textarea" name="summary" id="summary" />
        </FormGroup>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="tags1">Taggar</Label>
              <Input type="select" name="tags1" id="tags1">
                <option>Välj tag...</option>
                <option>Middag</option>
                <option>Kyckling</option>
                <option>Pasta</option>
                <option>Sallad</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input type="select" name="tags2" id="tags2">
                <option>Välj tag...</option>
                <option>Middag</option>
                <option>Kyckling</option>
                <option>Pasta</option>
                <option>Sallad</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input type="select" name="tags3" id="tags3">
                <option>Välj tag...</option>
                <option>Middag</option>
                <option>Kyckling</option>
                <option>Pasta</option>
                <option>Sallad</option>
              </Input>
            </FormGroup>
            <Button color="success">Ny tagg...</Button>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="ingredients1">Ingredienser</Label>
              <Input type="select" name="ingredients1" id="ingredients1">
                <option>Välj ingrediens...</option>
                <option>Gurka</option>
                <option>Ägg</option>
                <option>Lök</option>
                <option>Kyckling</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Mängd</Label>
              <Input type="number" name="quantity" id="quantity" />
              <FormText color="muted">gram*</FormText>
            </FormGroup>
            <FormGroup>
              <Input type="select" name="ingredients2" id="ingredients2">
                <option>Välj ingrediens...</option>
                <option>Gurka</option>
                <option>Ägg</option>
                <option>Lök</option>
                <option>Kyckling</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input type="select" name="ingredients3" id="ingredients3">
                <option>Välj ingrediens...</option>
                <option>Gurka</option>
                <option>Ägg</option>
                <option>Lök</option>
                <option>Kyckling</option>
              </Input>
            </FormGroup>
            <Button color="success">Ny ingrediens...</Button>
          </Col>
        </Row>
        <h4>Tillvägagångssätt</h4>
        <FormGroup>
          <Label for="step1">Steg 1</Label>
          <Input type="textarea" name="step1" id="step1" />
        </FormGroup>
        <Row className="align-items-center">
          <Col xs="auto">
            <FormGroup check>
              <Input type="checkbox" name="timer1" id="timer1" />
              <Label for="timer1" check>Timer?</Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input type="time" name="time1" id="time1" step="1" disabled />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="step1">Steg 2</Label>
          <Input type="textarea" name="step2" id="step2" />
        </FormGroup>
        <Row className="align-items-center">
          <Col xs="auto">
            <FormGroup check>
              <Input type="checkbox" name="timer2" id="timer2" />
              <Label for="timer2" check>Timer?</Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input type="time" name="time2" id="time2" step="1" disabled />
            </FormGroup>
          </Col>
        </Row>
        <Button color="success">Lägg till steg...</Button>
        <Row>
          <Col className="submit-section">
            <Button color="danger">Avbryt</Button><Button color="success">Publicera</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default NewRecipePage