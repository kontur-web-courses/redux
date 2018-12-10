import * as timerConstants from '../constants/timerConstants.js';

export const timerReducer = (state = {seconds: 15}, action) => {
  switch (action.type) {
    case timerConstants.CHANGE_SECONDS:
      return {seconds: state.seconds + action.value};
    case timerConstants.CHANGE_TIME:
      return {seconds: state.seconds + getTotalSeconds(action.payload)};
    default:
      return state;
  }
}

const getTotalSeconds = ({hour, minute, second}) => {
  return (hour*60 + minute)*60 + second;
}
