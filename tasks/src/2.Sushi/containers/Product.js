import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';

export default connect(
  (state, props) => ({
    product: state.products.byId[props.productId]
  }),
  (dispatch, props) => ({})
)(Product);
