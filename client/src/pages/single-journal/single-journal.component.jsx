import React from "react";
import { connect } from "react-redux";

const SingleJournal = ({entries, ...props}) => {
  const entry = entries.find(entry => `${entry.id}` === props.match.params.id)
  console.log("Single", entries);
  return <div>{entry.date}</div>;
};

const mapStateToProps = state => {
  return {
    entries: state.entries.entries
  };
};

export default connect(
  mapStateToProps,
  {}
)(SingleJournal);
