import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { TVDetails } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TVDetails = {};

export const fetchTVDetails = createAsyncThunk<TVDetails, { id: number }>(
  `${SliceName.tvDetails}/${ThunkName.fetchTvDetails}`,
  async (args: { id: number }) => {
    const { id } = args;
    const response = await apiClient.get(`${ApiRoute.TV_DETAILS}/${id}`);
    return response.data;
  }
);

const TVDetailsSlice = createSlice({
  name: SliceName.tvDetails,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTVDetails.fulfilled,
      (state, action: PayloadAction<TVDetails>) => {
        console.log("🚀 ~ state:", state)
        state = action.payload;
      }
    );
  },
});

export default TVDetailsSlice.reducer;
