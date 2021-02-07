import {combineReducers, createStore} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "../Redux/reducers/rootReducer";
const store = createStore(rootReducer, composeWithDevTools);

window.store = store;
console.log(store.getState());
export default store;



