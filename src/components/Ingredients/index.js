import React from 'react'
import './styles.scss'


// Takes an array with objects with the properties: "name", "amount", "unit" & "portions"

class Ingredients extends React.Component {
  constructor() {
    super()
    this.state = {
      amount: 4,
      multiplier: 2
    }
  }
  increaseAmount = () => {
    this.setState({
      amount: this.state.amount + 2,
      multiplier: this.state.multiplier + 1
    })
  }
  decreaseAmount = () => {
    this.setState({
      amount: this.state.amount - 2,
      multiplier: this.state.multiplier - 1

    })
  }

  render() {
    return (
      <section className="ingredients mt-4">
        <div className="amount-selector">
          <button disabled={this.state.amount === 2 ? true : false} className="btn btn-success amount-button" onClick={this.decreaseAmount}>-</button>
          <span className="amount-selected">{this.state.amount} portioner</span>
          <button disabled={this.state.amount === 12 ? true : false} className="btn btn-success amount-button" onClick={this.increaseAmount}>+</button>
        </div>
        <div className="ingredients-list mt-3 p-3">
          <table>
            <thead>
              <tr>
                <th width="100%">Ingredienser</th>
                <th nowrap="true" className="text-right">mängd</th>
              </tr>
            </thead>
            <tbody>
              {this.props.props.map((ingredient, i) => {
                return (
                  <tr key={"ingredient_" + i}>
                    <td width="100%">
                      {ingredient.name}
                    </td>
                    <td nowrap="true" className="text-right">
                      {(ingredient.amount ? ingredient.amount * this.state.multiplier : '') + (ingredient.unit ? " " + ingredient.unit : '')}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section >
    )
  }
}

export default Ingredients