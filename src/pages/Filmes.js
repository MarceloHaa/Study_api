import React, { useState } from 'react';
import { searchMovies, getMovieDetails } from '../api/moviesApi';
import MovieList from '../components/filmes/MovieList';
import MovieDetails from '../components/filmes/MovieDetails';
import styles from './Filmes.module.css';

function Filmes() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSearch = async () => {
        const results = await searchMovies(searchQuery);
        setMovies(results.Search || []);
        setSelectedMovie(null);
    };
    const handleMovieClick = async (movieId) => {
        const details = await getMovieDetails(movieId);
        setSelectedMovie(details);
    };

    return (
        <div className={styles['filmes-container']}>
            <h1>Buscar Filmes</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Digite o nome do filme"
            />
            <button onClick={handleSearch}>Buscar</button>
            <div className={styles['filmes-container']}>
                <MovieList movies={movies} onMovieClick={handleMovieClick} />
                {selectedMovie && <MovieDetails movie={selectedMovie} />}
            </div>
        </div>
    );
}

export default Filmes;
