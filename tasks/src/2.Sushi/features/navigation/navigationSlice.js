import Page from "../../constants/Page.js";
import {createSlice} from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'page',
    initialState: Page.menu,
    reducers: {
        navigateTo(state, action) {
            return action.payload;
        }
    }
});

// За генерацию 'action creator' 'navigateTo' теперь отвечает 'createSlice'
export const { navigateTo } = navigationSlice.actions;

// За генерацию редьюсера для сайлса также твечает createSlice`
export const pageReducer = navigationSlice.reducer;
