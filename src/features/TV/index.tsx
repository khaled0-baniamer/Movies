import React, { useEffect } from "react";
import { TVCard, TVSearchBar } from "./Components";
import { useGetTVList } from "./hooks";
import { Spinner } from "@phosphor-icons/react";
import { useAppSelector } from "@/store";

type Props = {};

const TVListScreen: React.FC<Props> = () => {
  useEffect(() => {
    document.title = "TVs Search";
  }, []);

  const {
    sort,
    language,
    genres,
    avarageVote,
    endDate,
    minUserVote,
    runtime,
    startDate,
  } = useAppSelector((state) => state.tvFilter);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetTVList({
      sort_by: sort,
      with_original_language: language,
      with_genres: genres,
      "release_date.gte": startDate as Date,
      "release_date.lte": endDate as Date,
      "vote_average.gte": avarageVote.min,
      "vote_average.lte": avarageVote.max,
      "with_runtime.gte": runtime?.min,
      "with_runtime.lte": runtime?.max,
      "vote_count.gte": minUserVote,
    });

  // Combine pages of results
  const items = data?.pages.flatMap((page) => page.results) || [];

  // Infinite scroll handler
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 sm:gap-2">
        <div className="row-span-3">
          <TVSearchBar />
        </div>
        {isLoading ? (
          <div
            className="flex justify-center w-full col-span-4 row-span-3 items-center"
            aria-label="Loading..."
            role="status"
          >
            <Spinner className="animate-spin stroke-gray-500 h-10 w-10" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 col-span-1  lg:col-span-4 md:col-span-3">
            {items.map((item) => (
              <TVCard data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      {isFetchingNextPage && (
        <div
          className="flex justify-center my-10"
          aria-label="Loading..."
          role="status"
        >
          <Spinner className="animate-spin stroke-gray-500 h-10 w-10" />
        </div>
      )}
    </div>
  );
};

export default TVListScreen;
