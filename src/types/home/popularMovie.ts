import { Movie } from "../common";

export type PopularMovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
