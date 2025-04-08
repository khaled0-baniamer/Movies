import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { MainResponse, Movie } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type SimilarMovieType = MainResponse<Movie>;

type MovieSimilarState = {
  data?: SimilarMovieType;
};

const initialState: MovieSimilarState = {};

export const fetchSimilarMovie = createAsyncThunk<SimilarMovieType, { id: number }>(
  `${SliceName.movieDetails}/${ThunkName.fetchSimilarMovies}`,
  async (args: { id: number }) => {
    const { id } = args;
    const response = await apiClient.get(`${ApiRoute.similarMovies(id)}`);
    console.log("🚀 ~ response:", response.data);
    return response.data;
  }
);

const movieSimilarSlice = createSlice({
  name: SliceName.similarMovies,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSimilarMovie.fulfilled,
      (state, action: PayloadAction<SimilarMovieType>) => {
        state.data = action.payload;
      }
    );
  },
});

export default movieSimilarSlice.reducer;
