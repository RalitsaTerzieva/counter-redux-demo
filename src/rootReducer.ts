import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './createSlice';

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer;