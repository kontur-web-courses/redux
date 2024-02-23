import Page from '../constants/Page';
import Status from '../constants/Status';

const NAVIGATE_TO_PAGE = 'NAVIGATE_TO_PAGE';

export const navigateTo = page => ({
  type: NAVIGATE_TO_PAGE,
  page
});

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
    case NAVIGATE_TO_PAGE:
      return {
        ...state,
        page: action.page
      };
  }
  return state;
}
