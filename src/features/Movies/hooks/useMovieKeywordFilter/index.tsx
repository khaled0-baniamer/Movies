import { useAppDispatch, useAppSelector } from "@/store";
import { setKeywords } from "../../slice/movieFilterSlice";

const useMovieKeywordFilter = () => {
  const dispatch = useAppDispatch();
  const { keywords } = useAppSelector((state) => state.movieFilter);

  const handleClickMoiveSearchKeyword = (data: string) => {
    dispatch(setKeywords(data));
  };

  return {
    keywords,
    handleClickMoiveSearchKeyword,
  };
};

export default useMovieKeywordFilter;
