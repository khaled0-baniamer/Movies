import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { MainResponse, TV } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchSimilarTV } from "../../slices/TVSimilarSlice";

const useGetTVSimilar = (id: number) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<MainResponse<TV>>({
    queryKey: [QueryKey.SIMILAR_TV],
    queryFn: async () => dispatch(fetchSimilarTV({ id })).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetTVSimilar;
