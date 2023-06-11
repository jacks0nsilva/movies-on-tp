import React from 'react';
import Popular from './Popular';
import { ButtonsContainer, Nav } from '../styles/NavBar';

const NavBar = () => {
    const [params, setParams] = React.useState<string>('movie');

    return (
        <>
            <Nav>
                <h1>Filmes e Séries populares</h1>
                <ButtonsContainer>
                    <button onClick={() => setParams('movie')}>Filmes</button>
                    <button onClick={() => setParams('tv')}>Séries</button>
                </ButtonsContainer>
            </Nav>
            <Popular params={params} />
        </>
    );
};

export default NavBar;
