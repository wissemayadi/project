import { createStore, applyMiddleware, compose } from "redux";
import reducerUser from "../Reducer/reducerUser";
import reducerPost from "../Reducer/reducerPost";
import thunk from "redux-thunk"
import rootReducer from "../Reducer/index";
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

const store = createStore(
  rootReducer,
//   composeEnhancers(applyMiddleware(...arr))
  composeEnhancers(applyMiddleware(...middleware))
);


export default store