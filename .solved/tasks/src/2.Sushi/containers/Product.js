import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import { navigateTo, changePurchaseQuantity } from '../actionCreators';
import Page from '../constants/Page';

export default connect(
  (state, props) => ({
    product: state.products.byId[props.productId],
    purchase: state.purchases.find(p => p.id === props.productId)
  }),
  (dispatch, props) => ({
    onDecrease: () => dispatch(changePurchaseQuantity(props.productId, -1)),
    onIncrease: () => dispatch(changePurchaseQuantity(props.productId, 1)),
    onPay: () => dispatch(navigateTo(Page.cart))
  })
)(Product);
