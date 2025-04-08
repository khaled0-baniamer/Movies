import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { TVDetails } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TVDetails = {};

export const fetchTVCredits = createAsyncThunk<TVDetails, { id: number }>(
  `${SliceName.tvCredits}/${ThunkName.fetchTvCredits}`,
  async (args: { id: number }) => {
    const { id } = args;
    const response = await apiClient.get(
      `${ApiRoute.TV_DETAILS}/${id}/credits`
    );
    return response.data;
  }
);

const movieDetailsSlice = createSlice({
  name: SliceName.tvCredits,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTVCredits.fulfilled,
      (state, action: PayloadAction<TVDetails>) => {
        state.adult = action.payload.adult;
        state.backdrop_path = action.payload.backdrop_path;
        state.created_by = action.payload.created_by;
        state.episode_run_time = action.payload.episode_run_time;
        state.first_air_date = action.payload.first_air_date;
        state.genres = action.payload.genres;
        state.homepage = action.payload.homepage;
        state.id = action.payload.id;
        state.in_production = action.payload.in_production;
        state.languages = action.payload.languages;
        state.last_air_date = action.payload.last_air_date;
        state.last_episode_to_air = action.payload.last_episode_to_air;
        state.name = action.payload.name;
        state.next_episode_to_air = action.payload.next_episode_to_air;
        state.networks = action.payload.networks;
        state.number_of_episodes = action.payload.number_of_episodes;
        state.number_of_seasons = action.payload.number_of_seasons;
        state.origin_country = action.payload.origin_country;
        state.original_language = action.payload.original_language;
        state.original_name = action.payload.original_name;
        state.overview = action.payload.overview;
        state.popularity = action.payload.popularity;
        state.poster_path = action.payload.poster_path;
        state.production_companies = action.payload.production_companies;
        state.production_countries = action.payload.production_countries;
        state.seasons = action.payload.seasons;
        state.spoken_languages = action.payload.spoken_languages;
        state.status = action.payload.status;
        state.tagline = action.payload.tagline;
        state.type = action.payload.type;
        state.vote_average = action.payload.vote_average;
        state.vote_count = action.payload.vote_count;
      }
    );
  },
});

export default movieDetailsSlice.reducer;
