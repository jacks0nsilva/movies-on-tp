export interface MoviesUpComing {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    poster_path: string;
}

export interface MoviesGenresList {
    id: number;
    name: string;
}

export interface Options {
    method: string;
    headers: {
        accept: string;
        Authorization: string;
    };
}

export interface MoviesPopular {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    poster_path: string;
}

export interface TvPopular {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_coun: number;
}

export interface TvGenresList {
    id: number;
    name: string;
}

export interface MoviesSearch {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    poster_path: string;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    genres: {
        id: number;
        name: string;
    }[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    runtime: number;
    status: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

export interface TvDetail {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genres: {
        id: number;
        name: string;
    }[];
    id: number;
    last_air_date: string;
    name: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface Video {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: string;
    id: string;
    published_at: string;
}
