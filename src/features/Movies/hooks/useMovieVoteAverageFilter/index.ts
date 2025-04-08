import { useAppDispatch, useAppSelector } from "@/store";
import { setAverageVote } from "../../slice/movieFilterSlice";

const useMovieVoteAverageFilter = () => {
  const dispatch = useAppDispatch();
  const { avarageVote } = useAppSelector((state) => state.movieFilter);
  const { max, min } = avarageVote;

  const handleChangeAverageVote = (data: number[]) => {
    const min = data[0];
    const max = data[1];
    dispatch(setAverageVote({ min, max }));
  };

  return {
    max,
    min,
    handleChangeAverageVote,
  };
};

export default useMovieVoteAverageFilter;
