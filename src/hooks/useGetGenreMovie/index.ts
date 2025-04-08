import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { fetchGenreMovieList } from "@/store/slices/genreTvSlice";
import { useQuery } from "@tanstack/react-query";


const useGetGenreMovie = ()=>{
    const dispatch = useAppDispatch();
    const { data, isLoading } = useQuery({
      queryKey: [QueryKey.GENRE_MOVIE],
      queryFn: () => dispatch(fetchGenreMovieList()).unwrap(),
    });
  
    return {
      data,
      isLoading,
    };
}

export default useGetGenreMovie