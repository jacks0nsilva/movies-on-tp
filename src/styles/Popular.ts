import { styled } from 'styled-components';
import img from '../img/star.svg';

export const Container = styled.section`
    padding: 4rem 6rem;
    background: #2b2b31;

    @media (max-width: 600px) {
        padding: 1rem;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: 1fr;
    justify-content: center;
    li {
        margin: 1rem 1.7rem 1rem 0;
    }

    .image {
        max-width: 100%;
        height: auto;
    }

    .image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        display: block;
    }

    .details {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-top: 0.3rem;
    }

    .genres {
        color: ${(props) => props.theme.colors.lightgray};
        font-size: 1rem;
    }

    .vote {
        color: ${(props) => props.theme.colors.lightgray};
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
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
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

        li {
            margin: 0.8rem 1rem 0.8rem 0;
        }

        .title {
            font-size: 0.9rem;
        }

        .genres,
        .vote {
            font-size: 0.8rem;
        }
    }
`;
