import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Page from '../../constants/Page';
import {navigateTo} from "../navigation/navigationSlice.js";
import {clear} from '../purchases/purchasesSlice';

export const order = createAsyncThunk(
  'orders/order',
  (_, thunkAPI) => {
    const {purchases} = thunkAPI.getState();

    thunkAPI.dispatch(navigateTo(Page.orders));
    thunkAPI.dispatch(addPurchasesToOrder(purchases));
    thunkAPI.dispatch(clear());
  }
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addPurchasesToOrder(state, action) {
      state.unshift(action.payload);
    }
  }
});

const { addPurchasesToOrder } = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;
