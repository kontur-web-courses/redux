import * as timerConstants from '../constants/timerConstants.js';

export const changeSeconds = (value) => ({
  type: timerConstants.CHANGE_SECONDS,
  value
});

export const changeTime = (hour, minute, second) => ({
  type: timerConstants.CHANGE_TIME,
  payload: {
    hour,
    minute,
    second
  }
});
