import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShipment = createAsyncThunk(
  "shipments/fetchShipment",
  async (shipmentId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://tracking.bosta.co/shipments/track/${shipmentId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const shipmentSlice = createSlice({
  name: "trackedShipment",
  initialState: {
    shipmentInfo: {
      id: '-',
      provider: '-',
      currentStatus: {
        state:'-',
        timestamp:'-'
      },
      promisedDate: '-',
      transitEvents: []
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShipment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shipmentInfo.provider = action.payload.provider;
        state.shipmentInfo.currentStatus = action.payload.CurrentStatus;
        state.shipmentInfo.promisedDate = action.payload.PromisedDate;
        state.shipmentInfo.transitEvents = action.payload.TransitEvents;
        state.shipmentInfo.id = action.payload.TrackingNumber;
        
      })
      .addCase(fetchShipment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default shipmentSlice.reducer;
