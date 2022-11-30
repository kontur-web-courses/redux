import Page from '../constants/Page';
import Status from '../constants/Status';
import ProductTag from '../constants/ProductTag';
import * as actionTypes from '../actionTypes';
import products from "../api/products";
import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';

const defaultChosenProductsState = {
  tags: [ProductTag.hot, ProductTag.veg],
  ids: [1, 5],
  status: Status.loaded
};

const defaultProductsState = {
  allIds: [],
  byId: {},
  status: Status.none
};

const pageReducer = createReducer(Page.menu, {
  [actionTypes.NAVIGATE_TO_PAGE]: (state, action) => action.page
});

const productsReducer = createReducer(defaultProductsState, {
  [actionTypes.LOAD_PRODUCTS_REQUEST]: loadProductsRequest,
  [actionTypes.LOAD_PRODUCTS_SUCCESS]: (state, action) => ({
    allIds: productsAllIds(action.products),
    byId: productsById(action.products),
    status: Status.loaded
  })
});

const chosenProductsReducer = createReducer(defaultChosenProductsState, {
  [actionTypes.CHANGE_PRODUCT_TAG]: (state, action) => changeProductTag(state, action),
  [actionTypes.LOAD_BY_TAGS_REQUEST]: (state, action) => loadByTagsRequest(state, action),
  [actionTypes.LOAD_BY_TAGS_SUCCESS]: (state, action) => loadByTagsSuccess(state, action),
  [actionTypes.LOAD_BY_TAGS_FAILURE]: (state, action) => loadByTagsFailure(state, action),
});

export const rootReducer = combineReducers({
  page: pageReducer,
  products: productsReducer,
  chosenProducts: chosenProductsReducer
});

const productsAllIds = products => products.map(p => p.id);
const productsById = products => products.reduce(
    (result, product) => ({ ...result, [product.id]: product }),
    {}
);

function loadProductsRequest(state, action) {
  return {
    ...state,
    status: Status.loading
  };
}

function changeProductTag(state, { productTag }) {
  // если в массиве tags нет значения из productTag, то его надо добавить
  // если в массиве tags есть значение из productTag, то его надо убрать
  // помни, что нужно создать новое состояние (immutable-обновление)
  const { tags } = state;
  const foundIndex = tags.indexOf(productTag);
  if (foundIndex !== -1) {
    tags.splice(foundIndex, 1);
  } else {
    tags.push(productTag)
  }

  return {
    ...state,
    tags: tags.slice()
  };
}

// после запроса нужно показать лоадер, а для этого поменять состояние
function loadByTagsRequest(state, action) {
  return {
    ...state,
    status: Status.loading
  };
}

// в случае успеха загруженные идентификаторы надо сохранить
function loadByTagsSuccess(state, { productIds }) {
  return {
    ...state,
    ids: productIds,
    status: Status.loaded
  };
}

// ошибка переводит фильтры в состояние «по умолчанию»
function loadByTagsFailure(state, { productIds }) {
  return {
    ...state,
    tags: [],
    ids: [],
    status: Status.none
  };
}
