import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slices/eventsSlice";
import deathsReducer from "/slices/deathSlices";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    deaths: deathsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;