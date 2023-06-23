import styled from 'styled-components';

export const Navigate = styled.nav`
    background: ${(props) => props.theme.colors.black};
    height: 5rem;
    box-shadow: -2px 3px 20px 0px #12121266;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    .logo {
        width: 180px;
        height: 100%;
        cursor: pointer;
    }

    .btn {
        display: block;
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    .lupa {
        max-width: 30px;
        max-height: 30px;
    }

    @media (max-width: 600px) {
        .logo {
            width: 140px;
        }
    }
`;

export const Modal = styled.div`
    position: absolute;
    width: 100%;
    height: 3.5rem;
    top: 72px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 2;
    box-shadow: -2px 3px 20px 0px #12121266;

    .formulario {
        display: flex;
        justify-content: space-around;
        height: 100%;
        align-items: center;
        background: ${(props) => props.theme.colors.black};
    }

    .formulario input[type='text'] {
        background: #28282d;
        color: ${(props) => props.theme.colors.lightgray};
        font-size: 1rem;
        width: 60%;
        height: 100%;
        border: none;
        padding: 0 1rem;
    }

    .formulario input[type='text']:focus {
        outline: 1px #6f6f7e solid;
    }

    .formulario input[type='text']::placeholder {
        color: ${(props) => props.theme.colors.lightgray};
    }

    .formulario button {
        cursor: pointer;
        border: none;
        border-radius: 0.3rem;
        padding: 0.7rem 0.5rem;
        background: ${(props) => props.theme.colors.purple};
        font-weight: bold;
        color: #28282d;
        transition: 0.4s;
    }

    .formulario button:hover {
        box-shadow: 0px 0px 8px 0 #695eb1;
        background: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.purple};
    }
`;
