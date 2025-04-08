import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TopRatedTVResponse } from "@/types";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import apiClient from "@/api/apiClient";

const initialState: TopRatedTVResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const fetchTopRatedTv = createAsyncThunk<TopRatedTVResponse>(
  `${SliceName.topRatedTv}/${ThunkName.fetchTopRatedTv}`,
  async () => {
    const response = await apiClient.get(ApiRoute.TOP_RATED_TV);
    return response.data;
  }
);

// Slice
const topRatedTvSlice = createSlice({
  name: SliceName.topRatedMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTopRatedTv.fulfilled,
      (state, action: PayloadAction<TopRatedTVResponse>) => {
        state.page = action.payload.page;
        state.results = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      }
    );
  },
});

export default topRatedTvSlice.reducer;
