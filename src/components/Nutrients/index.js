import React from 'react'
import './styles.scss'


// Take an array with objects with the properties: "type", "amount" & "unit"
class Nutrients extends React.Component {
  constructor() {
    super()
    this.state = {
      "test": 1
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
            {this.props.props.map((nutrient, i) => {
              return (
                <tr key={"nutrient" + i}>
                  <td width="100%">
                    {nutrient.type}
                  </td>
                  <td nowrap="true" className="text-right">
                    {nutrient.amount + " " + nutrient.unit}
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