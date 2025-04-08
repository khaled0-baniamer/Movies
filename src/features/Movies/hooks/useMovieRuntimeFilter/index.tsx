import { useAppDispatch, useAppSelector } from "@/store";
import { setRuntime } from "../../slice/movieFilterSlice";

const useMovieRuntimeFilter = () => {
  const dispatch = useAppDispatch();
  const { runtime } = useAppSelector((state) => state.movieFilter);
  const { max, min } = runtime;

  const handleChangeRuntime = (data: number[]) => {
    const min = data[0];
    const max = data[1];
    dispatch(setRuntime({ min, max }));
  };

  return {
    maxRuntime: max,
    minRuntime: min,
    handleChangeRuntime,
  };
};

export default useMovieRuntimeFilter;
