import { createSlice } from '@reduxjs/toolkit';
import getAllCountries from './CountryActions';

const initialState = {
  Countries: [],
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getcountry: (state, { payload }) => {
      const selectedCountry = state.Countries.filter((Country) => Country.Country_id === payload);
      return selectedCountry;
    },
  },
  extraReducers: {
    [getAllCountries.fulfilled]: (state, { payload }) => {
      state.Countries = payload;
    },
  },

});

export default countrySlice.reducer;
