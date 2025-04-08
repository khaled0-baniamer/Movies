import { useAppDispatch } from "@/store";
import { MainResponse, Movie } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchSimilarMovie } from "../../slices/movieSimilarSlice";
import { QueryKey } from "@/enums";

const useGetMovieSimilar = (id: number) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<MainResponse<Movie>>({
    queryKey: [QueryKey.SIMILAR_MOVIES],
    queryFn: async () => dispatch(fetchSimilarMovie({ id })).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetMovieSimilar;
