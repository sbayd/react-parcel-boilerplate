import { UI_ACTIONS } from '../constants/action_types';

export function updateName(userName) {
  return (dispatch) => {
    dispatch({ type: UI_ACTIONS.UPDATE_NAME, data: userName });
  };
}

export function incrementCount() {
  return (dispatch, getState) => {
    const { count } = getState().ui;
    return dispatch({ type: UI_ACTIONS.INCREMENT_COUNT, data: count + 1 });
  };
}