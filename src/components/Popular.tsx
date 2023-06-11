import React from 'react';
import PopularMovies from './PopularMovies';
import PopularTv from './PopularTv';

interface Params {
    params: string;
    setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popular: React.FC<Params> = ({ params }) => {
    if (params === 'movie') {
        return <PopularMovies />;
    } else if (params === 'tv') {
        return <PopularTv />;
    } else {
        return null;
    }
};

export default Popular;
