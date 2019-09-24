import React from "react"
import "./styles.scss"

import RecipeLister from "../../components/RecipeLister"
import ImageSlider from "../../components/ImageSlider"
import axios from "axios"

class StartPage extends React.Component {
  constructor() {
    super()
    this.state = {
      latestRecipes : []
    }

    this.getLatestRecipes()
  }

  async getLatestRecipes(){
    const latestRecipes = await axios({
      method: 'GET',
      url: `/api/recipes/latest`
    })
    await this.setState({latestRecipes})
  }

  render() {
    if(this.state.latestRecipes.data){
    return (
      <div className="start-page">
        <h3 className="mb-5 mb-md-3">Yaddie rekommenderar</h3>
        <ImageSlider />
        <h3 className="mb-5 mb-md-3">Senast tillagda recept</h3>
        <RecipeLister recipes={this.state.latestRecipes.data} />
      </div>
    )
    }
    else{
      return(<div/>)
    }
  }
}

export default StartPage
