import React from 'react'
import axios from 'axios'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText, Spinner } from 'reactstrap'
import './styles.scss'

import TagSelector from '../../components/Form/TagSelector'
import IngredientSelector from '../../components/Form/IngredientSelector'
import CookingStep from '../../components/Form/CookingStep'

class NewRecipePage extends React.Component {
  // These methods need to be before the state declaration
  deleteTag = id => {
    const { tags, tagsData } = this.state
    tags.splice(tags.indexOf(tags.find(tag => tag.key === id)), 1)
    tagsData.splice(tagsData.indexOf(tagsData.find(tagData => tagData.id === +id)), 1)
    this.setState({ ...this.state, tags, tagsData })
  }

  deleteIngredient = id => {
    const { ingredients, ingredientsData } = this.state
    ingredients.splice(ingredients.indexOf(ingredients.find(ingredient => ingredient.key === id)), 1)
    ingredientsData.splice(ingredientsData.indexOf(ingredientsData.find(ingredientData => ingredientData.id === +id)), 1)
    this.setState({ ...this.state, ingredients, ingredientsData })
  }

  deleteCookingStep = id => {
    const { cookingSteps, cookingStepsData } = this.state
    cookingSteps.splice(cookingSteps.indexOf(cookingSteps.find(cookingStep => cookingStep.key === id)), 1)
    cookingStepsData.splice(cookingStepsData.indexOf(cookingStepsData.find(cookingStepData => cookingStepData.id === +id)), 1)
    this.setState({ ...this.state, cookingSteps, cookingStepsData })
  }

  onTagChange = (str, id) => {
    const { tagsData } = this.state
    const foundObj = tagsData.find(tag => tag.id === id)
    foundObj.text = str
    this.setState({ ...this.state, tagsData })
  }

  onIngredientTextChange = (str, id) => {
    const { ingredientsData } = this.state
    const foundObj = ingredientsData.find(tag => tag.id === id)
    foundObj.text = str
    this.setState({ ...this.state, ingredientsData })
  }

  onIngredientQuantityChange = (str, id) => {
    const { ingredientsData } = this.state
    const foundObj = ingredientsData.find(tag => tag.id === id)
    foundObj.quantity = str
    this.setState({ ...this.state, ingredientsData })
  }

  onIngredientEntityChange = (str, id) => {
    const { ingredientsData } = this.state
    const foundObj = ingredientsData.find(tag => tag.id === id)
    foundObj.entity = str
    this.setState({ ...this.state, ingredientsData })
  }

  async componentDidMount() {
    let tags = await axios({
      method: 'GET',
      url: '/api/tags'
    })
    const tagNames = tags.data.map(tag => tag.name)

    this.setState({
      tags: [      
        <TagSelector key={0} id={0} tagNames={tagNames} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />,
        <TagSelector key={1} id={1} tagNames={tagNames} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />,
        <TagSelector key={2} id={2} tagNames={tagNames} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />
      ],
      tagNames: tagNames
    })

    let ingredients = await axios({
      method: 'GET',
      url: '/api/ingredients'
    })
    const ingredientNames = ingredients.data.map(ingredient => ingredient.name)

    this.setState({
      ingredients: [
        <IngredientSelector key={0} id={0} ingredientNames={ingredientNames} onTextChange={this.onIngredientTextChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />,
        <IngredientSelector key={1} id={1} ingredientNames={ingredientNames} onTextChange={this.onIngredientTextChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />,
        <IngredientSelector key={2} id={2} ingredientNames={ingredientNames} onTextChange={this.onIngredientTextChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />
      ],
      ingredientNames: ingredientNames
    })
  }

  onStepTextChange = (str, id) => {
    const { cookingStepsData } = this.state
    const foundObj = cookingStepsData.find(cookingStep => cookingStep.id === id)
    foundObj.text = str
    this.setState({ ...this.state, cookingStepsData })
  }

  onStepTimeChange = (str, id) => {
    const { cookingStepsData } = this.state
    const foundObj = cookingStepsData.find(cookingStep => cookingStep.id === id)
    foundObj.time = str
    this.setState({ ...this.state, cookingStepsData })
  }

  state = {
    tagsIdx: 3,
    tagsData: [
      { id: 0, text: '' },
      { id: 1, text: '' },
      { id: 2, text: '' }
    ],
    ingredientsIdx: 3,
    ingredientsData: [
      { id: 0, text: '', quantity: 0, entity: '' },
      { id: 1, text: '', quantity: 0, entity: '' },
      { id: 2, text: '', quantity: 0, entity: '' }
    ],
    cookingSteps: [
      <CookingStep key={0} id={0} onTextChange={this.onStepTextChange} onTimeChange={this.onStepTimeChange} deleteCookingStep={this.deleteCookingStep} />,
      <CookingStep key={1} id={1} onTextChange={this.onStepTextChange} onTimeChange={this.onStepTimeChange} deleteCookingStep={this.deleteCookingStep} />
    ],
    cookingStepsData: [
      { id: 0, text: '', time: '' },
      { id: 1, text: '', time: '' }
    ],
    cookingStepsIdx: 2
  }

  addTag = () => {
    let { tags, tagsIdx, tagNames, tagsData } = this.state
    tags.push(<TagSelector key={tagsIdx} tagNames={tagNames} id={tagsIdx} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />)
    tagsData.push({ id: tagsIdx, text: '' })
    tagsIdx++
    this.setState({ ...this.state, tags, tagsIdx, tagsData })
  }

  addIngredient = () => {
    let { ingredients, ingredientsIdx, ingredientNames, ingredientsData } = this.state
    ingredients.push(<IngredientSelector key={ingredientsIdx} id={ingredientsIdx} ingredientNames={ingredientNames} onTextChange={this.onIngredientTextChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />)
    ingredientsData.push({ id: ingredientsIdx, text: '', quantity: 0, entity: '' })
    ingredientsIdx++
    this.setState({ ...this.state, ingredients, ingredientsIdx, ingredientsData })
  }

  addStep = () => {
    let { cookingSteps, cookingStepsIdx, cookingStepsData } = this.state
    cookingSteps.push(<CookingStep key={cookingStepsIdx} id={cookingStepsIdx} onTextChange={this.onStepTextChange} onTimeChange={this.onStepTimeChange} deleteCookingStep={this.deleteCookingStep} />)
    cookingStepsData.push({ id: cookingStepsIdx, text: '', time: '' })
    cookingStepsIdx++
    this.setState({ ...this.state, cookingSteps, cookingStepsIdx, cookingStepsData })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <Form className="new-recipe-page" onSubmit={this.onSubmit}>
        <h2>Lägg till nytt recept</h2>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="heading">Rubrik</Label>
              <Input type="heading" name="heading" id="heading" value={this.state.heading} />
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
            <Label>Taggar</Label>
            {this.state.tags ? this.state.tags.map(tag => tag) : ''}
            <div>
              <Button color="success" onClick={this.addTag}><i className="fas fa-plus" /> Ny tagg</Button>
            </div>
          </Col>
          <Col sm={6}>
            <Label>Ingredienser</Label>
            {this.state.ingredients ? this.state.ingredients.map(ingredient => ingredient) : <div className="text-center p-5"><Spinner color="primary" /></div>}
            <div>
              <Button color="success" onClick={this.addIngredient}><i className="fas fa-plus" /> Ny ingrediens</Button>
            </div>
          </Col>
        </Row>
        <h4 className="mt-4">Steg för steg instruktioner</h4>
        {this.state.cookingSteps.map((cookingStep) => cookingStep)}
        <Button color="success" onClick={this.addStep}><i className="fas fa-plus" /> Lägg till steg</Button>
        <Row>
          <Col className="submit-section">
            <Button color="danger">Avbryt</Button><Button type="submit" color="success">Publicera</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default NewRecipePage