import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MoviesSearch, MoviesGenresList } from '../interface/interface';
import { image_path, MOVIE_SEARCH, MOVIES_GENRES_LIST } from '../config/API';
import { Container, List } from '../styles/Search';
import useGenre from '../hooks/useGenre';
import Image from './Image';
import HeadTitle from './HeadTitle';

const SearchMovies = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const { filterGenre } = useGenre();
    const [movies, setMovies] = React.useState<MoviesSearch[]>([]);
    const [genres, setGenres] = React.useState<MoviesGenresList[]>([]);

    React.useEffect(() => {
        async function initMovies() {
            const { url, options } = MOVIE_SEARCH(query);
            const response = await fetch(url, options);
            const json = await response.json();
            setMovies(json.results);
        }
        initMovies();
        async function initGenres() {
            const { url, options } = MOVIES_GENRES_LIST();
            const response = await fetch(url, options);
            const json = await response.json();
            setGenres(json.genres);
        }
        initGenres();
    }, [query]);

    return (
        <Container>
            <h1>Resultados de: {query}</h1>
            <List>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <div className="image">
                                <Link to={`/movies-details/${movie.id}`}>
                                    <Image
                                        src={image_path + movie.poster_path}
                                        alt={movie.title}
                                    />
                                </Link>
                            </div>
                            <div className="details">
                                <span className="title">{movie.title}</span>
                                <span className="genres">
                                    {filterGenre(movie.genre_ids, genres)}
                                </span>
                                <span className="vote">
                                    {movie.vote_average.toFixed(1)}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </List>
            <HeadTitle
                title={`Movies On | Search`}
                description={`Exibindo resultados de: ${query}`}
            />
        </Container>
    );
};

export default SearchMovies;
