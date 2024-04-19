const acessToken = import.meta.env.VITE_ACESS_TOKEN;

export const image_path = 'https://image.tmdb.org/t/p/w500';

export const background_path = 'https://image.tmdb.org/t/p/original/';

export function MOVIES_UP_COMING() {
    return {
        url: 'https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1',
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function MOVIES_GENRES_LIST() {
    return {
        url: 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR',
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function MOVIES_POPULAR() {
    return {
        url: 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function TV_POPULAR() {
    return {
        url: 'https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1',
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function TV_GENRES() {
    return {
        url: 'https://api.themoviedb.org/3/genre/tv/list?language=pt-BR',
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function MOVIE_SEARCH(value: string | null) {
    return {
        url: `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=pt-BR&page=1`,
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function MOVIE_DETAILS(id: string | undefined) {
    return {
        url: `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function MOVIE_VIDEO(id: number | undefined) {
    return {
        url: `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`,
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function TV_DETAILS(id: string | undefined) {
    return {
        url: `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`,
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}

export function TV_VIDEO(id: number | undefined) {
    return {
        url: `https://api.themoviedb.org/3/tv/${id}/videos?language=pt-BR`,
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + acessToken,
            },
        },
    };
}
