import * as timerActionTypes from './timerActionTypes';

export const changeSeconds = value => ({
  type: timerActionTypes.CHANGE_SECONDS,
  value
});

export const changeTime = (hour, minute, second) => ({
  type: timerActionTypes.CHANGE_TIME,
  hour,
  minute,
  second
});
