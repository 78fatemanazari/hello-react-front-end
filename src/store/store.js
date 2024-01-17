import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice'; // Import the new reducer

const store = configureStore({
  reducer: {
    greetings: greetingReducer, // Use the new reducer under 'greetings' key
    // Add other reducers if you have them
  },
});

export default store;
