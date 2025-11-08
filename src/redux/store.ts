import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventSlice";
import deathsReducer from "./deathSlices";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    deaths: deathsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;