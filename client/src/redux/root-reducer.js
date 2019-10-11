import { combineReducers } from "redux";

import userReducer from "../redux/reducers/user.reducers";
import entriesReducer from "../redux/reducers/entries.reducers";
import quoteReducer from "../redux/reducers/quotes.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  entries: entriesReducer,
  quotes: quoteReducer
});

export default rootReducer;
