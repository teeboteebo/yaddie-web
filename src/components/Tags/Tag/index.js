import React from 'react'


// Recieves props:  "name" - name of the tag - string
//                  "clickable" - link or just visual - true/false
//                  "size" - font size - integer for px
const Tag = (props) => {
  return (
    props.clickable 
    ? <a href={"/sök?kategori=" + props.name} type="btn" style={{fontSize: props.size}} className="tag btn btn-success">{props.name}</a>
    : <div style={{fontSize: props.size}} className="tag text-white bg-success">{props.name}</div>
    )
}

export default Tag