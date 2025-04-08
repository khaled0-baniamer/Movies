import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesProvider } from "../../slice/movieProviderSlice";

const useGetMovieProvider = (region:string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.MOVIES_PROVIDER , region],
    queryFn: () => dispatch(fetchMoviesProvider({watch_region:region})).unwrap(),
  });

  return {
    data,
    isLoading,
  };
};

export default useGetMovieProvider;
