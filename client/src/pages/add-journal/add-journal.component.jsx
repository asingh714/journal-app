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
          value={addFormInput.amazing_one || ""}
        />
        <span>2: </span>
        <input
          name="amazing_two"
          onChange={handleChanges}
          type="text"
          value={addFormInput.amazing_two || ""}
        />
        <span>3: </span>
        <input
          name="amazing_three"
          onChange={handleChanges}
          type="text"
          value={addFormInput.amazing_three || ""}
        />

        <span>What could have made today even better?</span>
        <input
          name="better"
          onChange={handleChanges}
          type="text"
          value={addFormInput.better || ""}
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

        <button>Cancel</button>
        <button>Save</button>
      </form>
    </>
  );
};

export default AddJournalEntry;
