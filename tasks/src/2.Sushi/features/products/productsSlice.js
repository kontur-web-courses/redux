import {createSlice} from '@reduxjs/toolkit';
import Status from '../../constants/Status';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allIds: [],
    byId: {},
    status: Status.none
  }
});

export const productsReducer = productsSlice.reducer;
