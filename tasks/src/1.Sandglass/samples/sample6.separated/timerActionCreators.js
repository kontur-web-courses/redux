import * as timerActionTypes from '../constants/timerConstants.js';

export const changeSeconds = value => ({
  type: timerActionTypes.CHANGE_SECONDS,
  value
});

export const changeTime = (hour, minute, second) => ({
  type: timerActionTypes.CHANGE_TIME,
  payload: {
    hour,
    minute,
    second
  }
});
