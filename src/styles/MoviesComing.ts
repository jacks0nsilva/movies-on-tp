import styled from 'styled-components';
import img from '../img/star.svg';

export const Container = styled.section`
    padding: 4rem 6rem;
    background: ${(props) => props.theme.colors.black};

    .carousel {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.8rem;
    }

    .title h1 {
        color: ${(props) => props.theme.colors.white};
        text-transform: uppercase;
        font-size: 2rem;
    }

    .buttons {
        display: flex;
    }

    .buttons button {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.4rem;
        background-color: ${(props) => props.theme.colors.black};
        cursor: pointer;
        transition: 0.4s;
        margin: 0px 0px 0px 10px;
    }

    .buttons button:hover {
        border: 1px solid rgba(255, 255, 255, 0.404);
    }

    .buttons button:hover * {
        stroke: #fff;
    }

    .carousel::-webkit-scrollbar {
        display: none;
    }

    .item {
        width: 280px;
        flex: none;
        margin: 0 1.4rem 0 0;
    }

    .info {
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
    }

    .info span {
        text-align: start;
    }

    .spanTitle {
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .spanGenres {
        color: ${(props) => props.theme.colors.lightgray};
        font-size: 1rem;
    }

    .vote {
        color: ${(props) => props.theme.colors.lightgray};
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

    @media (max-width: 600px) {
        padding: 1rem;

        .item {
            width: 160px;
        }

        .info {
            margin-top: 0;
        }

        .title h1 {
            font-size: 1rem;
        }

        .spanTitle {
            margin-top: 0.5rem;
            font-size: 0.9rem;
        }

        .spanGenres,
        .vote {
            font-size: 0.8rem;
        }

        .vote {
            margin-bottom: 2rem;
        }
    }
`;

export const ImageContainer = styled.div`
    max-width: 100%;
    height: auto;

    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:nth-child(odd) {
        padding: 0rem;
    }

    @media (max-width: 600px) {
        height: auto;
    }
`;
