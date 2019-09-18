import React from 'react';
import { Star } from 'react-feather';

import './styles.scss';
// Recieves props: "rating" (rating in number), "size" for star size in px, soon "clickable" true/false for input options
const Rating = props => {
  const stars = [];
  const emptyStars = [];
  for (let i = 0; i < Math.round(props.rating); i++) {
    stars.push(
      <Star
        size={props.size}
        color='#f0dc07'
        fill='#f0dc07'
        key={'star_' + i}
      />
    );
  }
  for (let i = 0; i < 5 - Math.round(props.rating); i++) {
    emptyStars.push(<Star size={props.size} color='#666' key={'star_' + i} />);
  }
  return (
      <div className='rating preview-rating' title={props.rating} style={{ minWidth: props.size * 5 + 'px' }}>
        {stars}
        {emptyStars}
      </div>

export default Rating;
