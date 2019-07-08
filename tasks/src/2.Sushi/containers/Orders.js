import React from 'react';
import { connect } from 'react-redux';
import Page from '../constants/Page';
import { changePurchaseQuantity, navigateTo } from '../actionCreators';
import Orders from '../components/Orders';

export default connect(
  (state, props) => ({
    productsById: state.products.byId,
    productsStatus: state.products.status,
    orders: state.orders
  }),
  (dispatch, props) => ({
    onNavigateToMenu: () => dispatch(navigateTo(Page.menu))
  })
)(Orders);
