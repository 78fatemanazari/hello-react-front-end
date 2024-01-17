import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an asynchronous thunk for fetching random greeting
export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandom', async () => {
  const response = await fetch('http://127.0.0.1:3000/');
  const data = await response.json();
  return data.greeting;
});

// Define the initial state
const initialState = {
  greeting: '',
  loading: false,
  error: '',
};

// Create a slice using createSlice
const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => ({ ...state, loading: true, error: '' }))
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => ({
        ...state, greeting: action.payload, loading: false, error: '',
      }))
      .addCase(fetchRandomGreeting.rejected, (state) => ({ ...state, loading: false, error: 'Error, Failed to fetch' }));
  },
});

// Export the reducer
export default greetingSlice.reducer;
