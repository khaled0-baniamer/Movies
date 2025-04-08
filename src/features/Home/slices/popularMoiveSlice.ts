import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopularMovieResponse } from "@/types";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import apiClient from "@/api/apiClient";

const initialState: PopularMovieResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const fetchPopularMovies = createAsyncThunk<PopularMovieResponse>(
  `${SliceName.popularMovie}/${ThunkName.fetchPopularMovie}`,
  async () => {
    const response = await apiClient.get(ApiRoute.POPULAR_MOVIE);
    return response.data;
  }
);

const popularMoiveSlice = createSlice({
  name: SliceName.popularMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPopularMovies.fulfilled,
      (state, action: PayloadAction<PopularMovieResponse>) => {
        state.page = action.payload.page;
        state.results = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      }
    );
  },
});

export default popularMoiveSlice.reducer;
