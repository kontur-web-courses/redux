import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import './styles.css';
import { timerReducer, changeSeconds, restart } from './timerReducer.js';
import RoundButton, { RESTART_SIGN } from './components/RoundButton';
import Timer from './components/Timer';
import Sandglass from './components/Sandglass';

const appStore = createStore(timerReducer);
setInterval(() => {
  appStore.dispatch(changeSeconds(-0.25));
}, 250);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.store.getState();
  }

  handleDecrease = () => {
    this.props.store.dispatch(changeSeconds(-1));
  };

  handleIncrease = () => {
    this.props.store.dispatch(changeSeconds(1));
  };

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.setState(this.props.store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleRestartButtonClick = () => {
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
        <Sandglass seconds={this.state.seconds} />
        <RoundButton content={RESTART_SIGN} onClick={this.handleRestartButtonClick} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

ReactDom.render(<App store={appStore} />, document.getElementById('app'));
