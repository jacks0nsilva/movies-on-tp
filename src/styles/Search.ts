import { styled } from 'styled-components';
import img from '../img/star.svg';

export const Container = styled.section`
    padding: 4rem 6rem;
    background: #2b2b31;
    min-height: 100vh;

    h1 {
        color: #fff;
        font-size: 2.3rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 600px) {
        padding: 4rem 2rem;
        h1 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .image {
        max-width: 300px;
        height: 70%;
    }

    .image img {
        max-width: 100%;
        height: 100%;
    }

    .details {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 1.1rem;
        color: #fff;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-top: 0.3rem;
    }

    .genres {
        color: #bebdbd;
        font-size: 1rem;
    }

    .vote {
        color: #bebdbd;
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
        grid-template-columns: repeat(2, 150px);

        li {
            padding: 0.6rem 0;
        }
    }
`;
