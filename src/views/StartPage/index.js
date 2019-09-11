import React from "react"
import "./styles.scss"

import ImageSlider from "../../components/ImageSlider"

import RecipeLister from "../../components/RecipeLister"

class StartPage extends React.Component {
  render() {
    return (
      <div className="start-page">
        Main
        <ImageSlider />
        <div style={{ height: 1000 }}>hej</div>
      </div>
    )
  }
}

export default StartPage
