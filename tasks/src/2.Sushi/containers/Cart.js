import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import Page from '../constants/Page';
import { changePurchaseQuantity, navigateTo } from '../actionCreators';

export default connect(
  (state, props) => ({
    productsById: state.products.byId,
    productsStatus: state.products.status,
    purchases: state.purchases
  }),
  (dispatch, props) => ({
    onDecreaseById: productId =>
      dispatch(changePurchaseQuantity(productId, -1)),
    onIncreaseById: productId => dispatch(changePurchaseQuantity(productId, 1)),
    onNavigateToMenu: () => dispatch(navigateTo(Page.menu))
  })
)(Cart);
