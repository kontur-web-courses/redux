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

const loadByTags = () => async (dispatch, getState, api) => {
  dispatch({ type: actionTypes.LOAD_BY_TAGS_REQUEST });
  try {
    const productIds = await api.fetchProductIdsByTagsUnstable(
      getState().chosenProducts.tags
    );
    dispatch({
      type: actionTypes.LOAD_BY_TAGS_SUCCESS,
      productIds: productIds
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_BY_TAGS_FAILURE
    });
  }
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
