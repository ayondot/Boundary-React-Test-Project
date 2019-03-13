import {combineReducers} from 'redux';
import {authReducer} from "../authentication/reducer";

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;