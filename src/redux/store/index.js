import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
    dcardsReducer,
} from "../reducers/DcardsReducer";
import {
    bottomSheetReducer,
}from "../reducers/BottomSheetReducer";
import {
    authReducer,
}from "../reducers/AuthReducer";


const initialState = {

};
const reducer = combineReducers({
    dcards: dcardsReducer,
    bottomSheet: bottomSheetReducer,
    auth: authReducer,
});
const composeEnhancer = compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
