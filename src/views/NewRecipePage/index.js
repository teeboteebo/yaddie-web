import React from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import './styles.scss'

import TagSelector from '../../components/Form/TagSelector'
import IngredientSelector from '../../components/Form/IngredientSelector'
import CookingStep from '../../components/Form/CookingStep'

class NewRecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      Titel: '',
      Timer: '',
      Portion: ''  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewImage = this.handleNewImage.bind(this);

  }

  
  handleChange(event) {
    console.log('Rubrik change')
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log(
      'Rubrik:' + this.state.value,
      'Tillagningstid:' + this.state.Timer,
      'Portion:' + this.state.Portion,
      );
    event.preventDefault();
  }

  handleTimer(evt) {
    const Timer = (evt.target.validity.valid) ? evt.target.value : this.state.Timer;
    console.log('Time handel')
    this.setState({ Timer });
  }
  handlePortion(evt) {
    const Portion = (evt.target.validity.valid) ? evt.target.value : this.state.Portion;
    console.log('Portion handel')
    this.setState({ Portion });
  }

  handleNewImage = event => {
    this.setState({
      picture: event.target.files[0]
    })
    console.log(this.state.picture); //gives null still 
  }



 
  // These methods needs to be before the state declaration
  deleteTag = id => {
    const { tags } = this.state
    tags.splice(tags.indexOf(tags.find(tag => tag.key === id)), 1)
    this.setState({ ...this.state, tags })
  }

  deleteIngredient = id => {
    const { ingredients } = this.state
    ingredients.splice(ingredients.indexOf(ingredients.find(ingredient => ingredient.key === id)), 1)
    this.setState({ ...this.state, ingredients })
  }

  deleteCookingStep = id => {
    const { cookingSteps } = this.state
    cookingSteps.splice(cookingSteps.indexOf(cookingSteps.find(cookingSteps => cookingSteps.key === id)), 1)
    this.setState({ ...this.state, cookingSteps })
  }

  state = {
    tags: [
      <TagSelector key={0} id={0} deleteTag={this.deleteTag} />,
      <TagSelector key={1} id={1} deleteTag={this.deleteTag} />,
      <TagSelector key={2} id={2} deleteTag={this.deleteTag} />
    ],
    tagsIdx: 3,
    ingredients: [
      <IngredientSelector key={0} id={0} deleteIngredient={this.deleteIngredient} />,
      <IngredientSelector key={1} id={1} deleteIngredient={this.deleteIngredient} />,
      <IngredientSelector key={2} id={2} deleteIngredient={this.deleteIngredient} />
    ],
    ingredientsIdx: 3,
    cookingSteps: [
      <CookingStep key={0} id={0} deleteCookingStep={this.deleteCookingStep} />,
      <CookingStep key={1} id={1} deleteCookingStep={this.deleteCookingStep} />
    ],
    cookingStepsIdx: 2
  }

  addTag = () => {
    let { tags, tagsIdx } = this.state
    tags.push(<TagSelector key={tagsIdx} id={tagsIdx} deleteTag={this.deleteTag} />)
    tagsIdx++
    this.setState({ ...this.state, tags, tagsIdx })
  }

  addIngredient = () => {
    let { ingredients, ingredientsIdx } = this.state
    ingredients.push(<IngredientSelector key={ingredientsIdx} id={ingredientsIdx} deleteIngredient={this.deleteIngredient} />)
    ingredientsIdx++
    this.setState({ ...this.state, ingredients, ingredientsIdx })
  }
  

  render() {
    return (
      <Form className="new-recipe-page" onSubmit={this.handleSubmit}>
        <h2>Lägg till nytt recept</h2>
        <Row>
          <Col sm={6}>
            <FormGroup >
              <Label for="heading">Rubrik</Label>
              <Input type="heading" name="heading" id="heading" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="picture">Bild</Label>
              <Input type="file" name="picture" id="picture" onChange={this.handleNewImage}/>
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
              {/* <Input type="number"  name="cookingTime" id="cooking-time" /> */}
              <Input type="number" name="cookingTime" id="cooking-time"  min="0" max="1000" pattern="[0-9]*" onChange={this.handleTimer.bind(this)} value={this.state.Timer} />
              <FormText color="muted">Ange i minuter</FormText>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="portions">Antal portioner</Label>
              <Input type="number" name="portions" id="portions" min="2" max="10"  onChange={this.handlePortion.bind(this)} />
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
            <Label>Taggar</Label>
            {/* {this.state.tags.map(tag => tag)} */}
            <div>
              <Button color="success" onClick={this.addTag}><i className="fas fa-plus" /> Ny tagg</Button>
            </div>
          </Col>
          <Col sm={6}>
            <Label>Ingredienser</Label>
            {/* {this.state.ingredients.map(ingredient => ingredient)} */}
            <div>
              <Button color="success" onClick={this.addIngredient}><i className="fas fa-plus" /> Ny ingrediens</Button>
            </div>
          </Col>
        </Row>
        <h4>Tillvägagångssätt</h4>
        {/* {this.state.cookingSteps.map(cookingStep => cookingStep)} */}
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