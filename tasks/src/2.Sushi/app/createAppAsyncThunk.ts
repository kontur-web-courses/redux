import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from './store';
import Api from '../api';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	dispatch: AppDispatch;
	state: RootState;
	extra: {
		api: Api;
	};
}>();
