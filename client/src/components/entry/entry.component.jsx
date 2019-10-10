import React, { useState } from "react";
import moment from "moment";

import DeleteModal from "../delete-modal/delete-modal.component";

import CustomButton from "../custom-button/custom-button.component";

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
    <div className="journal-entry-card">
      <div onClick={e => routeToSpecifcJournalPage(e, props.entry.id)}>
        <span className="date">{moment(props.entry.date).subtract(10, 'days').calendar()}</span>
        <div className="feel-container">
          <span>Morning:</span>
          <span>{props.entry.feel_one}</span>
        </div>
        <span>Evening: {props.entry.feel_two}</span>
      </div>
      <div className="button-container">
        <CustomButton isDelete onClick={toggleDelete}>Delete</CustomButton>
        <CustomButton isEdit onClick={e => routeToEditSpecificJournal(e, props.entry.id)}>
          Edit
        </CustomButton>
      </div>
      {isVisible && (
        <DeleteModal toggleDelete={toggleDelete} deleteId={props.entry.id} />
      )}
    </div>
  );
};

export default Entry;
