import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
    from{
        background-position: 0px;
    }
    to{
        background-position: -200%;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    .img {
        display: block;
        grid-area: 1/1;
        opacity: 0;
        transition: 0.2s;
        object-fit: cover;
    }
`;

export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        90deg,
        #4c4c56 0px,
        #2b2b31 50%,
        #4c4c56 100%
    );
    background-color: #eee;
    background-size: 200%;
    animation: ${skeleton} 1.5s infinite linear;
`;
