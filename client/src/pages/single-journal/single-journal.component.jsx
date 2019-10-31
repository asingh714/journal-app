import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { fetchSingleEntry } from "../../redux/actions/entries.actions";
import "./single-journal.styles.scss";

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
    <div className="single-journal-page">
      <div className="single-journal-container">
        <h2 className="heading">Morning</h2>
        <span className="date">
          {moment(date)
          .utc()
          .format("MMM Do YYYY")}
        </span>
        <span className="dark-text">I am grateful for...</span>

        <div className="number-text-container">
          <span className="number light-text">1:</span>
          <span className="light-text">{grateful_one}</span>
        </div>
        <div className="number-text-container">
          <span className="number light-text">2:</span>
          <span className="light-text">{grateful_two}</span>
        </div>

        <div className="number-text-container">
          <span className="number light-text">3:</span>
          <span className="light-text">{grateful_three}</span>
        </div>

        <span className="dark-text">What would make today great?</span>
        <div className="number-text-container">
          <span className="number light-text">1:</span>
          <span className="light-text">{great_one}</span>
        </div>
        <div className="number-text-container">
          <span className="number light-text">2:</span>
          <span className="light-text">{great_two}</span>
        </div>

        <div className="number-text-container">
          <span className="number light-text">3:</span>
          <span className="light-text">{great_three}</span>
        </div>

        <span className="dark-text">Daily Affirmation</span>
        <span className="light-text extra-left">{daily_affirmation}</span>
        <span className="dark-text">How I feel right now:</span>
        <div className="emoji-container">
          <input type="radio" id="emoji_one" />
          <label htmlFor="emoji_one">
            <span
              role="img"
              aria-label="pouting face"
              className={`${feel_one === 1 ? "checked" : ""} `}
            >
              😡
            </span>
          </label>
          <input type="radio" id="emoji_two" />
          <label htmlFor="emoji_two">
            <span
              role="img"
              aria-label="sad pensive face"
              className={`${feel_one === 2 ? "checked" : ""} `}
            >
              😔
            </span>
          </label>
          <input type="radio" id="emoji_three" />
          <label htmlFor="emoji_three">
            <span
              role="img"
              aria-label="neutral face"
              className={`${feel_one === 3 ? "checked" : ""} `}
            >
              😐
            </span>
          </label>
          <input type="radio" id="emoji_four" />
          <label htmlFor="emoji_four">
            <span
              role="img"
              aria-label="slightly smiling face"
              className={`${feel_one === 4 ? "checked" : ""} `}
            >
              🙂
            </span>
          </label>
          <input type="radio" id="emoji_five" />
          <label htmlFor="emoji_five">
            <span
              role="img"
              aria-label="grinning face with open mouth"
              className={`${feel_one === 5 ? "checked" : ""} `}
            >
              😃
            </span>
          </label>
        </div>
      </div>

      <div className="line"></div>

      <div className="single-journal-container">
        <h2 className="heading">Evening</h2>
        <span className="dark-text">
          Three amazing things that happened today
        </span>
        <div className="number-text-container">
          <span className="number light-text">1:</span>
          <span className="light-text">{amazing_one}</span>
        </div>
        <div className="number-text-container">
          <span className="number light-text">2:</span>
          <span className="light-text">{amazing_two}</span>
        </div>

        <div className="number-text-container">
          <span className="number light-text">3:</span>
          <span className="light-text">{amazing_three}</span>
        </div>

        <span className="dark-text">
          What could have made today even better?
        </span>
        <span className="light-text extra-left">{better}</span>
        <span>How I feel right now:</span>
        <div className="emoji-container">
          <input type="radio" id="emoji_one" />
          <label htmlFor="emoji_one">
            <span
              role="img"
              aria-label="pouting face"
              className={`${feel_two === 1 ? "checked" : ""} `}
            >
              😡
            </span>
          </label>
          <input type="radio" id="emoji_two" />
          <label htmlFor="emoji_two">
            <span
              role="img"
              aria-label="sad pensive face"
              className={`${feel_two === 2 ? "checked" : ""} `}
            >
              😔
            </span>
          </label>
          <input type="radio" id="emoji_three" />
          <label htmlFor="emoji_three">
            <span
              role="img"
              aria-label="neutral face"
              className={`${feel_two === 3 ? "checked" : ""} `}
            >
              😐
            </span>
          </label>
          <input type="radio" id="emoji_four" />
          <label htmlFor="emoji_four">
            <span
              role="img"
              aria-label="slightly smiling face"
              className={`${feel_two === 4 ? "checked" : ""} `}
            >
              🙂
            </span>
          </label>
          <input type="radio" id="emoji_five" />
          <label htmlFor="emoji_five">
            <span
              role="img"
              aria-label="grinning face with open mouth"
              className={`${feel_two === 5 ? "checked" : ""} `}
            >
              😃
            </span>
          </label>
        </div>
      </div>
    </div>
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
