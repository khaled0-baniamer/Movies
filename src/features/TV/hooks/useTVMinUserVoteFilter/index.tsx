import { useAppDispatch, useAppSelector } from "@/store";
import { setMinUserVote } from "../../slices/tvFilterSlice";

const useTVMinUserVoteFilter = () => {
  const dispatch = useAppDispatch();
  const { minUserVote } = useAppSelector((state) => state.tvFilter);

  const handleChangeMinUserVote = (data: number[]) => {
    const min = data[0];
    dispatch(setMinUserVote(min));
  };

  return {
    minUserVote,
    handleChangeMinUserVote,
  };
};

export default useTVMinUserVoteFilter;