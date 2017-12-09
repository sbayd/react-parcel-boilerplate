// SIMPLE REDUCER
import { UI_ACTIONS } from '../constants/action_types';
import assign from 'lodash/assign';

export default (state = { count: 1, userName: 'Berkay Aydin', webSite: 'http://sbaydin.com' }, action) => {
  switch (action.type) {
  case UI_ACTIONS.UPDATE_NAME:
    return assign({} ,state, { userName: action.data });
  case UI_ACTIONS.INCREMENT_COUNT:
    return assign({} ,state, { count: action.data });
  default:
    return state;
  }
};
