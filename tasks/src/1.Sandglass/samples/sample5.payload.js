const changeSeconds = (state, {value}) => ({
	seconds: state.seconds + value,
});
const changeTime = (state, {hour, minute, second}) => ({
	seconds: state.seconds + (hour * 60 + minute) * 60 + second,
});
export const timerReducer = (state = {seconds: 15}, {type, payload}) => {
	switch (type) {
		case 'CHANGE_SECONDS':
			return changeSeconds(state, payload);
		case 'CHANGE_TIME':
			return changeTime(state, payload);
		default:
			return state;
	}
};
