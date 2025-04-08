import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { MovieCredits } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieCredits } from "../../slices/movieCrediteSlice";

const useGetCredits = (id: number) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<MovieCredits>({
    queryKey: [QueryKey.MOVEI_CREDITS, id],
    queryFn: async () => dispatch(fetchMovieCredits({ id })).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetCredits;
