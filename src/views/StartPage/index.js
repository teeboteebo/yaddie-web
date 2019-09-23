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

    this.recipes = [
      {
        title: "Spaghetti Bolognese",
        img: "/images/food/pasta-bolog.jpg",
        rating: 4.2,
        tags: ["Middag", "Spaghetti", "Köttfärs"],
        cookingTime: 85,
        summary:
          "Så här lagar du en klassisk förrätt från Bologna. I en riktig Bolognesesås ingår alltid buljong, morot och rotselleri. Det är dessa ingredienser som ger den alldeles speciella smaken till såsen. Servera med spaghetti och riven parmesanost."
      },
      {
        title: "Pizza a la fantastico",
        img: "/images/food/yummie-pizza.jpg",
        rating: 4.9,
        tags: ["Pizza", "Kött", "Machoman"],
        cookingTime: 35,
        summary:
          "Inte för den svaga typen. Extrem hetta men smakerna florerar och ger dig en upplevelse utan dess like. Det är det bästa pizzareceptet som någon någonsin har skapat!"
      }
    ]

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
