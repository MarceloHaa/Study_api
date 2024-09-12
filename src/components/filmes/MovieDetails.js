import React from 'react';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
    return (
        <div className={styles.movieDetails}>
            {movie ? (
                <>
                    <h2 className={styles.title}>
                        {movie.Title} ({movie.Year})
                    </h2>
                    <div className={styles.content}>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className={styles.poster}
                        />
                        <div className={styles.info}>
                            <p>
                                <strong>Sinopse:</strong> {movie.Plot}
                            </p>
                            <p>
                                <strong>Elenco:</strong> {movie.Actors}
                            </p>
                            <p>
                                <strong>Avaliação:</strong> {movie.imdbRating}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Selecione um filme para ver os detalhes.</p>
            )}
        </div>
    );
};

export default MovieDetails;
