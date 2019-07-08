import * as actionTypes from '../actionTypes';

export const navigateTo = page => ({
  type: actionTypes.NAVIGATE_TO_PAGE,
  page
});

export const loadProductsRequest = () => ({
  type: actionTypes.LOAD_PRODUCTS_REQUEST
});

export const loadProductsSuccess = products => ({
  type: actionTypes.LOAD_PRODUCTS_SUCCESS,
  products
});
