import { configureStore } from "@reduxjs/toolkit";
import { popularMoiveSlice, topRatedMovieSlice } from "@/features/Home/slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieFilterSlice, moviesListSlice } from "@/features/Movies/slice";
import { tvFilterSlice } from "@/features/TV/slices";

const store = configureStore({
  reducer: {
    popularMovie: popularMoiveSlice,
    topRatedMovie: topRatedMovieSlice,
    movieList: moviesListSlice,
    movieFilter:movieFilterSlice,
    tvFilter:tvFilterSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
