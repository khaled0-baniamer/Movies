import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { Genre } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Genre[] = [];

export const fetchGenreTvList = createAsyncThunk<Genre[]>(
  `${SliceName.genreTv}/${ThunkName.fetchCountriesList}`,
  async () => {
    const response = await apiClient.get(ApiRoute.GENRE_TV);
    return response.data.genres;
  }
);

const genreTvSlice = createSlice({
  name: SliceName.genreTv,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGenreTvList.fulfilled,
      (state, action: PayloadAction<Genre[]>) => {
        console.log("🚀 ~ state:", state);
        state = action.payload;
      }
    );
  },
});

export default genreTvSlice.reducer;
