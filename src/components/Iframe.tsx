import React from 'react';
import { Video } from '../interface/interface';

interface Props {
    ID: Video[];
}

const Iframe: React.FC<Props> = ({ ID }) => {
    return (
        <div className="embedResponsive">
            <iframe
                src={`https://www.youtube.com/embed/${
                    ID.length > 0 ? ID[0].key : ''
                }`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default Iframe;
