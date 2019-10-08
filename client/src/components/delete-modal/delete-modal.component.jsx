import React from "react";
import { connect } from "react-redux";

import { deleteJournalEntry } from "../../redux/actions/entries.actions";

const DeleteModal = ({ toggleDelete, deleteJournalEntry, deleteId }) => {
  const handleDelete = () => {
    deleteJournalEntry(deleteId);
  };

  return (
    <>
      <span>Are you sure you want to delete this journal entry?</span>
      <button onClick={toggleDelete}>No</button>
      <button onClick={handleDelete}>Yes</button>
    </>
  );
};

export default connect(
  null,
  { deleteJournalEntry }
)(DeleteModal);
