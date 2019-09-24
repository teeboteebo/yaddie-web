import React from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import RecipeLister from '../../components/RecipeLister'


class SearchPage extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      tags: []
    }
  }
  async componentDidMount() {
    this.renderRecipes()
  }

  renderRecipes = async () => {
    let search = decodeURI(this.props.location.search)
    await axios({
      method: 'GET',
      url: `/api/recipes/search${search}`
    }).then(data => this.setState({ recipes: data.data }))
  }
  tagHandler = () => {
    setTimeout(this.renderRecipes, 0)
  }
  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col xs="12">
              <h3 className="mb-3" style={{fontFamily: 'Montserrat'}}>Sökresultat:</h3>
              {this.state.recipes.length > 0 ? <RecipeLister recipes={this.state.recipes} /> : <p>Inga resultat hittades för din sökning</p>}
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SearchPage