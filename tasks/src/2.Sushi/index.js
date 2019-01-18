import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import 'regenerator-runtime/runtime';
import './styles.css';
import Page from './constants/Page';
import Status from './constants/Status';
import Navigation from './components/Navigation';
import Pages from './components/Pages';
import { rootReducer } from './reducers';
import products from './api/products';
import Api from './api';

const productsAllIds = products.map(p => p.id);
const productsById = products.reduce(
  (result, product) => ({ ...result, [product.id]: product }),
  {}
);

const preloadedState = {
  page: Page.menu,
  products: {
    allIds: productsAllIds,
    byId: productsById,
    status: Status.loaded
  }
};

const api = new Api({ baseUrl: 'http://sampleserviceurl?foo=bar' });

const store = createStore(rootReducer, preloadedState);

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Sushi &amp; Rolls</h1>
          <Navigation page={Page.menu} />
        </header>
        <Pages page={Page.menu} />
      </div>
    );
  }
}

App.propTypes = {};

ReactDom.render(<App />, document.getElementById('app'));
