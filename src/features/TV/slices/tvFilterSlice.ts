import { SliceName } from "@/enums";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TVFilterState = {
  sort?: string;
  language?: string;
  genres?: string;
  startDate: Date | null;
  endDate: Date | null;
  avarageVote: { max: number; min: number };
  runtime: { max: number; min: number };
  minUserVote: number;
};

const initialState: TVFilterState = {
  startDate: null,
  // after year
  endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  avarageVote: { max: 10, min: 0 },
  runtime: { max: 400, min: 0 },
  minUserVote: 0,
};

const tvFilterSlice = createSlice({
  name: SliceName.tvFilter,
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setGenres: (state, action: PayloadAction<number[] | undefined>) => {
      const genres = action.payload?.join("|");
      state.genres = genres;
    },
    setStartDate: (state, action: PayloadAction<Date | null>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date | null>) => {
      state.endDate = action.payload;
    },
    setAverageVote: (
      state,
      action: PayloadAction<{ max: number; min: number }>
    ) => {
      state.avarageVote = action.payload;
    },
    setRuntime: (
      state,
      action: PayloadAction<{ max: number; min: number }>
    ) => {
      state.runtime = action.payload;
    },
    setMinUserVote: (state, action: PayloadAction<number>) => {
      state.minUserVote = action.payload;
    },
  },
});

export default tvFilterSlice.reducer;
export const {
  setSort,
  setLanguage,
  setGenres,
  setEndDate,
  setStartDate,
  setMinUserVote,
  setRuntime,
  setAverageVote,
} = tvFilterSlice.actions;
