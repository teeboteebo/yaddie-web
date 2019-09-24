import React from 'react'
import './styles.scss'


// Takes the ingredientslist (props.ingredient) & recipe._id (props.id)
class Nutrients extends React.Component {
  constructor() {
    super()
    this.state = {
      nutrients: {
        "Mättade fettsyror": 0,
        "Enkelomättade fettsyror": 0,
        "Fleromättade fettsyror": 0,
        "Energi (kcal)": 0,
        "Kolhydrater": 0,
        "Protein": 0,
        "Salt": 0
      }
    }
  }
  // [{
  //  displayName: 'asdad',
  //  unit: 'g',
  //  quantity: 200
  //  ingredientType: {
  //    name: 'späck gris',
  //    group: 'kött',
  //    nutrients: {
  //       ...
  //    }
  //  }
  // },{}]

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
    for (let ingredient of this.props.ingredients) { //nötfärs,dn   300,qty,   g,unit  iT.nutrients{...}
      const unitInGrams = this.convertValues(ingredient.amount, ingredient.unit)
      let { nutrients } = this.state 
      console.log(ingredient);
      
      // nutrients["Mättade fettsyror"] += (ingredient.ingredientType.nutrients['Summa mättade fettsyror'] * unitInGrams / 100)
      // nutrients["Enkelomättade fettsyror"] += (ingredient.ingredientType.nutrients['Summa enkelomättade fettsyror'] * unitInGrams / 100)
      // nutrients["Fleromättade fettsyror"] += (ingredient.ingredientType.nutrients['Summa fleromättade fettsyror'] * unitInGrams / 100)
      // nutrients["Energi (kcal)"] += (ingredient.ingredientType.nutrients['Energi (kcal)'] * unitInGrams / 100)
      // nutrients["Kolhydrater"] += (ingredient.ingredientType.nutrients['Kolhydrater'] * unitInGrams / 100)
      // nutrients["Protein"] += (ingredient.ingredientType.nutrients['Protein'] * unitInGrams / 100)
      // nutrients["Salt"] += (ingredient.ingredientType.nutrients['Salt'] * unitInGrams / 100)
      // this.setState({...this.state, nutrients})
    }
    console.log(this.props.ingredients)
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