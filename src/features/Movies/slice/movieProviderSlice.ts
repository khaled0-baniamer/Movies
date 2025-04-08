import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { Provider } from "@/types";
import { objectToQueryParams } from "@/utils/functions";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Provider = {};

export const fetchMoviesProvider = createAsyncThunk<
  Provider,
  { watch_region: string }
>(
  `${SliceName.moviesProvider}/${ThunkName.fetchMoviesProvider}`,
  async (args: { watch_region: string }) => {
    const params = objectToQueryParams(args);
    const response = await apiClient.get(
      `${ApiRoute.MOVIES_PROVIDER}?${params}`
    );
    return response.data;
  }
);

const movieProviderSlice = createSlice({
  name: SliceName.moviesProvider,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMoviesProvider.fulfilled,
      (state, action: PayloadAction<Provider>) => {
        state.results = action.payload.results;
      }
    );
  },
});

export default movieProviderSlice.reducer;
