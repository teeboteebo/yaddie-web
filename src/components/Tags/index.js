import React from 'react'

import Tag from './Tag'

import './styles.scss'

const Tags = (props) => {
  return (
    <section className="tags">
      {props.tags.map((tag, i) => {
        return <Tag name={tag} key={"tag_" + i} />
      })}
    </section>
  )
}

export default Tags