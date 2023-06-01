import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { v4 as uuid } from 'uuid';

const getAllCountries = createAsyncThunk(
  'getAllStadiums',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const usefulData = data.map((data) => ({ ...data, id: uuid() }));

      return usefulData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default getAllCountries;
