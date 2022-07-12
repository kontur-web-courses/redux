import Page from '../constants/Page';
import Status from '../constants/Status';

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
  return state;
}
