import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { Provider } from "@/types";
import { objectToQueryParams } from "@/utils/functions";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Provider = {};

export const fetchTVProvider = createAsyncThunk<Provider, { region?: string }>(
  `${SliceName.tvProvider}/${ThunkName.fetchTvProvider}`,
  async (args: { region?: string }) => {
    const params = objectToQueryParams(args);
    const response = await apiClient.get(`${ApiRoute.TV_PROVIDER}?${params}`);
    return response.data;
  }
);

const tvProviderSlice = createSlice({
  name: SliceName.tvProvider,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTVProvider.fulfilled,
      (state, action: PayloadAction<Provider>) => {
        state.results = action.payload.results;
      }
    );
  },
});

export default tvProviderSlice.reducer;
