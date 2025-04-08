import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { fetchLanguageList } from "@/store/slices/languageSlice";
import { useQuery } from "@tanstack/react-query";

const useGetLanguages = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.LANGUAGE],
    queryFn: () => dispatch(fetchLanguageList()).unwrap(),
  });
// test change branch
  return {
    data,
    isLoading,
  };
};

export default useGetLanguages;
