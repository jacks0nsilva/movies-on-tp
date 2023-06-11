import { MoviesGenresList } from '../interface/interface';

const useGenre = () => {
    function filterGenre(genreID: number[], genres: MoviesGenresList[]) {
        const generosFiltrados = genres.filter((genero) =>
            genreID.slice(0, 2).includes(genero.id)
        );
        const nomesGeneros = generosFiltrados.map((genero) => genero.name);
        const genre = nomesGeneros.join(', ');
        return genre;
    }
    return {
        filterGenre,
    };
};

export default useGenre;
