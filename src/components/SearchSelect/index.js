import React from 'react'
import SelectSearch from 'react-select-search'

import './styles.scss'

// Takes props: results - array with all the results as strings
//              placeholder - e.g 'Välj tagg' or 'Sök recept'
//              changeSelect - method to pass up the data
class SearchSelect extends React.Component {
  changeSelect = (e) => {
    this.props.changeSelect(e)
  }
  render() {
    const options = []
    if (this.props.results) {
      this.props.results.map((result, i) => {
        if (this.props.tag) {
          return options.push({ "name": result.name, "value": result.name })
        } else {
          return options.push({ "name": result.name, "value": result._id })
        }
      })
    } else {
      options.push({ "name": "Laddar", "value": 'Laddar' })
    }

    return (
      <SelectSearch options={options} value={this.props.value} onChange={this.changeSelect} placeholder={this.props.placeholder} />
    )
  }
}

export default SearchSelect