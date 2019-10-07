import React from 'react'
import { Link } from "react-router-dom";

const Entry = (props) => {
  console.log(props)
  return (
    <Link to={`/journal/${props.entry.id}`}>
      <span>{props.entry.date}</span>
      <span>Morning: {props.entry.feel_one}</span>
      <span>Evening: {props.entry.feel_two}</span>
      <button>Delete</button>
      <button>Edit</button>
    </Link>
  )
}

export default Entry
