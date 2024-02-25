import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const RESTART_SIGN = '↻';
export const DECREASE_SIGN = '−';
export const INCREASE_SIGN = '+';

export default function RoundButton({content, onClick}) {
	return (
		<div className="button" onClick={onClick}>
			{content}
		</div>
	);
}

RoundButton.propTypes = {
	content: PropTypes.string,
	onClick: PropTypes.func,
};
