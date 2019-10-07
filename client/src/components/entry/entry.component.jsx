import React from 'react'

const Entry = (props) => {
  console.log(props)
  return (
    <div>
      <span>{props.entry.date}</span>
      <span>Morning: {props.entry.feel_one}</span>
      <span>Evening: {props.entry.feel_two}</span>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  )
}

export default Entry
