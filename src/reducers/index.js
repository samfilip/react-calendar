import { combineReducers } from 'redux';
// import all reducers here
import calendarReducer from './calendarReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  calendar: calendarReducer,
});

// make the combined reducers available for import
export default reducers;