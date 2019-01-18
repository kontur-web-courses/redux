import * as timerActionTypes from './timerActionTypes.js';

export const timerReducer = (state = { seconds: 15 }, action) => {
  switch (action.type) {
    case timerActionTypes.CHANGE_SECONDS:
      return { seconds: state.seconds + action.value };
    case timerActionTypes.CHANGE_TIME:
      return { seconds: state.seconds + getTotalSeconds(action) };
    default:
      return state;
  }
};

const getTotalSeconds = ({ hour, minute, second }) => {
  return (hour * 60 + minute) * 60 + second;
};
