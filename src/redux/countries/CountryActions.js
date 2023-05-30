import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const KEY = '4gAAMetSVy11MEhpX5M8FU7PrWPEpmqlXS8QK8Ie9Agt6Z5ewoyr8f8nBiVi';
// YyHbMoZp7HJe9YHqkN6xOFoIOTqA7mc22aHI7qbw4sV5NIdL5U2mMsljQTFS

// 494eadfbdamsh6169ec810a1ae01p13ca1cjsn2193f5d35e35
// const URL = 'https://api.sportmonks.com/v3/football/venues?api_token=4gAAMetSVy11MEhpX5M8FU7PrWPEpmqlXS8QK8Ie9Agt6Z5ewoyr8f8nBiVi&include=country';

const getAllCountries = createAsyncThunk(
  'getAllStadiums',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default getAllCountries;
