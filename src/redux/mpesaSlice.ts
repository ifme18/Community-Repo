import { createAsyncThunk, createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import type { MPesaStkPushParams } from "./mpesa types";
import { toMpesaApiPayload } from "./mpesa types";

type MpesaState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  token?: string | null;
  lastResponse?: any;
  error?: string | null;
};

const initialState: MpesaState = {
  status: "idle",
  token: null,
  lastResponse: null,
  error: null,
};

/**
 * Fetch OAuth token from your backend.
 * Backend should call Safaricom OAuth and return { access_token, expires_in, ... }.
 */
export const fetchMpesaToken = createAsyncThunk(
  "mpesa/fetchToken",
  async (_, thunkAPI) => {
    const res = await fetch("/api/mpesa/token", { method: "GET" });
    if (!res.ok) {
      const txt = await res.text();
      return thunkAPI.rejectWithValue(txt || "Failed to fetch MPesa token");
    }
    return res.json();
  }
);

/**
 * Perform STK Push via your backend.
 * The backend should handle credentials and call Safaricom STK endpoint.
 * We send the PascalCase payload (toMpesaApiPayload) so backend can pass it through.
 */
export const stkPush = createAsyncThunk(
  "mpesa/stkPush",
  async (params: MPesaStkPushParams, thunkAPI) => {
    const payload = toMpesaApiPayload(params);
    const res = await fetch("/api/mpesa/stk-push", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const txt = await res.text();
      return thunkAPI.rejectWithValue(txt || "STK push failed");
    }
    return res.json();
  }
);

const mpesaSlice = createSlice({
  name: "mpesa",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearLastResponse(state) {
      state.lastResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMpesaToken.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMpesaToken.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.token = action.payload?.access_token ?? null;
        state.lastResponse = action.payload;
      })
      .addCase(fetchMpesaToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = String(action.payload ?? action.error.message);
      })

      .addCase(stkPush.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(stkPush.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.lastResponse = action.payload;
      })
      .addCase(stkPush.rejected, (state, action) => {
        state.status = "failed";
        state.error = String(action.payload ?? action.error.message);
      });
  },
});

export const { clearError, clearLastResponse } = mpesaSlice.actions;
export default mpesaSlice.reducer;



