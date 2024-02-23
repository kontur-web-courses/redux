import {Page} from '../constants/Page';
import {Status} from '../constants/Status';
import {IProduct} from '../api/products';

const NAVIGATE_TO_PAGE = 'NAVIGATE_TO_PAGE' as const;

export const navigateTo = (page: Page) => ({
	type: NAVIGATE_TO_PAGE,
	page,
});

interface IState {
	page: Page;
	products: {
		allIds: number[];
		byId: Record<string, IProduct>;
		status: Status;
	};
}

// defaultState не используется, если в createStore передается preloadedState.
const defaultState: IState = {
	page: Page.menu,
	products: {
		allIds: [],
		byId: {},
		status: Status.none,
	},
};

type ActionTypes = ReturnType<typeof navigateTo>;

export function rootReducer(state: IState = defaultState, action: ActionTypes) {
	switch (action.type) {
		case NAVIGATE_TO_PAGE:
			return {
				...state,
				page: action.page,
			};
	}
	return state;
}
