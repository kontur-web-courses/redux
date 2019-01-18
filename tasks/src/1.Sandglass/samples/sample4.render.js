import React from 'react';
import ReactDom from 'react-dom';
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

const handleDecrease = () =>
  appStore.dispatch({ type: 'CHANGE_SECONDS', value: -1 });
const handleIncrease = () =>
  appStore.dispatch({ type: 'CHANGE_SECONDS', value: 1 });

const render = () => {
  const seconds = appStore.getState().seconds;
  ReactDom.render(
    <Timer
      seconds={seconds}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
    />,
    document.getElementById('app')
  );
};

appStore.subscribe(render);
render();
