import { createSlice } from '@reduxjs/toolkit';
import getAllCountries from './CountryActions';

const initialState = {
  countries: [],
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountry: (state, { payload }) => {
      const selectedCountry = state.countries.filter((Country) => Country.Country.id === payload);
      return selectedCountry;
    },
  },
  extraReducers: {
    [getAllCountries.fulfilled]: (state, { payload }) => {
      state.countries = payload;
    },
  },
});

export const { getCountry } = countrySlice.actions;
export default countrySlice.reducer;
