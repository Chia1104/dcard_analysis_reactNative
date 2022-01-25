import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
    dcardsReducer,
} from "../reducers/DcardsReducer";


const initialState = {

};
const reducer = combineReducers({
    dcards: dcardsReducer,
});
const composeEnhancer = compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
