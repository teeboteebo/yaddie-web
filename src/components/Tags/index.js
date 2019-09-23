import React from 'react'

import Tag from './Tag'

import './styles.scss'

// Recieves props:  "tags" - list of strings for tagnames
//                  "clickable" - true/false
//                  "size" - font size in px
const Tags = (props) => {
  return (
    <section className="tags">
      {props.tags.map((tag, i) => {
        return <Tag name={tag} clickable={props.clickable} size={props.size} key={"tag_" + i} />
      })}
    </section>
  )
}

export default Tags