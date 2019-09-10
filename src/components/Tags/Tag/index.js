import React from 'react'

const Tag = (props) => {
  console.log(props)
  return (
    <a href={"/sök?kategori=" + props.name} type="btn" className="tag btn btn-success">{props.name}</a>
  )
}

export default Tag