import React from "react";
import { connect } from "react-redux";

import { deleteJournalEntry } from "../../redux/actions/entries.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./delete-modal.styles.scss";

const DeleteModal = ({ toggleDelete, deleteJournalEntry, deleteId }) => {
  const handleDelete = () => {
    deleteJournalEntry(deleteId);
  };

  return (
    <div className="delete-modal">

      <span>Are you sure you want to delete this journal entry?</span>
      
      <div className="button-container">
        <CustomButton isDelete onClick={toggleDelete}>
          No
        </CustomButton>
        <CustomButton isBigEdit onClick={handleDelete}>
          Yes
        </CustomButton>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteJournalEntry }
)(DeleteModal);
