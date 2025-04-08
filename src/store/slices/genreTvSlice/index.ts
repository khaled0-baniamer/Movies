import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { Genre } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Genre[] = [];

export const fetchGenreMovieList = createAsyncThunk<Genre[]>(
  `${SliceName.genreMovie}/${ThunkName.fetchGenreMovieList}`,
  async () => {
    const response = await apiClient.get(ApiRoute.GENRE_MOVIE);
    return response.data.genres;
  }
);

const genreMovieSlice = createSlice({
  name: SliceName.genreMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGenreMovieList.fulfilled,
      (state, action: PayloadAction<Genre[]>) => {
        console.log("🚀 ~ state:", state);
        state = action.payload;
      }
    );
  },
});

export default genreMovieSlice.reducer;
