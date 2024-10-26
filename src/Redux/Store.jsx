import { combineReducers, createStore } from "redux";
import { ContactReducers } from "./Reducers/ContactReducers";

const rootReducer = combineReducers({
    contactRoot: ContactReducers
})

const store = createStore(rootReducer);
export default store;