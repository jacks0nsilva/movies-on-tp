import React from 'react';
import { TV_POPULAR, TV_GENRES, image_path } from '../config/API';
import { TvPopular, TvGenresList } from '../interface/interface';
import useGenre from '../hooks/useGenre';
import { Link } from 'react-router-dom';
import { usePagination } from '../hooks/usePagination';
import { Container, List } from '../styles/Popular';
import Image from './Image';

const PopularTv = () => {
    const [series, setSeries] = React.useState<TvPopular[]>([]);
    const [genres, setGenres] = React.useState<TvGenresList[]>([]);
    const { filterGenre } = useGenre();
    const { currentItems, pageSelector } = usePagination(8, series);

    React.useEffect(() => {
        async function initTV() {
            const { url, options } = TV_POPULAR();
            const response = await fetch(url, options);
            const json = await response.json();
            setSeries(json.results);
        }
        initTV();
        async function initGenres() {
            const { url, options } = TV_GENRES();
            const response = await fetch(url, options);
            const json = await response.json();
            setGenres(json.genres);
        }
        initGenres();
    }, []);

    if (series.length > 0 && genres.length > 0) {
        return (
            <Container>
                {pageSelector()}
                <List>
                    {currentItems.map((serie) => {
                        return (
                            <li key={serie.id}>
                                <div className="image">
                                    <Link to={`/tv-details/${serie.id}`}>
                                        <Image
                                            src={image_path + serie.poster_path}
                                            alt={serie.name}
                                        />
                                    </Link>
                                </div>
                                <div className="details">
                                    <span className="title">{serie.name}</span>
                                    <span className="genres">
                                        {filterGenre(serie.genre_ids, genres)}
                                    </span>
                                    <span className="vote">
                                        {serie.vote_average}
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

export default PopularTv;
