const CHANGE_SECONDS = 'CHANGE_SECONDS';
const CHANGE_TIME = 'CHANGE_TIME';

export const changeSeconds = value => ({
  type: CHANGE_SECONDS,
  value
});

export const changeTime = (hour, minute, second) => ({
  type: CHANGE_TIME,
  hour,
  minute,
  second
});

export const timerReducer = (state = { seconds: 15 }, action) => {
  switch (action.type) {
    case CHANGE_SECONDS:
      return { seconds: state.seconds + action.value };
    case CHANGE_TIME:
      return { seconds: state.seconds + getTotalSeconds(action) };
    default:
      return state;
  }
};

const getTotalSeconds = ({ hour, minute, second }) => {
  return (hour * 60 + minute) * 60 + second;
};
