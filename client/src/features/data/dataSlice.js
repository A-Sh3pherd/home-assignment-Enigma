import {createSlice} from "@reduxjs/toolkit";
const dummy_data = require("./dummy_data.json");

const initialState = {
  value: dummy_data,
  searchedCurrencies: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // A function that toggles categories
    toggle: (state, action) => {
      const categories = state.value;
      categories.categories.forEach((category) => {
        if (category.id === action.payload) {
          category.isToggled = !category.isToggled;
        }
      });
    },
    // Toggling a specific currency and staring it
    starCurrency: (state, action) => {
      const categories = state.value;

      const currencies = categories.categories.reduce((total, current) => {
        total.push(...current.childCurrencies);
        return total;
      }, []);

      for (const currency of currencies) {
        if (currency.id === action.payload) {
          currency.isToggled = !currency.isToggled;
        }
      }
    },
    // Searching a currency by keyword
    searchCurrency: (state, action) => {
      const {categories} = initialState.value;
      // Reducing categories into one array of currencies
      const allCurrencies = categories.reduce((total, current) => {
        total.push(...current.childCurrencies);
        return total;
      }, []);
      // All currencies
      const foundCurrencies = allCurrencies.reduce((total, currency) => {
        const payload = action.payload.toUpperCase();
        const name = currency.name.split("").splice(3).join("");
        const symbol = currency.name.split("").slice(0, 3).join("");

        if (symbol === payload || name === payload) {
          total.push(currency);
        }
        return total;
      }, []);
      if (foundCurrencies.length < 1) {
        state.searchedCurrencies = [];
      }
      state.searchedCurrencies = foundCurrencies;
    },
  },
});

export const {toggle, starCurrency, searchCurrency} = dataSlice.actions;

export default dataSlice.reducer;
