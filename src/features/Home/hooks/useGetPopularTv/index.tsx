import { useAppDispatch } from "@/store";
import { PopularTVResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularTv } from "../../slices/popularTVSlice";
import { QueryKey } from "@/enums";

const useGetPopularTv = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<PopularTVResponse>({
    queryKey: [QueryKey.POPULAR_TV],
    queryFn: async () => dispatch(fetchPopularTv()).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetPopularTv;
