import { Language } from "../common";

export type TopRatedTVResponse = {
  page: number;
  results: TopRatedTV[];
  total_pages: number;
  total_results: number;
};

export type TopRatedTV = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: OriginCountry[];
  original_language: Language;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
};

export enum OriginCountry {
  CA = "CA",
  Jp = "JP",
  Kr = "KR",
  Us = "US",
}

