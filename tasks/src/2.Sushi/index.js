import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import 'regenerator-runtime/runtime';
import './styles.css';
import Page from './constants/Page';
import Status from './constants/Status';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './containers/Navigation';
import Pages from './containers/Pages';
import { rootReducer } from './reducers';
import * as actionTypes from './actionTypes';
import products from './api/products';
import Api from './api';
import { loadProductsRequest, loadProductsSuccess } from './actionCreators';

const customMiddleWare = ({ getState, dispatch }) => next => action => {
  // console.log(action.type);
  if (action.type === actionTypes.NAVIGATE_TO_PAGE) {
    if (getState().page === Page.menu) {
      return next({ ...action, page: Page.cart });
    }
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
    store.dispatch(loadProductsRequest());
    api.fetchProducts().then(products => {
      store.dispatch(loadProductsSuccess(products));
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <ErrorBoundary>
            <header className="header">
              <h1>Sushi &amp; Rolls</h1>
              <Navigation />
            </header>
            <Pages />
          </ErrorBoundary>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {};

ReactDom.render(<App />, document.getElementById('app'));
