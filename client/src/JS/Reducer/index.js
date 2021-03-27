import { combineReducers } from "redux";
import userReducer from "./reducerUser";
import postReducer from "./reducerPost";

const rootReducer = combineReducers({
  userReducer,postReducer,
});

export default rootReducer;