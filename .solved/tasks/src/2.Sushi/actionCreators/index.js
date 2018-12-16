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

export const changePurchaseQuantity = (productId, value) => {
  return {
    type: actionTypes.CHANGE_PURCHASE_QUANTITY,
    productId,
    value
  };
};

export const order = () => {
  return {
    type: actionTypes.ORDER
  };
};

export const changeProductTag = productTag => async (
  dispatch,
  getState,
  api
) => {
  dispatch({
    type: actionTypes.CHANGE_PRODUCT_TAG,
    productTag
  });
  await dispatch(loadByTags());
  await api.sendMetric('changeProductTag', 'done');
};

const loadByTags = () => async (dispatch, getState, api) => {
  const tags = getState().chosenProducts.tags;
  dispatch({
    type: actionTypes.LOAD_BY_TAGS_REQUEST
  });
  try {
    const productIds = await api.fetchProductIdsByTagsUnstable(tags);
    dispatch({
      type: actionTypes.LOAD_BY_TAGS_SUCCESS,
      productIds
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_BY_TAGS_FAILURE
    });
  }
};
