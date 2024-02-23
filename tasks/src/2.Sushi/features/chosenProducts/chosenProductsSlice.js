import {createSlice} from '@reduxjs/toolkit';
import Status from '../../constants/Status';

const initialState = {
  tags: [],
  ids: [],
  status: Status.none
};

const chosenProductsSlice = createSlice({
  name: 'chosenProducts',
  initialState,
  reducers: {
    changeProductTag(state, {payload: productTag}) {
      const {tags} = state;
      const index = tags.indexOf(productTag);

      index === -1 ? tags.push(productTag) : tags.splice(index, 1);
    }
  }
});

export const {changeProductTag} = chosenProductsSlice.actions;

export const chosenProductsReducer = chosenProductsSlice.reducer;
