import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css';
import Timer from '../components/Timer';

const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

const timerReducer = (state = { seconds: 15 }, action) => {
  switch (action.type) {
    case 'CHANGE_SECONDS':
      return { seconds: state.seconds + action.value };
    default:
      return state;
  }
};

const appStore = createStore(timerReducer);

class App extends React.Component {
  state = this.props.store.getState();

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.setState(this.props.store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  handleDecrease = () =>
    this.props.store.dispatch({ type: 'CHANGE_SECONDS', value: -1 });
  handleIncrease = () =>
    this.props.store.dispatch({ type: 'CHANGE_SECONDS', value: 1 });

  render() {
    return (
      <Timer
        seconds={this.state.seconds}
        onDecrease={this.handleDecrease}
        onIncrease={this.handleIncrease}
      />
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

ReactDom.render(<App store={appStore} />, document.getElementById('app'));
