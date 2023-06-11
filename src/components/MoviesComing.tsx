import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ImageContainer } from '../styles/MoviesComing';
import {
    MOVIES_UP_COMING,
    image_path,
    MOVIES_GENRES_LIST,
} from '../config/API';
import { MoviesUpComing, MoviesGenresList } from '../interface/interface';
import useGenre from '../hooks/useGenre';
import { ReactComponent as LeftArrow } from '../img/arrow-left.svg';
import { ReactComponent as RightArrow } from '../img/arrow-right.svg';
import Image from './Image';

const MoviesComing = () => {
    const [movies, setMovies] = React.useState<MoviesUpComing[]>([]);
    const [genres, setGenres] = React.useState<MoviesGenresList[]>([]);
    const carousel = React.useRef<HTMLDivElement>(null);
    const { filterGenre } = useGenre();

    const handleLeft = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    };

    const handleRight = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    };

    React.useEffect(() => {
        async function initMovies() {
            const { url, options } = MOVIES_UP_COMING();
            const response = await fetch(url, options);
            const json = await response.json();
            setMovies(json.results);
        }

        async function initGenres() {
            const { url, options } = MOVIES_GENRES_LIST();
            const response = await fetch(url, options);
            const json = await response.json();
            setGenres(json.genres);
        }
        initGenres();
        initMovies();
    }, []);
    if (movies.length > 0 && genres.length > 0) {
        return (
            <Container>
                <div className="title">
                    <h1>
                        <strong>Em breve</strong> nos cinemas
                    </h1>
                    <div className="buttons">
                        <button onClick={handleLeft}>
                            <LeftArrow />
                        </button>
                        <button onClick={handleRight}>
                            <RightArrow />
                        </button>
                    </div>
                </div>
                <div className="carousel" ref={carousel}>
                    {movies.map((movie) => {
                        return (
                            <div className="item" key={movie.id}>
                                <ImageContainer className="image">
                                    <Link to={`/movies-details/${movie.id}`}>
                                        <Image
                                            src={image_path + movie.poster_path}
                                            alt={movie.title}
                                        />
                                    </Link>
                                </ImageContainer>
                                <div className="info">
                                    <span className="spanTitle">
                                        {movie.title}
                                    </span>
                                    <span className="spanGenres">
                                        {filterGenre(movie.genre_ids, genres)}
                                    </span>
                                    <span className="vote">
                                        {movie.vote_average}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        );
    } else {
        return null;
    }
};

export default MoviesComing;
