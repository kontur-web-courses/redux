import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {applyMiddleware, createStore} from 'redux';
import 'regenerator-runtime/runtime';
import './styles.css';
import Page from './constants/Page';
import Status from './constants/Status';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './containers/Navigation';
import Pages from './containers/Pages';
import { rootReducer } from './reducers';
import products from './api/products';
import Api from './api';
import { Provider } from 'react-redux';
import {NAVIGATE_TO_PAGE} from "./actionTypes";
import logger from 'redux-logger';
import {loadProductsRequest, loadProductsSuccess} from "./actionCreators";

const preloadedState = {
  page: Page.menu
};

const api = new Api({ baseUrl: 'http://sampleserviceurl?foo=bar' });

const customMiddleWare = ({ getState, dispatch }) => next => action => {
  if (action.type === NAVIGATE_TO_PAGE && getState().page === 'menu' && action.page !== 'cart') {
    return next({ type: NAVIGATE_TO_PAGE, page: 'cart' });
  }
  return next(action);
};

const store = createStore(rootReducer, preloadedState, applyMiddleware(customMiddleWare, logger));

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadProductsRequest());
    api.fetchProducts().then(products => {
      store.dispatch(loadProductsSuccess(products));
    })
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
