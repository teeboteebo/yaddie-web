import React from 'react'
import './index.scss'

import RecipeLister from '../../components/RecipeLister'

class StartPage extends React.Component {
  render() {
    return (
      <div className="bg-primary">
        <RecipeLister />
      </div>
    )
  }
}

export default StartPage