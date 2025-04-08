import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { MovieCredits } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MovieCredits = {};

export const fetchMovieCredits = createAsyncThunk<MovieCredits, { id: number }>(
  `${SliceName.movieCredits}/${ThunkName.fetchMovieCredits}`,
  async (args: { id: number }) => {
    const { id } = args;
    const response = await apiClient.get(
      `${ApiRoute.MOVIES_DETAILS}/${id}/credits`
    );
    return response.data;
  }
);

const movieDetailsSlice = createSlice({
  name: SliceName.movieCredits,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMovieCredits.fulfilled,
      (state, action: PayloadAction<MovieCredits>) => {
        state.cast = action.payload.cast;
        state.crew = action.payload.crew;
        state.id = action.payload.id;
      }
    );
  },
});

export default movieDetailsSlice.reducer;
