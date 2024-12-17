import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceSlice';

export const store = configureStore({
  reducer: {
    requests: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
