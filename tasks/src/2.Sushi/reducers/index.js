import Page from '../constants/Page';
import Status from '../constants/Status';
import ProductTag from '../constants/ProductTag';
import * as actionTypes from '../actionTypes';

// defaultState не используется, если в createStore передается preloadedState.
const defaultState = {
  page: Page.menu,
  products: {
    allIds: [],
    byId: {},
    status: Status.none
  }
};

export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO_PAGE:
      return {
        ...state,
        page: action.page
      };
  }
  return state;
}
