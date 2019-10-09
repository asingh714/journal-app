import React, { useEffect } from "react";
import { connect } from "react-redux";

import useForm from "../../customHooks/useForm";
import { editJournalEntry } from "../../redux/actions/entries.actions";

const EditJournalEntry = ({ editJournalEntry, ...props }) => {
  const { match, entries } = props;
  const id = match.params.id;
  const handleEditJournalEntry = event => {
    if (event) event.preventDefault();
    editJournalEntry(id, editFormInput);
    props.history.push("/journal");
  };

  const [
    editFormInput,
    handleChanges,
    handleSubmit,
    setEditFormInput
  ] = useForm(handleEditJournalEntry);

  useEffect(() => {
    const entriesToUpdate = entries.find(entry => `${entry.id}` === id);
    if (entriesToUpdate) {
      setEditFormInput(entriesToUpdate);
    }
  }, [id, setEditFormInput, entries]);

  const routeToJournalPage = e => {
    e.preventDefault();
    props.history.push("/journal");
  };

  return (
    <>
      <div>Random quote here!</div>
      <form>
        <h2>Morning</h2>
        <input
          name="date"
          onChange={handleChanges}
          type="date"
          value={editFormInput.date || ""}
        />
        <span>I am grateful for...</span>
        <span>1: </span>
        <input
          name="grateful_one"
          onChange={handleChanges}
          type="text"
          value={editFormInput.grateful_one || ""}
        />
        <span>2: </span>
        <input
          name="grateful_two"
          onChange={handleChanges}
          type="text"
          value={editFormInput.grateful_two || ""}
        />
        <span>3: </span>
        <input
          name="grateful_three"
          onChange={handleChanges}
          type="text"
          value={editFormInput.grateful_three || ""}
        />
        <span>What would make today great?</span>
        <span>1: </span>
        <input
          name="great_one"
          onChange={handleChanges}
          type="text"
          value={editFormInput.great_one || ""}
        />
        <span>2: </span>
        <input
          name="great_two"
          onChange={handleChanges}
          type="text"
          value={editFormInput.great_two || ""}
        />
        <span>3: </span>
        <input
          name="great_three"
          onChange={handleChanges}
          type="text"
          value={editFormInput.great_three || ""}
        />

        <span>Daily Affirmation</span>
        <input
          name="daily_affirmation"
          onChange={handleChanges}
          type="text"
          value={editFormInput.daily_affirmation || ""}
        />

        <span>How I feel right now:</span>
        <label>
          <input
            name="feel_one"
            onChange={handleChanges}
            type="radio"
            value={1}
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

        <label>
          <input
            name="feel_one"
            onChange={handleChanges}
            type="radio"
            value={3}
          />
          <span role="img" aria-label="neutral face">
            😐
          </span>
        </label>

        <label>
          <input
            name="feel_one"
            onChange={handleChanges}
            type="radio"
            value={4}
          />
          <span role="img" aria-label="slightly smiling face">
            🙂
          </span>
        </label>

        <label>
          <input
            name="feel_one"
            onChange={handleChanges}
            type="radio"
            value={5}
          />
          <span role="img" aria-label="grinning face with open mouth">
            😃
          </span>
        </label>

        <h2>Evening</h2>
        <span>Three amazing things that happened today</span>
        <span>1: </span>
        <input
          name="amazing_one"
          onChange={handleChanges}
          type="text"
          value={editFormInput.amazing_one || ""}
        />
        <span>2: </span>
        <input
          name="amazing_two"
          onChange={handleChanges}
          type="text"
          value={editFormInput.amazing_two || ""}
        />
        <span>3: </span>
        <input
          name="amazing_three"
          onChange={handleChanges}
          type="text"
          value={editFormInput.amazing_three || ""}
        />

        <span>What could have made today even better?</span>
        <input
          name="better"
          onChange={handleChanges}
          type="text"
          value={editFormInput.better || ""}
        />

        <span>How I feel right now:</span>
        <label>
          <input
            name="feel_two"
            onChange={handleChanges}
            type="radio"
            value={1}
          />
          <span role="img" aria-label="pouting face">
            😡
          </span>
        </label>

        <label>
          <input
            name="feel_two"
            onChange={handleChanges}
            type="radio"
            value={2}
          />
          <span role="img" aria-label="sad pensive face">
            😔
          </span>
        </label>

        <label>
          <input
            name="feel_two"
            onChange={handleChanges}
            type="radio"
            value={3}
          />
          <span role="img" aria-label="neutral face">
            😐
          </span>
        </label>

        <label>
          <input
            name="feel_two"
            onChange={handleChanges}
            type="radio"
            value={4}
          />
          <span role="img" aria-label="slightly smiling face">
            🙂
          </span>
        </label>

        <label>
          <input
            name="feel_two"
            onChange={handleChanges}
            type="radio"
            value={5}
          />
          <span role="img" aria-label="grinning face with open mouth">
            😃
          </span>
        </label>

        <button onClick={routeToJournalPage}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries
  };
};

export default connect(
  mapStateToProps,
  { editJournalEntry }
)(EditJournalEntry);
