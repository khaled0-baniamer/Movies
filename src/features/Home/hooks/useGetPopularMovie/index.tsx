import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { PopularMovieResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../../slices/popularMoiveSlice";

const useGetPopularMovie = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<PopularMovieResponse>({
    queryKey: [QueryKey.POPULAR_MOVIE],
    queryFn: async () => dispatch(fetchPopularMovies()).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetPopularMovie;
