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
      }
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
    for (let ingredient of this.props.ingredients) { 
      const unitInGrams = this.convertValues(ingredient.quantity, ingredient.unit)
      let { nutrients } = this.state 

      nutrients["Mättade fettsyror"] += Math.round((ingredient.ingredientType.nutrients['Summa mättade fettsyror'] * unitInGrams / 100) * 10) / 10
      nutrients["Enkelomättade fettsyror"] += Math.round((ingredient.ingredientType.nutrients['Summa enkelomättade fettsyror'] * unitInGrams / 100) * 10) / 10
      nutrients["Fleromättade fettsyror"] += Math.round((ingredient.ingredientType.nutrients['Summa fleromättade fettsyror'] * unitInGrams / 100) * 10) / 10
      nutrients["Energi (kcal)"] += Math.round((ingredient.ingredientType.nutrients['Energi (kcal)'] * unitInGrams / 100) * 10) / 10
      nutrients["Kolhydrater"] += Math.round((ingredient.ingredientType.nutrients['Kolhydrater'] * unitInGrams / 100) * 10) / 10
      nutrients["Protein"] += Math.round((ingredient.ingredientType.nutrients['Protein'] * unitInGrams / 100) * 10) / 10
      nutrients["Salt"] += Math.round((ingredient.ingredientType.nutrients['Salt'] * unitInGrams / 100) * 10) / 10
      this.setState({...this.state, nutrients})
    }
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
                    {entry[0] === 'Energi (kcal)' ? entry[1] + " kcal" : entry[1] + " g"}
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