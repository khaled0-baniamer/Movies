import { useAppDispatch, useAppSelector } from "@/store";
import { setMinUserVote } from "../../slice/movieFilterSlice";

const useMovieMinUserVoteFilter = () => {
  const dispatch = useAppDispatch();
  const { minUserVote } = useAppSelector((state) => state.movieFilter);

  const handleChangeMinUserVote = (data: number[]) => {
    const min = data[0];
    dispatch(setMinUserVote(min));
  };

  return {
    minUserVote,
    handleChangeMinUserVote,
  };
};

export default useMovieMinUserVoteFilter;
