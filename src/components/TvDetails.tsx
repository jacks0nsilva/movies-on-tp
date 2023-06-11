import React from 'react';
import {
    TV_DETAILS,
    TV_VIDEO,
    background_path,
    image_path,
} from '../config/API';
import { Container, Info, Details, ImageContainer } from '../styles/Details';
import { TvDetail, Video } from '../interface/interface';
import { useParams } from 'react-router-dom';
import Iframe from './Iframe';
import HeadTitle from './HeadTitle';

const TvDetails = () => {
    const { id } = useParams();
    const [serie, setSerie] = React.useState<TvDetail>();
    const [video, setVideo] = React.useState<Video[]>([]);

    React.useEffect(() => {
        async function initTv() {
            const { url, options } = TV_DETAILS(id);
            const response = await fetch(url, options);
            const json = await response.json();
            setSerie(json);
            initTrailer();
        }
        initTv();
        async function initTrailer() {
            const { url, options } = TV_VIDEO(serie?.id);
            const response = await fetch(url, options);
            const json = await response.json();
            setVideo(json.results);
        }
    }, [id, serie?.id]);

    if (serie && video) {
        return (
            <Container
                style={{
                    background: `url(${background_path + serie.backdrop_path})`,
                    backgroundColor: '#2b2b31',
                }}
            >
                <Info>
                    <ImageContainer>
                        <img
                            src={image_path + serie.poster_path}
                            alt={serie.name}
                        />
                    </ImageContainer>
                    <Details>
                        <h1>{serie.name}</h1>
                        <span className="vote">
                            {serie.vote_average.toFixed(1)}
                        </span>
                        <span>
                            {serie.genres.map((genre) => genre.name).join(', ')}
                        </span>
                        <span>
                            {`Data de lançamento: ${serie.first_air_date
                                .split('-')
                                .reverse()
                                .join('/')}`}
                        </span>
                        <span className="sinopse">{serie.overview}</span>
                    </Details>
                </Info>
                <Iframe ID={video} />
                <HeadTitle
                    title={`Movies On | ${serie.name}`}
                    description={`Exibindo detalhes de: ${serie.name}`}
                />
            </Container>
        );
    } else {
        return null;
    }
};

export default TvDetails;
