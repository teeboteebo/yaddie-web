import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Button, FormGroup, Label, Input, FormText, FormFeedback, Spinner, Alert } from 'reactstrap'
import './styles.scss'

import TagSelector from '../../components/Form/TagSelector'
import IngredientSelector from '../../components/Form/IngredientSelector'
import CookingStep from '../../components/Form/CookingStep'

class NewRecipePage extends React.Component {
  // These methods needs to be before the state declaration
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
    foundObj.tagType = str
    this.setState({ ...this.state, tagsData })
  }

  onIngredientTextChange = (str, id) => {
    const { ingredientsData } = this.state
    const foundObj = ingredientsData.find(tag => tag.id === id)
    foundObj.ingredientType = str
    this.setState({ ...this.state, ingredientsData })
  }

  onIngredientDisplayNameChange = (str, id) => {
    const { ingredientsData } = this.state
    const foundObj = ingredientsData.find(tag => tag.id === id)
    foundObj.displayName = str
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
    // const tagsDataObj = tags.data.map(tag => tag)

    this.setState({
      tags: [
        <TagSelector key={0} id={0} tagsData={tags} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />,
        <TagSelector key={1} id={1} tagsData={tags} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />,
        <TagSelector key={2} id={2} tagsData={tags} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />
      ],
      tagsDataObj: tags
    })

    let ingredients = await axios({
      method: 'GET',
      url: '/api/ingredients'
    })
    // const ingredientsDataObj = ingredients.data.map(ingredient => ingredient)

    this.setState({
      ingredients: [
        <IngredientSelector key={0} id={0} ingredientsData={ingredients} onTextChange={this.onIngredientTextChange} onDisplayNameChange={this.onIngredientDisplayNameChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />,
        <IngredientSelector key={1} id={1} ingredientsData={ingredients} onTextChange={this.onIngredientTextChange} onDisplayNameChange={this.onIngredientDisplayNameChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />,
        <IngredientSelector key={2} id={2} ingredientsData={ingredients} onTextChange={this.onIngredientTextChange} onDisplayNameChange={this.onIngredientDisplayNameChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />
      ],
      ingredientsDataObj: ingredients
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
    foundObj.timer = str
    this.setState({ ...this.state, cookingStepsData })
  }

  state = {
    heading: '',
    image: '',
    cookingTime: '',
    portions: '',
    summary: '',
    tagsIdx: 3,
    tagsData: [
      { id: 0, tagType: '' },
      { id: 1, tagType: '' },
      { id: 2, tagType: '' }
    ],
    ingredientsIdx: 3,
    ingredientsData: [
      { id: 0, ingredientType: '', displayName: '', quantity: 0, entity: '' },
      { id: 1, ingredientType: '', displayName: '', quantity: 0, entity: '' },
      { id: 2, ingredientType: '', displayName: '', quantity: 0, entity: '' }
    ],
    cookingSteps: [
      <CookingStep key={0} id={0} onTextChange={this.onStepTextChange} onTimeChange={this.onStepTimeChange} deleteCookingStep={this.deleteCookingStep} />,
      <CookingStep key={1} id={1} onTextChange={this.onStepTextChange} onTimeChange={this.onStepTimeChange} deleteCookingStep={this.deleteCookingStep} />
    ],
    cookingStepsData: [
      { id: 0, text: '', timer: '' },
      { id: 1, text: '', timer: '' }
    ],
    cookingStepsIdx: 2,
    validation: {
      heading: {
        valid: true,
        text: 'Vänligen fyll i en rubrik'
      },
      cookingTime: {
        valid: true,
        text: 'Vänligen ange tillagningstid i minuter'
      },
      portions: {
        valid: true,
        text: 'Vänligen ange ett jämt antal portioner (2-12)'
      },
      summary: {
        valid: true,
        text: 'Vänligen skriv en kort sammanfattning om rätten'
      },
      ingredients: {
        valid: true,
        text: 'Vänligen välj minst en ingrediens'
      },
      qtyAndEntity: {
        valid: true,
        text: 'Fyll i mängd och enhet för alla valda ingredienser'
      },
      instructions: {
        valid: true,
        text: 'Vänligen fyll i minst en instruktion'
      }
    }
  }

  handleTitle(evt) {
    // const title = (evt.target.validity.valid) ? evt.target.value : this.state.title;
    this.setState({ heading: evt.target.value });
  }

  onImageChange = e => this.setState({ image: e.target.value })

  handleCookingTime(evt) {
    const cookingTime = (evt.target.validity.valid) ? evt.target.value : this.state.cookingTime;
    this.setState({ cookingTime });
  }

  handlePortions(evt) {
    // const portions = (evt.target.validity.valid) ? evt.target.value : this.state.portions;
    this.setState({ portions: evt.target.value });
  }

  onSummaryChange = e => this.setState({ summary: e.target.value })

  addTag = () => {
    let { tags, tagsIdx, tagsDataObj, tagsData } = this.state
    tags.push(<TagSelector key={tagsIdx} tagsData={tagsDataObj} id={tagsIdx} onTagChange={this.onTagChange} deleteTag={this.deleteTag} />)
    tagsData.push({ id: tagsIdx, tagType: '' })
    tagsIdx++
    this.setState({ ...this.state, tags, tagsIdx, tagsData })
  }

  addIngredient = () => {
    let { ingredients, ingredientsIdx, ingredientsDataObj, ingredientsData } = this.state
    ingredients.push(<IngredientSelector key={ingredientsIdx} id={ingredientsIdx} ingredientsData={ingredientsDataObj} onTextChange={this.onIngredientTextChange} onDisplayNameChange={this.onIngredientDisplayNameChange} onQuantityChange={this.onIngredientQuantityChange} onEntityChange={this.onIngredientEntityChange} deleteIngredient={this.deleteIngredient} />)
    ingredientsData.push({ id: ingredientsIdx, ingredientType: '', quantity: 0, entity: '' })
    ingredientsIdx++
    this.setState({ ...this.state, ingredients, ingredientsIdx, ingredientsData })
  }

  addStep = () => {
    let { cookingSteps, cookingStepsIdx, cookingStepsData } = this.state
    cookingSteps.push(<CookingStep key={cookingStepsIdx} id={cookingStepsIdx} onTextChange={this.onStepTextChange} onTimeChange={this.onStepTimeChange} deleteCookingStep={this.deleteCookingStep} />)
    cookingStepsData.push({ id: cookingStepsIdx, text: '', timer: '' })
    cookingStepsIdx++
    this.setState({ ...this.state, cookingSteps, cookingStepsIdx, cookingStepsData })
  }

  validate() {
    const { validation, heading, cookingTime, portions, summary, ingredientsData, cookingStepsData } = this.state
    if (!/\w+/.test(heading)) validation.heading.valid = false
    else validation.heading.valid = true

    if (!/\d+/.test(cookingTime)) validation.cookingTime.valid = false
    else validation.cookingTime.valid = true

    if (!/\d+/.test(portions) || (+portions < 2 || +portions > 12 || (+portions % 2))) validation.portions.valid = false
    else validation.portions.valid = true

    if (!/\w+/.test(summary)) validation.summary.valid = false
    else validation.summary.valid = true

    if (!ingredientsData.some(ingredient => ingredient.ingredientType)) validation.ingredients.valid = false
    else validation.ingredients.valid = true

    const chosenIngredients = ingredientsData.filter(ingredient => ingredient.ingredientType)
    if (chosenIngredients.some(ingredient => ingredient.quantity <= 0 || !ingredient.entity)) validation.qtyAndEntity.valid = false
    else validation.qtyAndEntity.valid = true

    if (!cookingStepsData.some(cookingStep => cookingStep.text)) validation.instructions.valid = false
    else validation.instructions.valid = true

    this.setState({ ...this.state, validation })

    if (!Object.keys(validation).some(key => !validation[key].valid)) return true

    const bodyTop = document.body.getBoundingClientRect().top * -1
    const elemTop = document.getElementById('scrollRef').getBoundingClientRect().top * -1
    const offset = bodyTop - elemTop

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })

    return false
  }

  onSubmit = async () => {
    if (this.validate()) {
      let { heading, image, cookingTime, portions, summary, tagsData, ingredientsData, cookingStepsData } = this.state
      
      tagsData = tagsData.map(tag => tag.tagType).filter(tag => tag)

      ingredientsData = ingredientsData.filter(ingredient => ingredient.ingredientType)
      ingredientsData.forEach(ingredient => {
        delete ingredient.id
        ingredient.unit = ingredient.entity
        delete ingredient.entity
        ingredient.quantity = +ingredient.quantity
      })

      cookingStepsData = cookingStepsData.filter(cookingStep => cookingStep.text)
      cookingStepsData.forEach(cookingStep => {
        let timerToMin = cookingStep.timer.split(':')
        timerToMin = timerToMin[0] = parseInt(timerToMin) * 60 + parseInt(timerToMin[1])
        cookingStep.timer = timerToMin
        delete cookingStep.id
      })

      const data = { heading, image, cookingTime: +cookingTime, portions: +portions, summary, tags: tagsData, ingredients: ingredientsData, instructions: cookingStepsData }

      const newRecipe = await axios({
        method: 'POST',
        url: '/api/recipes',
        data
      })

      if (newRecipe) this.props.history.push(`/recept/${newRecipe.data._id}`)
    }
  }

  render() {
    return (
      <div className="new-recipe-page">
        <h2 className="mb-3" id="scrollRef">Lägg till nytt recept</h2>
        { !this.state.validation.heading.valid ||
          !this.state.validation.cookingTime.valid ||
          !this.state.validation.portions.valid ||
          !this.state.validation.summary.valid ||
          !this.state.validation.ingredients.valid ||
          !this.state.validation.qtyAndEntity.valid ||
          !this.state.validation.instructions.valid ?
          <Alert color="danger" className="pl-4">
            <p className="mt-3"><strong>Fel! Var god åtgärda följande:</strong></p>
            <p>{!this.state.validation.heading.valid ? this.state.validation.heading.text : ''}</p>
            <p>{!this.state.validation.cookingTime.valid ? this.state.validation.cookingTime.text : ''}</p>
            <p>{!this.state.validation.portions.valid ? this.state.validation.portions.text : ''}</p>
            <p>{!this.state.validation.summary.valid ? this.state.validation.summary.text : ''}</p>
            <p>{!this.state.validation.ingredients.valid ? this.state.validation.ingredients.text : ''}</p>
            <p>{!this.state.validation.qtyAndEntity.valid ? this.state.validation.qtyAndEntity.text : ''}</p>
            <p>{!this.state.validation.instructions.valid ? this.state.validation.instructions.text : ''}</p>
          </Alert>
          : ''
        }
        <Row>
          <Col sm={6}>
            <FormGroup >
              <Label for="heading">
                {!this.state.validation.heading.valid ? <span style={{ 'color': '#dc3545' }}>Rubrik *</span> : 'Rubrik *'}
              </Label>
              <Input type="heading" name="heading" id="heading" onChange={this.handleTitle.bind(this)} invalid={!this.state.validation.heading.valid} />
              {this.state.validation.heading.valid ? '' : <FormFeedback>{this.state.validation.heading.text}</FormFeedback>}
            </FormGroup>
          </Col>
          {/* <Col sm={6}>
            <FormGroup>
              <Label for="picture">Bild</Label>
              <Input type="file" name="picture" id="picture" />
              <FormText color="muted">
                Välj en Yaddie upplösning!
              </FormText>
            </FormGroup>
          </Col> */}
          <Col sm={6}>
            <FormGroup>
              <Label for="image">Bild</Label>
              <Input type="text" name="image" id="image" value={this.state.image} onChange={this.onImageChange} />
              <FormText color="muted">
                Välj en URL till en trevlig bild!
              </FormText>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="cooking-time">
                {!this.state.validation.cookingTime.valid ? <span style={{ 'color': '#dc3545' }}>Tillagningstid *</span> : 'Tillagningstid *'}
              </Label>
              <Input type="number" name="cookingTime" id="cooking-time" min="1" max="1000" pattern="[0-9]*" onChange={this.handleCookingTime.bind(this)} invalid={!this.state.validation.cookingTime.valid} />
              {!this.state.validation.cookingTime.valid ? <FormFeedback>{this.state.validation.cookingTime.text}</FormFeedback> : ''}
              <FormText color="muted">Ange i minuter</FormText>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="portions">
                {!this.state.validation.portions.valid ? <span style={{ 'color': '#dc3545' }}>Antal portioner *</span> : 'Antal portioner *'}
              </Label>
              <Input type="number" name="portions" id="portions" min="2" max="12" onChange={this.handlePortions.bind(this)} invalid={!this.state.validation.portions.valid} />
              {!this.state.validation.portions.valid ? <FormFeedback>{this.state.validation.portions.text}</FormFeedback> : ''}
              <FormText color="muted">2-12 portioner (jämt antal)</FormText>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="summary">
            {!this.state.validation.summary.valid ? <span style={{ 'color': '#dc3545' }}>Sammanfattning *</span> : 'Sammanfattning *'}
          </Label>
          <Input type="textarea" name="summary" id="summary" value={this.state.summary} onChange={this.onSummaryChange} />
          {!this.state.validation.summary.valid ? <FormFeedback>{this.state.validation.summary.text}</FormFeedback> : ''}
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
            <Label>{!this.state.validation.ingredients.valid || !this.state.validation.qtyAndEntity.valid ?
              <span style={{ 'color': '#dc3545' }}>Ingredienser *&nbsp;</span>
              :
              <span>Ingredienser *&nbsp;</span>
            }</Label>
            <FormText color="muted" className="d-inline-block">(Minst 1)</FormText>
            {this.state.ingredients ? this.state.ingredients.map(ingredient => ingredient) : <div className="text-center p-5"><Spinner color="primary" /></div>}
            <div>
              <Button color="success" onClick={this.addIngredient}><i className="fas fa-plus" /> Ny ingrediens</Button>
              {!this.state.validation.ingredients.valid ? <FormFeedback>{this.state.validation.ingredients.text}</FormFeedback> : ''}
              {!this.state.validation.qtyAndEntity.valid ? <FormFeedback>{this.state.validation.qtyAndEntity.text}</FormFeedback> : ''}
            </div>
          </Col>
        </Row>
        <h4 className="mt-5">
          {!this.state.validation.instructions.valid ? <span style={{ 'color': '#dc3545' }}>Steg för steg instruktioner *</span> : 'Steg för steg instruktioner *'}
        </h4>
        <FormText color="muted" className="d-inline-block">Minst 1 steg</FormText>
        {this.state.cookingSteps.map((cookingStep) => cookingStep)}
        <Button color="success" onClick={this.addStep}><i className="fas fa-plus" /> Lägg till steg</Button>
        {!this.state.validation.instructions.valid ? <FormFeedback>{this.state.validation.instructions.text}</FormFeedback> : ''}
        <Row>
          <Col className="submit-section">
            <Link to="/"><Button color="danger">Avbryt</Button></Link><Button type="submit" color="success" onClick={this.onSubmit}>Publicera</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewRecipePage