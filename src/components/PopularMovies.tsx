import React from 'react';
import { MOVIES_POPULAR, image_path, MOVIES_GENRES_LIST } from '../config/API';
import { MoviesPopular, MoviesGenresList } from '../interface/interface';
import { Link } from 'react-router-dom';
import useGenre from '../hooks/useGenre';
import { usePagination } from '../hooks/usePagination';
import { Container, List } from '../styles/Popular';
import Image from './Image';

const PopularMovies = () => {
    const [movies, setMovies] = React.useState<MoviesPopular[]>([]);
    const [genres, setGenres] = React.useState<MoviesGenresList[]>([]);
    const { pageSelector, currentItems } = usePagination(8, movies);
    const { filterGenre } = useGenre();

    React.useEffect(() => {
        async function initMovies() {
            const { url, options } = MOVIES_POPULAR();
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
    }, []);

    if (genres.length > 0 && movies.length > 0) {
        return (
            <Container>
                {pageSelector()}
                <List>
                    {currentItems.map((movie) => {
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
                                        {movie.vote_average}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </List>
            </Container>
        );
    } else {
        return null;
    }
};

export default PopularMovies;
