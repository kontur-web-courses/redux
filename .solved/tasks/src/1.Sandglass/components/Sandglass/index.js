import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Sandglass({ seconds }) {
  const sandRate = Math.max(Math.min(4 * seconds, 60), 0);

  return (
    <div className="sandglass">
      <div className="sandglassTop" />
      <div className="sandglassMiddle">
        <div className="glass" />
        <div
          className="topSand"
          style={{
            borderTopWidth: `${Math.floor(2 + (98 * sandRate) / 60)}px`,
            borderLeftWidth: `${2 + sandRate}px`,
            borderRightWidth: `${2 + sandRate}px`,
            right: `-${2 + sandRate}px`
          }}
        />
        <div
          className="sandStream"
          style={{
            display: sandRate % 60 === 0 ? 'none' : 'block'
          }}
        />
        <div
          className="bottomSand"
          style={{
            borderBottomWidth: `${Math.floor(
              2 + (98 * (60 - sandRate)) / 60
            )}px`,
            borderLeftWidth: `${2 + 60 - sandRate}px`,
            borderRightWidth: `${2 + 60 - sandRate}px`,
            right: `-${2 + 60 - sandRate}px`
          }}
        />
      </div>
      <div className="sandglassBottom" />
    </div>
  );
}

Sandglass.propTypes = {
  seconds: PropTypes.number
};
