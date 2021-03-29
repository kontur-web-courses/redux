const ActionType = {
  CHANGE_SECONDS: `CHANGE_SECONDS`,
  RESTART: `RESTART`,
};

export const changeSeconds = (value) => ({
  type: ActionType.CHANGE_SECONDS,
  payload: value,
});

export const restart = () => ({
  type: ActionType.RESTART,
});

const initialState = {
  seconds: 15,
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SECONDS: {
      const newState = state.seconds + action.payload;
      if (newState > 15) {
        return {
          ...state,
          seconds: 15,
        };
      }

      if (newState < 0) {
        return {
          ...state,
          seconds: 0,
        };
      }

      return {
        ...state,
        seconds: newState,
      };
    }
    
    case ActionType.RESTART:
      return initialState;

    default:
      return state;
  }
};
