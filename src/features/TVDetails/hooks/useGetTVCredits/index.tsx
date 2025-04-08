import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { MovieCredits } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchTVCredits } from "../../slices/TVCreditsSlice";

const useGetTVCredits = (id: number) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<MovieCredits>({
    queryKey: [QueryKey.TV_CREDITS, id],
    queryFn: async () => dispatch(fetchTVCredits({ id })).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetTVCredits;
