export type PopularTVResponse = {
    page:          number;
    results:       PopularTV[];
    total_pages:   number;
    total_results: number;
}

export type PopularTV = {
    backdrop_path:     null | string;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
}
