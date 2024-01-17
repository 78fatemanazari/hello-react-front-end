import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an asynchronous thunk for fetching random greeting
export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandom', async () => {
  try {
    const response = await fetch('/greetings/random_greeting');
    const data = await response.json();
    console.log('API Response:', data);
    return data.greeting;
  } catch (error) {
    throw error; // Let the error propagate to be handled by the rejected action
  }
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
      .addCase(fetchRandomGreeting.pending, (state) => {
        return { ...state, loading: true, error: '' };
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        return { ...state, greeting: action.payload, loading: false, error: '' };
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        return { ...state, loading: false, error: 'Error, Failed to fetch' };
      });
  },
});

// Export the reducer
export default greetingSlice.reducer;