import React from 'react';
import { useParams } from 'react-router-dom';
import {
    MOVIE_DETAILS,
    image_path,
    background_path,
    MOVIE_VIDEO,
} from '../config/API';
import { MovieDetails, Video } from '../interface/interface';
import { Container, Info, Details, ImageContainer } from '../styles/Details';
import Iframe from './Iframe';
import HeadTitle from './HeadTitle';

const MoviesDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = React.useState<MovieDetails>();
    const [video, setVideo] = React.useState<Video[]>([]);

    React.useEffect(() => {
        async function initMovies() {
            const { url, options } = MOVIE_DETAILS(id);
            const response = await fetch(url, options);
            const json = await response.json();
            setMovie(json);
            initTrailer();
        }
        initMovies();
        async function initTrailer() {
            const { url, options } = MOVIE_VIDEO(movie?.id);
            const response = await fetch(url, options);
            const json = await response.json();
            setVideo(json.results);
        }
    }, [id, movie?.id]);

    if (movie && video) {
        return (
            <Container
                style={{
                    background: `url(${background_path + movie.backdrop_path})`,
                    backgroundColor: '#2b2b31',
                }}
            >
                <Info>
                    <ImageContainer className="image">
                        <img
                            src={image_path + movie.poster_path}
                            alt={movie.title}
                        />
                    </ImageContainer>
                    <Details>
                        <h1>{movie.title}</h1>
                        <span className="vote">
                            {movie.vote_average.toFixed(1)}
                        </span>
                        <span>
                            {movie.genres.map((genre) => genre.name).join(', ')}
                        </span>
                        <span>
                            {`Data de lançamento: ${movie.release_date
                                .split('-')
                                .reverse()
                                .join('/')}`}
                        </span>
                        <span>Duração: {movie.runtime} mins</span>
                        <span className="sinopse">{movie.overview}</span>
                    </Details>
                </Info>
                <Iframe ID={video} />
                <HeadTitle
                    title={`Movies On | ${movie.title}`}
                    description={`Exibindo detalhes de: ${movie.title}`}
                />
            </Container>
        );
    } else {
        return null;
    }
};

export default MoviesDetails;
