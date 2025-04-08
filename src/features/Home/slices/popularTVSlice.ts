import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopularTVResponse } from "@/types";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import apiClient from "@/api/apiClient";

const initialState: PopularTVResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const fetchPopularTv = createAsyncThunk<PopularTVResponse>(
  `${SliceName.popularTv}/${ThunkName.fetchPopularTv}`,
  async () => {
    const response = await apiClient.get(ApiRoute.POPULAR_TV);
    return response.data;
  }
);

const popularTvSlice = createSlice({
  name: SliceName.popularMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPopularTv.fulfilled,
      (state, action: PayloadAction<PopularTVResponse>) => {
        state.page = action.payload.page;
        state.results = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      }
    );
  },
});

export default popularTvSlice.reducer;
