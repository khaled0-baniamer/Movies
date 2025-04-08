import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { MainResponse, TV } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type SimilarTVType = MainResponse<TV>;

type MovieSimilarState = {
  data?: SimilarTVType;
};

const initialState: MovieSimilarState = {};

export const fetchSimilarTV = createAsyncThunk<SimilarTVType, { id: number }>(
  `${SliceName.similarTv}/${ThunkName.fetchSimilarTv}`,
  async (args: { id: number }) => {
    const { id } = args;
    const response = await apiClient.get(`${ApiRoute.similarTV(id)}`);
    return response.data;
  }
);

const movieSimilarSlice = createSlice({
  name: SliceName.similarMovies,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        fetchSimilarTV.fulfilled,
      (state, action: PayloadAction<SimilarTVType>) => {
        state.data = action.payload;
      }
    );
  },
});

export default movieSimilarSlice.reducer;
