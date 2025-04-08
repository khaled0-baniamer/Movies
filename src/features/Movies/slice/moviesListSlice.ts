import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { MainResponse, Movie } from "@/types";
import { objectToQueryParams } from "@/utils/functions";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type MovieList = MainResponse<Movie>;

const initialState: MovieList = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const fetchMoviesList = createAsyncThunk<
  MovieList,
  {
    page: number;
    sort_by?: string;
    with_original_language?: string;
    with_genres?: string;
    "release_date.gte"?: Date;
    "release_date.lte"?: Date;
    "vote_average.gte"?: number;
    "vote_average.lte"?: number;
    "with_runtime.gte"?: number;
    "with_runtime.lte"?: number;
    "vote_count.gte"?: number;
    with_keywords?: string;
  }
>(
  `${SliceName.moviesList}/${ThunkName.fetchMoviesList}`,
  async (args: {
    page: number;
    sort_by?: string;
    with_original_language?: string;
    with_genres?: string;
    "release_date.gte"?: Date;
    "release_date.lte"?: Date;
    "vote_average.gte"?: number;
    "vote_average.lte"?: number;
    "with_runtime.gte"?: number;
    "with_runtime.lte"?: number;
    "vote_count.gte"?: number;
    with_keywords?: string;
  }) => {
    const params = objectToQueryParams(args); // Convert the args object to query string

    const response = await apiClient.get(`${ApiRoute.MOVIES_LIST}?${params}`);
    return response.data;
  }
);

const moviesListSlice = createSlice({
  name: SliceName.moviesList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMoviesList.fulfilled,
      (state, action: PayloadAction<MovieList>) => {
        state.page = action.payload.page;
        state.results = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      }
    );
  },
});

export default moviesListSlice.reducer;
