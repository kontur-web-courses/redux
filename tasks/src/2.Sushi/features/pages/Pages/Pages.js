import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import Page from '../../../constants/Page';
import {Menu} from '../../products/Menu/Menu';
import {Cart} from '../../purchases/Cart/Cart';
import {Orders} from '../../orders/Orders/Orders';

export const Pages = ({ page }) => {
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
};

Pages.propTypes = {
  page: PropTypes.string.isRequired
};
