import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import useForm from "../../customHooks/useForm";
import { editJournalEntry } from "../../redux/actions/entries.actions";
import { fetchQuotes } from "../../redux/actions/quote.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import { formatDate } from "../../utils/formatDate";

import "./edit-journal.styles.scss";

const EditJournalEntry = ({
  quotes,
  fetchQuotes,
  editJournalEntry,
  ...props
}) => {
  const [quoteObj, setQuoteObj] = useState({});

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  useEffect(() => {
    let quoteObj = quotes[Math.floor(Math.random() * quotes.length)];
    setQuoteObj(quoteObj);
  }, [quotes]);

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

  console.log(editFormInput);
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
    <div className="edit-journal-container">
      <div className="quote-journal-entry-container">
        <div className="quote-container">
          <span>"{quoteObj && quoteObj.quote}"</span>
          <span className="author">- {quoteObj && quoteObj.author}</span>
        </div>
        <div className="line"></div>
        <form className="form-container">
          <h2 className="heading">Morning</h2>
          <FormInput
            name="date"
            onChange={handleChanges}
            type="date"
            value={formatDate(editFormInput.date) || ""}
            isShort
          />
          <span className="subheading">I am grateful for...</span>
          <div className="number-input-container">
            <span className="number">1:</span>
            <FormInput
              name="grateful_one"
              onChange={handleChanges}
              type="text"
              value={editFormInput.grateful_one || ""}
              isLong
            />
          </div>
          <div className="number-input-container">
            <span className="number">2:</span>
            <FormInput
              name="grateful_two"
              onChange={handleChanges}
              type="text"
              value={editFormInput.grateful_two || ""}
              isLong
            />
          </div>
          <div className="number-input-container">
            <span className="number">3:</span>
            <FormInput
              name="grateful_three"
              onChange={handleChanges}
              type="text"
              value={editFormInput.grateful_three || ""}
              isLong
            />
          </div>

          <span className="subheading">What would make today great?</span>
          <div className="number-input-container">
            <span className="number">1: </span>
            <FormInput
              name="great_one"
              onChange={handleChanges}
              type="text"
              value={editFormInput.great_one || ""}
              isLong
            />
          </div>
          <div className="number-input-container">
            <span className="number">2: </span>
            <FormInput
              name="great_two"
              onChange={handleChanges}
              type="text"
              value={editFormInput.great_two || ""}
              isLong
            />
          </div>
          <div className="number-input-container">
            <span className="number">3:</span>
            <FormInput
              name="great_three"
              onChange={handleChanges}
              type="text"
              value={editFormInput.great_three || ""}
              isLong
            />
          </div>

          <span className="subheading">Daily Affirmation</span>
          <FormInput
            name="daily_affirmation"
            onChange={handleChanges}
            type="text"
            value={editFormInput.daily_affirmation || ""}
            isSingle
          />

          <span className="subheading">How I feel right now:</span>
          <div className="emoji-container">
            <label>
              <input
                name="feel_one"
                onChange={handleChanges}
                type="radio"
                value={1}
              />
              <span
                role="img"
                aria-label="pouting face"
                className={`${editFormInput.feel_one === 1 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="sad pensive face"
                className={`${editFormInput.feel_one === 2 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="neutral face"
                className={`${editFormInput.feel_one === 3 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="slightly smiling face"
                className={`${editFormInput.feel_one === 4 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="grinning face with open mouth"
                className={`${editFormInput.feel_one === 5 ? "selected" : ""} `}
              >
                😃
              </span>
            </label>
          </div>

          <h2 className="heading">Evening</h2>
          <span className="subheading">
            Three amazing things that happened today
          </span>
          <div className="number-input-container">
            <span className="number">1:</span>
            <FormInput
              name="amazing_one"
              onChange={handleChanges}
              type="text"
              value={editFormInput.amazing_one || ""}
              isLong
            />
          </div>
          <div className="number-input-container">
            <span className="number">2:</span>
            <FormInput
              name="amazing_two"
              onChange={handleChanges}
              type="text"
              value={editFormInput.amazing_two || ""}
              isLong
            />
          </div>
          <div className="number-input-container">
            <span className="number">3:</span>
            <FormInput
              name="amazing_three"
              onChange={handleChanges}
              type="text"
              value={editFormInput.amazing_three || ""}
              isLong
            />
          </div>

          <span className="subheading">
            What could have made today even better?
          </span>
          <FormInput
            name="better"
            onChange={handleChanges}
            type="text"
            value={editFormInput.better || ""}
            isSingle
          />

          <span className="subheading">How I feel right now:</span>
          <div className="emoji-container">
            <label>
              <input
                name="feel_two"
                onChange={handleChanges}
                type="radio"
                value={1}
              />
              <span
                role="img"
                aria-label="pouting face"
                className={`${editFormInput.feel_two === 1 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="sad pensive face"
                className={`${editFormInput.feel_two === 2 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="neutral face"
                className={`${editFormInput.feel_two === 3 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="slightly smiling face"
                className={`${editFormInput.feel_two === 4 ? "selected" : ""} `}
              >
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
              <span
                role="img"
                aria-label="grinning face with open mouth"
                className={`${editFormInput.feel_two === 5 ? "selected" : ""} `}
              >
                😃
              </span>
            </label>
          </div>
          <div className="button-container">
            <CustomButton isDelete onClick={routeToJournalPage}>
              Cancel
            </CustomButton>
            <CustomButton isBigEdit onClick={handleSubmit}>
              Save
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries,
    quotes: state.quotes.quotes
  };
};

export default connect(
  mapStateToProps,
  { editJournalEntry, fetchQuotes }
)(EditJournalEntry);
