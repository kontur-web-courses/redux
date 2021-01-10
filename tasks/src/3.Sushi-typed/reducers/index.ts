import Page from '../constants/Page';
import Status from '../constants/Status';
import ProductTag from '../constants/ProductTag';
import * as actionTypes from '../actionTypes';
import {IProduct} from "../api/products";

export interface IStateProducts {
  allIds: number[];
  byId: {[key: number]: IProduct};
  status: Status;
}

export interface IState {
  page: Page;
  products: IStateProducts;
}

// defaultState не используется, если в createStore передается preloadedState.
const defaultState: IState = {
  page: Page.menu,
  products: {
    allIds: [],
    byId: {},
    status: Status.none
  }
};

export function rootReducer(state = defaultState, action): IState {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO_PAGE:
      return {
        ...state,
        page: action.page
      };
  }
  return state;
}
