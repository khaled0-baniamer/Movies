export const ApiRoute = {
  TOP_RATED_MOVIE: "movie/top_rated?language=en-US&page=1",
  POPULAR_MOVIE: "movie/popular?language=en-US&page=1",

  TOP_RATED_TV: "tv/top_rated?language=en-US&page=1",
  POPULAR_TV: "tv/popular?language=en-US&page=1",

  MOVIES_LIST: "discover/movie",
  MOVIES_PROVIDER: "watch/providers/movie",
  
  TV_LIST: "discover/tv",
  TV_PROVIDER: "watch/providers/tv",

  MOVIES_DETAILS: "movie/",
  TV_DETAILS: "tv/",

  LANGUAGE: "configuration/languages",
  COUNTRY: "configuration/countries",
  GENRE_TV: "genre/tv/list",
  GENRE_MOVIE: "genre/movie/list",

  recommendationMovies: (movieId: string) => `movie/${movieId}/recommendations`,
  similarMovies: (movieId: number) => `movie/${movieId}/similar`,
  recommendationTV: (tvId: string) => `tv/${tvId}/recommendations`,
  similarTV: (tvId: number) => `tv/${tvId}/similar`,
};
