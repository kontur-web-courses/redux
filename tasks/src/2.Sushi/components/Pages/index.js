import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../constants/Page';
import Menu from '../../containers/Menu';
import Cart from '../../containers/Cart';
import Orders from '../../containers/Orders';

export default function Pages({ page }) {
  switch (page) {
    case Page.menu:
      return <Menu />;
    case Page.cart:
      return <Cart />;
    case Page.orders:
      return <Orders />;
    default:
      throw 'Unknown page';
  }
}

Pages.propTypes = {
  page: PropTypes.string.isRequired
};
