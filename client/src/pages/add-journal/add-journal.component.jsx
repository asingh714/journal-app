import React from "react";

import useForm from "../../customHooks/useForm";

const AddJournalEntry = () => {
  const handleAddJournalEntry = event => {
    event.preventDefault();
    console.log("Clicked!");
  };

  const [addFormInput, handleChanges, handleSubmit] = useForm(
    handleAddJournalEntry
  );

  return (
    <>
      <div>Random quote here!</div>
      <form>
        <h2>Morning</h2>
        <input
          name="date"
          onChange={handleChanges}
          type="date"
          value={addFormInput.date || ""}
        />
        <span>I am grateful for...</span>
        <span>1: </span>
        <input
          name="grateful_one"
          onChange={handleChanges}
          type="text"
          value={addFormInput.grateful_one || ""}
        />
        <span>2: </span>
        <input
          name="grateful_two"
          onChange={handleChanges}
          type="text"
          value={addFormInput.grateful_two || ""}
        />
        <span>3: </span>
        <input
          name="grateful_three"
          onChange={handleChanges}
          type="text"
          value={addFormInput.grateful_three || ""}
        />
        <span>What would make today great?</span>
        <span>1: </span>
        <input
          name="great_one"
          onChange={handleChanges}
          type="text"
          value={addFormInput.great_one || ""}
        />
        <span>2: </span>
        <input
          name="great_two"
          onChange={handleChanges}
          type="text"
          value={addFormInput.great_two || ""}
        />
        <span>3: </span>
        <input
          name="great_three"
          onChange={handleChanges}
          type="text"
          value={addFormInput.great_three || ""}
        />

        <span>Daily Affirmation</span>
        <input
          name="daily_affirmation"
          onChange={handleChanges}
          type="text"
          value={addFormInput.daily_affirmation || ""}
        />

        <span>How I feel right now:</span>
        <label>
          <input
            name="feel_one"
            onChange={handleChanges}
            type="radio"
            value={parseInt(1)}
          />
          <span role="img" aria-label="pouting face">
            😡
          </span>
        </label>

        <label>
          <input
            name="feel_one"
            onChange={handleChanges}
            type="radio"
            value={2}
          />
          <span role="img" aria-label="sad pensive face">
            😔
          </span>
        </label>
      </form>
    </>
  );
};

export default AddJournalEntry;
