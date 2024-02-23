import {Page} from '../../constants/Page';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: Page = Page.menu as Page;

const navigationSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		navigateTo(state, action: PayloadAction<Page>) {
			return action.payload;
		},
	},
});

export const {navigateTo} = navigationSlice.actions;
export const pageReducer = navigationSlice.reducer;
