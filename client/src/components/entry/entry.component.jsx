import React, { useState } from "react";
import moment from "moment";

import DeleteModal from "../delete-modal/delete-modal.component";

import "./entry.styles.scss";

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

  const routeToEditSpecificJournal = (e, id) => {
    e.preventDefault();
    props.history.push(`/edit-journal-entry/${id}`);
  };

  return (
    <>
      <div onClick={e => routeToSpecifcJournalPage(e, props.entry.id)}>
        <span>{moment(props.entry.date).subtract(10, 'days').calendar()}</span>
        <span>Morning: {props.entry.feel_one}</span>
        <span>Evening: {props.entry.feel_two}</span>
      </div>
      <button onClick={toggleDelete}>Delete</button>
      <button onClick={e => routeToEditSpecificJournal(e, props.entry.id)}>
        Edit
      </button>
      {isVisible && (
        <DeleteModal toggleDelete={toggleDelete} deleteId={props.entry.id} />
      )}
    </>
  );
};

export default Entry;
