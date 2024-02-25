import {Page} from '../constants/Page';
import {Status} from '../constants/Status';
import {IProduct} from '../api/products';

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

type ActionTypes = unknown;

export function rootReducer(state: IState = defaultState, action: ActionTypes) {
	return state;
}
