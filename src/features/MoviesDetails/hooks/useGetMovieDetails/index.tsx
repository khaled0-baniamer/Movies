import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { MovieDetails } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../../slices/movieDetailsSlice";

const useGetMovieDetails = (id: number) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<MovieDetails>({
    queryKey: [QueryKey.MOVEI_DETAILS],
    queryFn: async () => dispatch(fetchMovieDetails({ id })).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetMovieDetails;
