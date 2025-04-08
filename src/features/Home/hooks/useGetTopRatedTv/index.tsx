import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { TopRatedTVResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedTv } from "../../slices/topRatedTVSlice";

const useGetTopRatedTv = () => {
    const dispatch = useAppDispatch();

    const { data, isLoading, isError } = useQuery<TopRatedTVResponse>({
      queryKey: [QueryKey.TOP_RATED_TV],
      queryFn: async () => dispatch(fetchTopRatedTv()).unwrap(),
    });
  
    return {
      data,
      isLoading,
      isError,
    };

};

export default useGetTopRatedTv;
