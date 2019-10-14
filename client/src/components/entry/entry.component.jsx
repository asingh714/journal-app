import React, { useState, useEffect } from "react";
import moment from "moment";

import DeleteModal from "../delete-modal/delete-modal.component";

import CustomButton from "../custom-button/custom-button.component";

import "./entry.styles.scss";

const Entry = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [emojiOne, setEmojiOne] = useState("");
  const [emojiTwo, setEmojiTwo] = useState("");

  const { feel_one, feel_two } = props.entry;
  useEffect(() => {
    switch (feel_one) {
      case 1:
        setEmojiOne("😡");
        break;
      case 2:
        setEmojiOne("😔");
        break;
      case 3:
        setEmojiOne("😐");
        break;
      case 4:
        setEmojiOne("🙂");
        break;
      case 5:
        setEmojiOne("😃");
        break;
      default:
        setEmojiOne("");
        break;
    }

    switch (feel_two) {
      case 1:
        setEmojiTwo("😡");
        break;
      case 2:
        setEmojiTwo("😔");
        break;
      case 3:
        setEmojiTwo("😐");
        break;
      case 4:
        setEmojiTwo("🙂");
        break;
      case 5:
        setEmojiTwo("😃");
        break;
      default:
        setEmojiTwo("");
        break;
    }
  }, [feel_one, feel_two]);

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
      <div className="journal-entry-card">
        <div onClick={e => routeToSpecifcJournalPage(e, props.entry.id)}>
          <span className="date">
            {moment(props.entry.date)
              .subtract(10, "days")
              .calendar()}
          </span>
          <div className="feelings-container">
            <div className="feel-container top text">
              <span>Morning:</span>
              <span className="emoji">{emojiOne}</span>
            </div>
            <div className="feel-container text">
              <span>Evening:</span>
              <span className="emoji">{emojiTwo}</span>
            </div>
          </div>
        </div>
        <div className="button-container">
          <CustomButton isDelete onClick={toggleDelete}>
            Delete
          </CustomButton>
          <CustomButton
            isEdit
            onClick={e => routeToEditSpecificJournal(e, props.entry.id)}
          >
            Edit
          </CustomButton>
        </div>
      </div>
      <div className={`${isVisible ? "delete-container" : ""}` } onClick={toggleDelete}>
        {isVisible && (
          <DeleteModal toggleDelete={toggleDelete} deleteId={props.entry.id} />
        )}
      </div>
    </>
  );
};

export default Entry;
