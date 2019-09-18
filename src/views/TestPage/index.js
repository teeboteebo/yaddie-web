import React from 'react'
import axios from 'axios'


class TestPage extends React.Component {
  constructor() {
    super()
    this.state = {
    }
    this.title = "Spaghetti Bolognese"
    this.rating = 4.2
    this.tags = [
      "Middag",
      "Spaghetti",
      "Köttfärs"
    ]
    this.ingredients = [
      {
        "name": "spaghetti",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "nötfärs",
        "amount": 150,
        "unit": "g"
      },
      {
        "name": "krossade tomater",
        "amount": 0.5,
        "unit": "förp"
      },
      {
        "name": "gul lök, hackad",
        "amount": 0.5,
        "unit": "st"
      },
      {
        "name": "vitlöksklyftor",
        "amount": 1,
        "unit": "st"
      },
      {
        "name": "smör",
        "amount": 1,
        "unit": "msk"
      },
      {
        "name": "mjöl",
        "amount": 0.5,
        "unit": "tsk"
      },
      {
        "name": "köttbuljong",
        "amount": 1,
        "unit": "dl"
      },
      {
        "name": "oregano",
        "amount": 0.5,
        "unit": "msk"
      },
      {
        "name": "timjan",
        "amount": 0.5,
        "unit": "krm"
      },
      {
        "name": "salt och malen vitpeppar",
        "amount": "",
        "unit": ""
      },
      {
        "name": "riven parmesanost",
        "amount": 50,
        "unit": "g"
      }
    ]
    this.nutrients = [
      {
        "type": "Kalorier",
        "amount": 126,
        "unit": "kcal"
      },
      {
        "type": "Proteiner",
        "amount": 6.7,
        "unit": "g"
      },
      {
        "type": "Kolhydrater",
        "amount": 18.3,
        "unit": "g"
      },
      {
        "type": "Fett",
        "amount": 3.3,
        "unit": "g"
      }
    ]
    this.instructions = [
      {
        "text": "Skala och hacka löken, fräs tills mjuka i smöret. Lägg i färsen och fräs den gyllenbrun.",
        "timer": 0
      },
      {
        "text": "Pudra över mjölet och rör om. Spä med buljongen och de krossade tomaterna. Krydda såsen med örtkryddorna. Pressa i vitlöken. Sjud på svag värme under lock i 15 minuter. Krydda med salt och peppar.",
        "timer": 15
      },
      {
        "text": "Koka pastan i rikligt med saltat vatten enligt anvisning på paketet. Häll av vattnet. Servera med såsen och parmesanost.",
        "timer": 0
      }
    ]
    this.summary = "Så här lagar du en klassisk förrätt från Bologna. I en riktig Bolognesesås ingår alltid buljong, morot och rotselleri. Det är dessa ingredienser som ger den alldeles speciella smaken till såsen. Servera med spaghetti och riven parmesanost."
  }
  saveRecipe = async () => {
    await axios({
      method: 'POST',
      url: '/api/recipes/',
      data: {
        content: {
          heading: this.title,
          image: "/images/food/pasta-bolog.jpg",
          time: 55,
          portions: 2,
          desc: this.summary,
          rating: this.rating,
          link: "test-recipe",
          tags: this.tags,
          nutrients: this.nutrients,
          ingredients: this.ingredients,
          instructions: this.instructions
        }
      }
    }).then(data => { this.setState({ savedRecipe: data }) })

  }
  render() {
    return (
      <div>
        <button onClick={this.saveRecipe}>Spara till db</button> <br />
        sparat: <br />
        {this.state.savedRecipe}
      </div>

    )
  }
}
export default TestPage