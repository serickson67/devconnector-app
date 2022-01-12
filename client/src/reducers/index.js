import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    // All reducers go into this
    alert,
    auth,
    profile,
});