import React, { useState } from 'react';
import MovieItem from './MovieItem';
import MovieDetails from './MovieDetails';
import { getMovieDetails } from '../../api/moviesApi';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = async (movieId) => {
        const details = await getMovieDetails(movieId);
        setSelectedMovie(details);
    };

    return (
        <div className={styles.movieListContainer}>
            {movies && movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.imdbID} className={styles.movieWrapper}>
                        <MovieItem
                            movie={movie}
                            onClick={handleMovieClick}
                            isSelected={
                                selectedMovie &&
                                selectedMovie.imdbID === movie.imdbID
                            }
                        />
                        {selectedMovie &&
                            selectedMovie.imdbID === movie.imdbID && (
                                <div className={styles.movieDetails}>
                                    <MovieDetails movie={selectedMovie} />
                                </div>
                            )}
                    </div>
                ))
            ) : (
                <p>Nenhum filme encontrado.</p>
            )}
        </div>
    );
};

export default MovieList;
