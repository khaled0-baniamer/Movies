import { useAppDispatch, useAppSelector } from "@/store";
import { DateValueType } from "react-tailwindcss-datepicker";
import { setEndDate, setStartDate } from "../../slice/movieFilterSlice";

const useReleaseMovieDateFilter = () => {
  const dispatch = useAppDispatch();
  const { endDate, startDate } = useAppSelector((state) => state.movieFilter);

  const handleChangeDate = (type: "START" | "END", date: DateValueType) => {
    if (type == "START") {
      const startDate = date?.startDate ?? null;
      dispatch(setStartDate(startDate));
      return;
    }

    if (type == "END") {
      const endDate = date?.endDate ?? null;
      dispatch(setEndDate(endDate));
      return;
    }
  };

  return {
    endDate,
    startDate,
    handleChangeDate,
  };
};

export default useReleaseMovieDateFilter;
