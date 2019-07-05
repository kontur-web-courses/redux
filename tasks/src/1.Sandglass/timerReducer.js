export const CHANGE_SECONDS = 'CHANGE_SECONDS';
export const RESTART = 'RESTART';

export const changeSeconds = value => ({
  type: CHANGE_SECONDS,
  value
});

export const restart = () => ({
  type: RESTART
});

export const timerReducer = (state = { seconds: 15 }, action) => {
  switch (action.type) {
    case CHANGE_SECONDS:
      return {
        seconds: Math.max(Math.min(state.seconds + action.value, 15), 0)
      };
    case RESTART:
      return { seconds: 15 };
    default:
      return state;
  }
};
