import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import RoundButton, { RESTART_SIGN } from './components/RoundButton';
import Timer from './components/Timer';

const timerReducer = (state = {seconds: 15}, action) => {
  switch (action.type) {
    case 'CHANGE_SECONDS':
      return {seconds: state.seconds + action.value};
    default:
      return state;
  }
}

class App extends React.Component {
  state = timerReducer(undefined, {});

  dispatch(action) {
    this.setState(prevState => timerReducer(prevState, action));
  }

  handleDecrease = () => this.dispatch({ type: 'CHANGE_SECONDS', value: -1 });
  handleIncrease = () => this.dispatch({ type: 'CHANGE_SECONDS', value: 1 });

  render() {
    return (
      <Timer seconds={this.state.seconds}
        onDecrease={this.handleDecrease} onIncrease={this.handleIncrease}
      />
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
