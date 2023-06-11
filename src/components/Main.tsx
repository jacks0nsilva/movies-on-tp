import MoviesComing from './MoviesComing';
import NavBar from './NavBar';
import HeadTitle from './HeadTitle';

const Main = () => {
    return (
        <main>
            <MoviesComing />
            <NavBar />
            <HeadTitle
                title="Movies On | Inicio"
                description="Página com filmes e séries da atualidade"
            />
        </main>
    );
};

export default Main;
