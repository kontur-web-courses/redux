import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IPurchaseState {
	id: number;
	quantity: number;
}

interface IChangePurchaseQuantityPayload {
	productId: number;
	value: number;
}

const initialState: IPurchaseState[] = [];

const purchasesSlice = createSlice({
	name: 'purchases',
	initialState,
	reducers: {
		changePurchaseQuantity(state, {payload}: PayloadAction<IChangePurchaseQuantityPayload>) {
			const {productId, value} = payload;

			if (state.some((p) => p.id === productId)) {
				state.forEach((p) => (p.id === productId ? (p.quantity = Math.max(p.quantity + value, 0)) : p));
			} else {
				state.push(createPurchase(productId, value));
			}
		},
	},
});

function createPurchase(id: number, quantity: number) {
	return {
		id,
		quantity: Math.max(0, quantity),
	};
}

export const {changePurchaseQuantity} = purchasesSlice.actions;
export const purchasesReducer = purchasesSlice.reducer;
