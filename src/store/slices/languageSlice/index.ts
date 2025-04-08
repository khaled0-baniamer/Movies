import apiClient from "@/api/apiClient";
import { ApiRoute, SliceName, ThunkName } from "@/enums";
import { Language } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Language[] = [];

export const fetchLanguageList = createAsyncThunk<Language[]>(
  `${SliceName.language}/${ThunkName.fetchLanguagesList}`,
  async () => {
    const response = await apiClient.get(ApiRoute.LANGUAGE);
    return response.data;
  }
);

const languageSlice = createSlice({
  name: SliceName.language,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchLanguageList.fulfilled,
      (state, action: PayloadAction<Language[]>) => {
        console.log("🚀 ~ state:", state)
        state = action.payload;
      }
    );
  },
});

export default languageSlice.reducer;
