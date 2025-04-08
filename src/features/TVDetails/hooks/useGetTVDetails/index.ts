import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { TVDetails } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchTVDetails } from "../../slices/TVDetailsSlice";

const useGetTVDetails = (id: number) => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useQuery<TVDetails>({
    queryKey: [QueryKey.TV_DETAILS],
    queryFn: async () => dispatch(fetchTVDetails({ id })).unwrap(),
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetTVDetails;
