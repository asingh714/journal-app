import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import "./journal.styles.scss";

import Entry from "../../components/entry/entry.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { fetchEntries } from "../../redux/actions/entries.actions";

const Journal = ({ fetchEntries, entries, isFetching, ...props }) => {
  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  // if (entries.length < 1) {
  //   return <h2>No entries</h2>;
  // }

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
        {isFetching && (
          <div className="key spinner">
            <Loader type="Puff" color="#f7d070" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        <div className="journal-entries-container">
          {entries.map(entry => (
            <Entry key={entry.id} entry={entry} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries,
    isFetching: state.entries.isFetching, 
  };
};

export default connect(
  mapStateToProps,
  { fetchEntries }
)(Journal);
