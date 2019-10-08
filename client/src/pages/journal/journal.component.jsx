import React, { useEffect } from "react";
import { connect } from "react-redux";

import Entry from "../../components/entry/entry.component";

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
    props.history.push("/add-journal-entry")
  }

  return (
    <div>
      <h2>Insert Month Here</h2>
      <div onClick={routeToAddJournalEntry}>Add Journal Entry</div>
      {entries.map(entry => (
        <Entry key={entry.id} entry={entry} {...props} />
      ))}
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
