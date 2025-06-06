import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { MainResponse, TV } from "@/types";
import { objectToQueryParams } from "@/utils/functions";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TVList = MainResponse<TV>;

const initialState: TVList = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
export const fetchTVList = createAsyncThunk<
  TVList,
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
  }
>(
  `${SliceName.tvList}/${ThunkName.fetchTvList}`,
  async (args: {
    page?: number;
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
  }) => {
    const params = objectToQueryParams(args);
    const response = await apiClient.get(`${ApiRoute.TV_LIST}?${params}`);
    return response.data;
  }
);
const tvListSlice = createSlice({
  name: SliceName.moviesList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTVList.fulfilled,
      (state, action: PayloadAction<TVList>) => {
        state.page = action.payload.page;
        state.results = action.payload.results;
        state.total_pages = action.payload.total_pages;
        state.total_results = action.payload.total_results;
      }
    );
  },
});

export default tvListSlice.reducer;
