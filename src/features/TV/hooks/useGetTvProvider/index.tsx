import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { fetchTVProvider } from "../../slices/tvProviderSlice";

const useGetTvProvider = (region?: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.TV_PROVIDER, region],
    queryFn: () => dispatch(fetchTVProvider({ region })).unwrap(),
  });

  return {
    data,
    isLoading,
  };
};

export default useGetTvProvider;
