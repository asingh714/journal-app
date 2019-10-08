import React from 'react'

const DeleteModal = ({toggleDelete}) => {
  return (
    <>
     <span>Are you sure you want to delete this journal entry?</span> 
      <button onClick={toggleDelete}>No</button>
      <button>Yes</button>
    </>
  )
}

export default DeleteModal;
