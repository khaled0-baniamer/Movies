import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { fetchCountryList } from "@/store/slices/countrySlice";
import { useQuery } from "@tanstack/react-query";

const useGetCountries = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.COUNTRY],
    queryFn: () => dispatch(fetchCountryList()).unwrap(),
  });

  return {
    data,
    isLoading,
  };
};

export default useGetCountries;
