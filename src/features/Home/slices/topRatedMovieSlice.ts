import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TopRatedMovieResponse } from "@/types";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import apiClient from "@/api/apiClient";

const initialState: TopRatedMovieResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const fetchTopRatedMovies = createAsyncThunk<TopRatedMovieResponse>(
  `${SliceName.topRatedMovie}/${ThunkName.fetchTopRatedMovie}`,
  async () => {
    const response = await apiClient.get(ApiRoute.TOP_RATED_MOVIE);
    return response.data;
  }
);

// Slice
const topRatedMovieSlice = createSlice({
  name: SliceName.topRatedMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTopRatedMovies.fulfilled,
      (state, action: PayloadAction<TopRatedMovieResponse>) => {
        state.page = action.payload.page;
        state.results = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      }
    );
  },
});

export default topRatedMovieSlice.reducer;
