export const CHANGE_SECS = 'CHANGE_SECS';
export const RESTART_SECS = 'RESTART_SECS';

export const changeSeconds = (value) => {
    return { type: CHANGE_SECS, value }
};

export const restart = () => {
    return { type: RESTART_SECS, value: 15 }
};

const MAX_SECS_VALUE = 15;
function validateSeconds(newValue) {
    if (newValue < 0) { return 0; }
    if (newValue > MAX_SECS_VALUE) { return MAX_SECS_VALUE; }

    return newValue;
}

export const timerReducer = (state = { seconds: MAX_SECS_VALUE }, action) => {
    switch (action.type) {
        case CHANGE_SECS:
            return { seconds: validateSeconds(state.seconds + action.value) };
        case RESTART_SECS:
            return { seconds: action.value };
        default:
            return state;
    }
};

