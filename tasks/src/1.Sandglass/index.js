import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import './styles.css';
import { timerReducer, changeSeconds, restart } from './timerReducer.js';
import RoundButton, { RESTART_SIGN } from './components/RoundButton';
import Timer from './components/Timer';
import Sandglass from './components/Sandglass';

const TICK_INTERVAL = 250;
const TICK_VALUE = -0.25;

const appStore = createStore(timerReducer);
const tick = setInterval(() => {
  appStore.dispatch(changeSeconds(TICK_VALUE));
}, TICK_INTERVAL);

class App extends React.Component {
  state = this.props.store.getState();

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  handleDecrease = () => {
    this.props.store.dispatch(changeSeconds(-1));
  };

  handleIncrease = () => {
    this.props.store.dispatch(changeSeconds(1));
  };

  handleRoundButtonClick = () => {
    this.props.store.dispatch(restart());
  }

  render() {
    return (
      <div className="app">
        <Timer
          seconds={this.state.seconds}
          onDecrease={this.handleDecrease}
          onIncrease={this.handleIncrease}
        />
        <Sandglass
          seconds={this.state.seconds}
        />
        <RoundButton
          content={RESTART_SIGN}
          onClick={this.handleRoundButtonClick}
        />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

ReactDom.render(<App store={appStore}/>, document.getElementById('app'));
