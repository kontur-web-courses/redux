import {createSlice} from "@reduxjs/toolkit";

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: [],
  reducers: {
    changePurchaseQuantity(state, { payload }) {
      const { productId, value } = payload;

      if (state.some(p => p.id === productId)) {
        state.forEach(p => p.id === productId ? p.quantity = Math.max(p.quantity + value, 0) : p);
      } else {
        state.push(createPurchase(productId, value));
      }
    }
  }
});

function createPurchase(id, quantity) {
  return {
    id,
    quantity: Math.max(0, quantity)
  };
}

export const { changePurchaseQuantity } = purchasesSlice.actions;

export const purchasesReducer = purchasesSlice.reducer;
