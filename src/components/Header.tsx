import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Lupa } from '../img/lupa.svg';
import { Modal, Navigate } from '../styles/Navigate';

const Header = () => {
    const [modal, setModal] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value !== '') navigate(`search-movies?q=${value}`);
        setModal(false);
    };

    return (
        <Navigate>
            <Link to="/">
                <Logo className="logo" />
            </Link>
            {/*             <Heart /> */}
            <button onClick={() => setModal(!modal)} className="btn">
                <Lupa className="lupa" />
            </button>

            {modal && (
                <Modal className="animeBottom">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Busque por um filme"
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button>PROCURAR</button>
                    </form>
                </Modal>
            )}
        </Navigate>
    );
};

export default Header;
