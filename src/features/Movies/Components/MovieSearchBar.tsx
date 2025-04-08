import React from "react";
import SortCard from "./SortCard";
import WhereWatchCard from "./WhereWatchCard";
import FilterCard from "./FilterCard";

type Props = {};

const MovieSearchBar: React.FC<Props> = () => {
  return (
    <div className="w-full shadow-md rounded-lg">
      <SortCard />

      <WhereWatchCard />

      <FilterCard />
    </div>
  );
};

export default MovieSearchBar;
