import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { Country } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Country[] = [];

export const fetchCountryList = createAsyncThunk<Country[]>(
  `${SliceName.country}/${ThunkName.fetchCountriesList}`,
  async () => {
    const response = await apiClient.get(ApiRoute.COUNTRY);
    return response.data;
  }
);
const countrySlice = createSlice({
  name: SliceName.country,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCountryList.fulfilled,
      (state, action: PayloadAction<Country[]>) => {
        console.log("🚀 ~ state:", state)
        state = action.payload;
      }
    );
  },
});

export default countrySlice.reducer;
