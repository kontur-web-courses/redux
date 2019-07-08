import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';

export default connect(
  (state, props) => ({
    productIds: state.products.allIds,
    productsStatus: state.products.status
  }),
  (dispatch, props) => ({})
)(Menu);
