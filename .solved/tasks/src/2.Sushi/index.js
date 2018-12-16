import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import './styles.css';
import Page from './constants/Page';
import Status from './constants/Status';
import Navigation from './containers/Navigation';
import Pages from './containers/Pages';
import { rootReducer } from './reducers';
import products from './api/products';
import Api from './api';
import * as actionCreators from './actionCreators';
import * as actionTypes from './actionTypes';

const customMiddleWare = ({ getState, dispatch }) => next => action => {
  console.log(action.type);
  if (action.type === actionTypes.CHANGE_PURCHASE_QUANTITY) {
    return next({ ...action, value: 2 * action.value });
  }
  return next(action);
};

const api = new Api({ baseUrl: 'http://sampleserviceurl?foo=bar' });

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api), customMiddleWare, logger)
);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(actionCreators.loadProductsRequest());
    api.fetchProducts().then(products => {
      store.dispatch(actionCreators.loadProductsSuccess(products));
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <h1>Sushi &amp; Rolls</h1>
          <Navigation page={Page.menu} />
          <Pages page={Page.menu} />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {};

ReactDom.render(<App />, document.getElementById('app'));
