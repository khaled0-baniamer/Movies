import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "./hooks";
import { Skeleton } from "@/components";
import { Cast, HeroCard } from "./Components";
import SimilarMovies from "./Components/SimilarMovies";

type Props = {};

const MoviesDetails: React.FC<Props> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetMovieDetails(Number(id));
  useEffect(() => {
    document.title = data?.original_title ?? "Loading...";
  }, [data]);
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <div className="">{data && <HeroCard data={data} />}</div>
      <div className="md:mt-20">
        <p className="text-2xl font-bold">Cast</p>
        {<Cast id={Number(id)} />}
        {<SimilarMovies id={Number(id)} />}
      </div>
    </div>
  );
};

export default MoviesDetails;
