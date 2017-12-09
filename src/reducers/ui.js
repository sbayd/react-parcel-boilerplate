// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';

export default (state = { count: 1, userName: 'Berkay Aydin', webSite: 'http://sbaydin.com' }, action) => {
  switch (action.type) {
  case UI_ACTIONS.UPDATE_NAME:
    return { ...state, userName: action.data };
  case UI_ACTIONS.INCREMENT_COUNT:
    return { ...state, count: action.data };
  default:
    return state;
  }
};
