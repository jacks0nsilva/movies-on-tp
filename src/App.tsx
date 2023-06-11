import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import SearchMovies from './components/SearchMovies';
import MoviesDetails from './components/MoviesDetails';
import TvDetails from './components/TvDetails';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/search-movies/" element={<SearchMovies />} />
                    <Route
                        path="/movies-details/:id"
                        element={<MoviesDetails />}
                    />
                    <Route path="tv-details/:id" element={<TvDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
