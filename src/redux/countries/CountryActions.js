import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const getAllCountries = createAsyncThunk(
  'getAllStadiums',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const usefulData = response.data.map((data) => ({ ...data, id: uuid() }));

      return usefulData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default getAllCountries;
