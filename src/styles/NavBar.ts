import { styled } from 'styled-components';

export const Nav = styled.nav`
    background: #2b2b31;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    justify-content: center;
    box-shadow: -2px 3px 20px 0px #12121266;
    padding: 0rem 6rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        display: block;
        background-image: linear-gradient(90deg, #695eb1 0%, #6b57eb 100%);
        box-shadow: 0 0 20px 0px #553bff7a;
    }

    h1 {
        color: ${(props) => props.theme.colors.white};
        margin: 0.8rem 0rem;
        font-size: 2rem;
        text-align: center;
    }

    @media (max-width: 600px) {
        padding: 0 1rem;

        h1 {
            font-size: 1rem;
            word-break: break-all;
            word-spacing: unset;
        }
    }
`;

export const ButtonsContainer = styled.div`
    button {
        border: none;
        background: #2b2b31;
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        padding: 0.6rem 0.8rem;
        cursor: pointer;
        margin: 0.8rem 0.8rem 0.8rem 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.4rem;
    }

    button:hover {
        color: ${(props) => props.theme.colors.white};
        border: 1px solid rgba(255, 255, 255, 0.404);
    }
`;
