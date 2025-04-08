import { QueryKey } from "@/enums";
import { TopRatedMovieResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedMovies } from "../../slices/topRatedMovieSlice";
import { useAppDispatch } from "@/store";

const useGetTopRatedMovie = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<TopRatedMovieResponse>({
    queryKey: [QueryKey.TOP_RATED_MOVIE],
    queryFn: async () => dispatch(fetchTopRatedMovies()).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetTopRatedMovie;
