import { combineReducers } from "redux";

import userReducer from "../redux/reducers/user.reducers";
import entriesReducer from "../redux/reducers/entries.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  entries: entriesReducer
});

export default rootReducer;
