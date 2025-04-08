import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { fetchGenreTvList } from "@/store/slices/genreMovieSlice";
import { useQuery } from "@tanstack/react-query";

const useGetGenreTv = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.GENRE_TV],
    queryFn: () => dispatch(fetchGenreTvList()).unwrap(),
  });

  return {
    data,
    isLoading,
  };
};

export default useGetGenreTv;
