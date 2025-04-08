export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MainResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type TV = {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
};
export type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type Country = {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
};

