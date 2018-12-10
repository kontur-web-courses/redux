import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import RoundButton, {DECREASE_SIGN, INCREASE_SIGN} from '../RoundButton';

export default function Timer({seconds, onDecrease, onIncrease}) {
  return (
    <div className="timer">
      <RoundButton content={DECREASE_SIGN} onClick={onDecrease} />
      <div className="timerDisplay">{Math.floor(seconds)}</div>
      <RoundButton content={INCREASE_SIGN} onClick={onIncrease} />
    </div>
  );
}

Timer.propTypes = {
  seconds: PropTypes.number,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func
};
