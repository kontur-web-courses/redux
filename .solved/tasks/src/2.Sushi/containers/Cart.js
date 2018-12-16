import React from 'react';
import { connect } from 'react-redux';
import Page from '../constants/Page';
import { changePurchaseQuantity, navigateTo, order } from '../actionCreators';
import Cart from '../components/Cart';

export default connect(
  (state, props) => ({
    productsById: state.products.byId,
    productsStatus: state.products.status,
    purchases: state.purchases
  }),
  (dispatch, props) => ({
    onDecreaseById: productId => dispatch(changePurchaseQuantity(productId, -1)),
    onIncreaseById: productId => dispatch(changePurchaseQuantity(productId, 1)),
    onNavigateToMenu: () => dispatch(navigateTo(Page.menu)),
    onOrder: () => dispatch(order()),
  })
)(Cart);
