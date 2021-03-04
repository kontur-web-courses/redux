const CHANGE_SECONDS = 'CHANGE_SECONDS';
const RESTART = 'RESTART';

export const changeSeconds = (value) => {
    return {
        type: CHANGE_SECONDS,
        value,
    };
};

export const restart = () => ({
    type: RESTART,
});

const maxSeconds = 15;

const initialState = {
    seconds: maxSeconds,
};

export const timerReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SECONDS:
            return { ...state, seconds: Math.max(Math.min(action.value + state.seconds, maxSeconds), 0) };
        default:
            return initialState;
    }
};
