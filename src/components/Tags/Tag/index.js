import React from 'react'
import { Link } from 'react-router-dom'

// Recieves props:  "name" - name of the tag - string
//                  "clickable" - link or just visual - true/false
//                  "size" - font size - integer for px
const Tag = (props) => {
  return (
    props.clickable 
    ? <Link to={"/sök?kategori=" + props.name} onClick={props.clickHandler} type="btn" style={{fontSize: props.size}} className="tag btn btn-success">{props.name}</Link>
    : <div style={{fontSize: props.size}} className="tag text-white bg-success">{props.name}</div>
    )
}

export default Tag