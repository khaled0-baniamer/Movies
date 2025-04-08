import { Movie } from "../common";

export type TopRatedMovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

