import React, { useEffect } from "react";
import { connect } from "react-redux";

import Entry from "../../components/entry/entry.component";

import { fetchEntries } from "../../redux/actions/entries.actions";

const Journal = ({ fetchEntries, entries }) => {
  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  if (entries.length < 0) {
    return <h2>No entries</h2>;
  }

  return (
    <div>
      {entries.map(entry => (
        <Entry key={entry.id} entry={entry} />
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
