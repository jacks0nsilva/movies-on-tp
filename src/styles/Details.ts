import { styled } from 'styled-components';
import img from '../img/star.svg';

export const Container = styled.section`
    padding: 4rem 6rem;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;

    h1 {
        color: ${(props) => props.theme.colors.white};
        padding: 1rem 0;
    }

    @media (max-width: 600px) {
        padding: 4rem 2rem;

        h1 {
            padding: 1.5rem;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        176deg,
        rgba(0, 0, 0, 0.89) 0%,
        rgba(11, 11, 11, 0.2777485994397759) 100%
    );

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    max-width: 300px;
    margin-bottom: -5px;
    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 600px) {
        align-self: center;
        margin-bottom: 0;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;

    span {
        color: rgba(255, 255, 255, 0.863);
        font-size: 1rem;
        margin-bottom: 0.2rem;
        text-align: justify;
    }

    .vote {
        color: ${(props) => props.theme.colors.white} !important;
        padding-top: 0.3rem;
        position: relative;
        margin-left: 20px;
    }

    .vote::before {
        content: url(${img});
        margin-right: 10px;
        position: absolute;
        left: -21px;
    }

    .sinopse {
        color: ${(props) => props.theme.colors.white} !important;
        margin-top: 1.5rem;
        word-break: break-word;
        overflow: hidden;
        font-size: 1.2rem !important;
        text-shadow: 1px 1px 1px #2b2b31;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        span {
            padding: 0.1rem 1.5rem;
            font-size: 0.9rem;
        }
        .vote::before {
            left: 4px;
        }

        .sinopse {
            font-size: 1rem !important;
        }
    }
`;
