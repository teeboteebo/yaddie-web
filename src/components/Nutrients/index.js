import React from 'react'
import './styles.scss'


// Takes the ingredientslist (props.ingredient) & recipe._id (props.id)
class Nutrients extends React.Component {
  constructor() {
    super()
    this.state = {
      nutrients: {
        "Energi (kcal)": 0,
        "Mättade fettsyror": 0,
        "Enkelomättade fettsyror": 0,
        "Fleromättade fettsyror": 0,
        "Kolhydrater": 0,
        "Protein": 0,
        "Salt": 0
      },
      totalG: 0,
      loaded: false
    }
  }

  convertValues = (qty, unit) => {
    const unitsToGram = {
      kg: 1000,
      hg: 100,
      g: 1,
      mg: 0.001,
      l: 1000,
      dl: 100,
      cl: 10,
      ml: 1,
      st: 60,
      msk: 15,
      tsk: 5,
      krm: 1
    }
    let factor = unitsToGram[unit];

    return factor * qty;
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.setNutrientValues(this.props.ingredients)
      this.setState({ loaded: true })
    }
  }
  setNutrientValues = (ingredients) => {

    let nutrients = {
      "Energi (kcal)": 0,
      "Mättade fettsyror": 0,
      "Enkelomättade fettsyror": 0,
      "Fleromättade fettsyror": 0,
      "Kolhydrater": 0,
      "Protein": 0,
      "Salt": 0
    }
    let totalGrams = 0

    for (let ingredient of ingredients) {
      const amountInGrams = this.convertValues(ingredient.quantity, ingredient.unit)
      totalGrams += amountInGrams

      nutrients["Energi (kcal)"] += Math.round(ingredient.ingredientType.nutrients['Energi (kcal)'] * amountInGrams)
      nutrients["Mättade fettsyror"] += Math.round(ingredient.ingredientType.nutrients['Summa mättade fettsyror'] * amountInGrams)
      nutrients["Enkelomättade fettsyror"] += Math.round(ingredient.ingredientType.nutrients['Summa enkelomättade fettsyror'] * amountInGrams)
      nutrients["Fleromättade fettsyror"] += Math.round(ingredient.ingredientType.nutrients['Summa fleromättade fettsyror'] * amountInGrams)
      nutrients["Kolhydrater"] += Math.round(ingredient.ingredientType.nutrients['Kolhydrater'] * amountInGrams)
      nutrients["Protein"] += Math.round(ingredient.ingredientType.nutrients['Protein'] * amountInGrams)
      nutrients["Salt"] += (ingredient.ingredientType.nutrients['Salt'] * amountInGrams)

    }

    this.setState({
      nutrients: nutrients,
      totalGrams: totalGrams
    })
  }
  render() {
    return (
      <div className="nutrients-list mt-3 p-3">
        <table>
          <thead>
            <tr>
              <th width="100%">Näringsinnehåll per 100 g</th>
              <th nowrap="true"></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(this.state.nutrients).map((entry, i) => {
              return (
                <tr key={"nutrient" + i}>
                  <td width="100%">
                    {entry[0]}
                  </td>
                  <td nowrap="true" className="text-right">
                    {entry[0] === 'Energi (kcal)' ? (entry[1]/this.state.totalGrams) + " kcal" : (entry[1] / this.state.totalGrams).toFixed(2) + " g"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Nutrients