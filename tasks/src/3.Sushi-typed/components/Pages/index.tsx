import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../constants/Page';
import Menu from '../Menu';
import Cart from '../Cart';
import Orders from '../Orders';

interface IPages {
  page: string;
}

export default function Pages({ page }: IPages) {
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
