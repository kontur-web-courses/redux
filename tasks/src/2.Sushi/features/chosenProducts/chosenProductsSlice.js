import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Status from '../../constants/Status';

const initialState = {
  tags: [],
  ids: [],
  status: Status.none
};

export const filterProductsByTag = createAsyncThunk(
  'chosenProducts/createAsyncThunk',
  (tag, thunkAPI ) => {
    thunkAPI.dispatch(changeProductTag(tag));

    return thunkAPI.extra.api.fetchProductIdsByTagsUnstable(
      thunkAPI.getState().chosenProducts.tags
    );
  }
);

const chosenProductsSlice = createSlice({
  name: 'chosenProducts',
  initialState,
  reducers: {
    changeProductTag(state, {payload: productTag}) {
      const {tags} = state;
      const index = tags.indexOf(productTag);

      index === -1 ? tags.push(productTag) : tags.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(filterProductsByTag.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(filterProductsByTag.fulfilled, (state, {payload: productIds}) => {
        state.ids = productIds;
        state.status = Status.loaded;
      })
      .addCase(filterProductsByTag.rejected, (state) => {
        state.ids = [];
        state.tags = [];
        state.status = Status.none;
      });
  }
});

export const {changeProductTag} = chosenProductsSlice.actions;

export const chosenProductsReducer = chosenProductsSlice.reducer;
