import React from 'react'
import { Star } from 'react-feather'

import './styles.scss'

const Rating = (props) => {
  const stars = []
  const emptyStars = []
  for (let i = 0; i < Math.round(props.rating); i++) {
    stars.push(<Star size="24" color="#f0dc07" fill="#f0dc07" key={"star_" + i} />)
  }
  for (let i = 0; i < 5 - Math.round(props.rating); i++) {
    emptyStars.push(<Star size="24" color="#666" key={"star_" + i} />)
  }
  return (
    <div className="rating" title={props.rating}>
      {stars}{emptyStars}
    </div>
  )
}

export default Rating