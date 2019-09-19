import { combineReducers } from "redux";
import contacts from "./contactReducer"; // What is that import?

export default combineReducers({
  contacts
});

// Combines all reducers in one.
// Passes data to ? Probably creates contacts variable which pass into <App>
