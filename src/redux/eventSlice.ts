import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

export type EventRecord = {
  id: string;
  title?: string;
  eventName?: string;
  date: string; // YYYY-MM-DD
  time?: string;
  location: string;
  attendees?: number;
  category?: string;
  priority?: string;
  description?: string;
  author?: string;
};

type EventsState = { items: EventRecord[] };

const initialState: EventsState = { items: [] };

const slice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<EventRecord>) {
      state.items.unshift(action.payload);
    },
    updateEvent(state, action: PayloadAction<EventRecord>) {
      const i = state.items.findIndex((x) => x.id === action.payload.id);
      if (i >= 0) state.items[i] = action.payload;
    },
    removeEvent(state, action: PayloadAction<string>) {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },
    setEvents(state, action: PayloadAction<EventRecord[]>) {
      state.items = action.payload;
    },
  },
});

export const { addEvent, updateEvent, removeEvent, setEvents } = slice.actions;
export default slice.reducer;