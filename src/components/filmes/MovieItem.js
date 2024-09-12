import React from 'react';
import styles from './MovieItem.module.css';

const MovieItem = ({ movie, onClick, isSelected }) => {
    return (
        <div
            onClick={() => onClick(movie.imdbID)}
            className={`${styles.movieItem} ${
                isSelected ? styles.selected : ''
            }`}
        >
            <img
                src={movie.Poster}
                alt={movie.Title}
                className={styles.poster}
            />
            <div className={styles.movieInfo}>
                <h3 className={styles.title}>{movie.Title}</h3>
                <p className={styles.year}>{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieItem;
