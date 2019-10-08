import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSingleEntry } from "../../redux/actions/entries.actions";

const SingleJournal = ({ entry, fetchSingleEntry, ...props }) => {
  const id = props.match.params.id;

  useEffect(() => {
    fetchSingleEntry(id);
  }, [fetchSingleEntry, id]);

  const {
    date,
    grateful_one,
    grateful_two,
    grateful_three,
    great_one,
    great_two,
    great_three,
    daily_affirmation,
    feel_one,
    amazing_one,
    amazing_two,
    amazing_three,
    better,
    feel_two
  } = entry;
  return (
    <>
      <h2>Morning</h2>
      <span>{date}</span>
      <span>I am grateful for...</span>
      <span>1: {grateful_one}</span>
      <span>2: {grateful_two}</span>
      <span>3: {grateful_three}</span>
      <span>What would make today great?</span>
      <span>1: {great_one}</span>
      <span>2: {great_two}</span>
      <span>3: {great_three}</span>
      <span>Daily Affirmation</span>
      <span>{daily_affirmation}</span>
      <span>How I feel right now:</span>
      <span>{feel_one}</span>

      <h2>Evening</h2>
      <span>Three amazing things that happened today</span>
      <span>1: {amazing_one}</span>
      <span>2: {amazing_two}</span>
      <span>3: {amazing_three}</span>
      <span>What could have made today even better?</span>
      <span>{better}</span>
      <span>How I feel right now:</span>
      <span>{feel_two}</span>
    </>
  );
};

const mapStateToProps = state => {
  return {
    entry: state.entries.entry
  };
};

export default connect(
  mapStateToProps,
  { fetchSingleEntry }
)(SingleJournal);
