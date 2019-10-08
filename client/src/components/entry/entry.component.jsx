import React, { useState } from "react";

import DeleteModal from "../delete-modal/delete-modal.component";

const Entry = props => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDelete = event => {
    event.preventDefault();
    setIsVisible(!isVisible);
  };

  const routeToSpecifcJournalPage = (e, id) => {
    e.preventDefault();
    props.history.push(`/journal/${id}`);
  };

  return (
    <>
      <div onClick={e => routeToSpecifcJournalPage(e, props.entry.id)}>
        <span>{props.entry.date}</span>
        <span>Morning: {props.entry.feel_one}</span>
        <span>Evening: {props.entry.feel_two}</span>
      </div>
      <button onClick={toggleDelete}>Delete</button>
      <button>Edit</button>
      {isVisible && <DeleteModal toggleDelete={toggleDelete} />}
    </>
  );
};

export default Entry;
