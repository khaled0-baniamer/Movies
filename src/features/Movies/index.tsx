import { useGetMoviesList } from "./hooks";
import { MovieCard, MovieSearchBar } from "./Components";
import { useEffect } from "react";
import { Spinner } from "@phosphor-icons/react";
import { useAppSelector } from "@/store";
// import { useSearchParams } from "react-router-dom";

const MoviesListScreen: React.FC = () => {
  useEffect(() => {
    document.title = "Movies Search";
  }, []);

  // const [searchParams] = useSearchParams();
  // const keywords = searchParams.get("search");

  const {
    sort,
    language,
    genres,
    avarageVote,
    endDate,
    minUserVote,
    runtime,
    startDate,
    keywords,
  } = useAppSelector((state) => state.movieFilter);

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetMoviesList({
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
    keywords,
  });

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

  if (isError) {
    return <div>Error loading movies.</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 sm:gap-2">
        <div className="row-span-3">
          <MovieSearchBar />
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
            {data?.pages
              .flatMap((e) => e.results)
              .map((movie) => (
                <MovieCard data={movie} key={movie.id} />
              ))}
          </div>
        )}
      </div>

      {isFetchingNextPage && (
        <div
          className="flex justify-center"
          aria-label="Loading..."
          role="status"
        >
          <Spinner className="animate-spin stroke-gray-500 h-10 w-10" />
        </div>
      )}
    </div>
  );
};

export default MoviesListScreen;
