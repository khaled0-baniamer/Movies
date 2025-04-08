import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { MovieDetails } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MovieDetails = {};

export const fetchMovieDetails = createAsyncThunk<MovieDetails, { id: number }>(
  `${SliceName.movieDetails}/${ThunkName.fetchMovieDetails}`,
  async (args: { id: number }) => {
    const { id } = args;
    const response = await apiClient.get(`${ApiRoute.MOVIES_DETAILS}/${id}`);
    return response.data;
  }
);

const movieDetailsSlice = createSlice({
  name: SliceName.movieDetails,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state, action: PayloadAction<MovieDetails>) => {
        state.adult = action.payload.adult;
        state.backdrop_path = action.payload.backdrop_path;
        state.belongs_to_collection = action.payload.belongs_to_collection;
        state.budget = action.payload.budget;
        state.genres = action.payload.genres;
        state.homepage = action.payload.homepage;
        state.id = action.payload.id;
        state.imdb_id = action.payload.imdb_id;
        state.original_language = action.payload.original_language;
        state.original_title = action.payload.original_title;
        state.overview = action.payload.overview;
        state.popularity = action.payload.popularity;
        state.poster_path = action.payload.poster_path;
        state.production_companies = action.payload.production_companies;
        state.production_countries = action.payload.production_countries;
        state.release_date = action.payload.release_date;
        state.revenue = action.payload.revenue;
        state.runtime = action.payload.runtime;
        state.spoken_languages = action.payload.spoken_languages;
        state.status = action.payload.status;
        state.tagline = action.payload.tagline;
        state.title = action.payload.title;
        state.video = action.payload.video;
        state.vote_average = action.payload.vote_average;
        state.vote_count = action.payload.vote_count;
      }
    );
  },
});

export default movieDetailsSlice.reducer;
