import { combineReducers } from 'redux';
import ui from './ui';

// Add your new reducer here
const reducers = {
  ui
};

const rootReducer = combineReducers(reducers);

export default rootReducer;