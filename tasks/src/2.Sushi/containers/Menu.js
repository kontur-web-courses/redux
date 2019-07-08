import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Status from '../constants/Status';

export default connect(
  (state, props) => ({
    productIds: getProductIds(state.products, state.chosenProducts),
    productsStatus: getProductStatus(state.products, state.chosenProducts)
  }),
  (dispatch, props) => ({})
)(Menu);

function getProductStatus(products, chosenProducts) {
  if (
    chosenProducts.status === Status.loading ||
    products.status === Status.loading
  ) {
    return Status.loading;
  }
  if (products.status === Status.loaded) {
    return Status.loaded;
  }
  return Status.none;
}

function getProductIds(products, chosenProducts) {
  if (chosenProducts.status === Status.loaded) {
    return chosenProducts.ids;
  }
  if (products.status === Status.loaded) {
    return products.allIds;
  }
  return [];
}
