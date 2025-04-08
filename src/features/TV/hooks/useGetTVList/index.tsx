import { QueryKey } from "@/enums";
import { useAppDispatch } from "@/store";
import { MainResponse, TV } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchTVList } from "../../slices/tvListSlice";

type UseGetTVListParams = {
  sort_by?: string;
  with_original_language?: string;
  with_genres?: string;
  "release_date.gte"?: Date;
  "release_date.lte"?: Date;
  "vote_average.gte"?: number;
  "vote_average.lte"?: number;
  "with_runtime.gte"?: number;
  "with_runtime.lte"?: number;
  "vote_count.gte"?: number;
};

const useGetTVList = ({
  sort_by,
  with_original_language,
  with_genres,
  "release_date.gte": releaseDateGte,
  "release_date.lte": releaseDateLte,
  "vote_average.gte": voteAverageGte,
  "vote_average.lte": voteAverageLte,
  "with_runtime.gte": withRuntimeGte,
  "with_runtime.lte": withRuntimeLte,
  "vote_count.gte": voteCountGte,
}: UseGetTVListParams) => {
  const dispatch = useAppDispatch();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<MainResponse<TV>>({
    queryKey: [
      QueryKey.MOVIES_LIST,
      {
        sort_by,
        with_original_language,
        with_genres,
        "release_date.gte": releaseDateGte,
        "release_date.lte": releaseDateLte,
        "vote_average.gte": voteAverageGte,
        "vote_average.lte": voteAverageLte,
        "with_runtime.gte": withRuntimeGte,
        "with_runtime.lte": withRuntimeLte,
        "vote_count.gte": voteCountGte,
      },
    ],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) =>
      dispatch(
        fetchTVList({
          page: pageParam as number,
          sort_by,
          with_original_language,
          with_genres,
          "release_date.gte": releaseDateGte,
          "release_date.lte": releaseDateLte,
          "vote_average.gte": voteAverageGte,
          "vote_average.lte": voteAverageLte,
          "with_runtime.gte": withRuntimeGte,
          "with_runtime.lte": withRuntimeLte,
          "vote_count.gte": voteCountGte,
        })
      ).unwrap(),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  return {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useGetTVList;
