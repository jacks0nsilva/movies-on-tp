import React, { SyntheticEvent } from 'react';
import { Wrapper, Skeleton } from '../styles/ImageSkeleton';

interface Props {
    src: string;
    alt: string;
}

const Image: React.FC<Props> = ({ src, alt }) => {
    const [skeleton, setSkeleton] = React.useState<boolean>(true);

    function handleLoad(event: SyntheticEvent<HTMLImageElement>): void {
        event.currentTarget.style.opacity = '1';
        setSkeleton(false);
    }

    return (
        <Wrapper>
            {skeleton && <Skeleton></Skeleton>}
            <img src={src} alt={alt} className="img" onLoad={handleLoad} />
        </Wrapper>
    );
};

export default Image;
