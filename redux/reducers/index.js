import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import test from "./test";
const reducers = {
  // ... your other reducers here ...
  form: formReducer,
  test
};

export default combineReducers(reducers);
