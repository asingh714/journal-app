import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./journal.styles.scss";

import Entry from "../../components/entry/entry.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { fetchEntries } from "../../redux/actions/entries.actions";

const Journal = ({ fetchEntries, entries, ...props }) => {
  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  if (entries.length < 0) {
    return <h2>No entries</h2>;
  }

  const routeToAddJournalEntry = e => {
    e.preventDefault();
    props.history.push("/add-journal-entry");
  };

  return (
    <div className="journal-page-container">
      <div className="journal-and-button-container">
        <CustomButton isRounded onClick={routeToAddJournalEntry}>
          Add Journal Entry
        </CustomButton>
        <div className="journal-entries-container">
          {entries.map(entry => (
            <>
              <Entry key={entry.id} entry={entry} {...props} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries
  };
};

export default connect(
  mapStateToProps,
  { fetchEntries }
)(Journal);
