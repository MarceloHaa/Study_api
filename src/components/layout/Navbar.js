import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../layout/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/" className={styles.link}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/pokemons" className={styles.link}>
                        Pokemons
                    </Link>
                </li>
                <li>
                    <Link to="/harrypotter" className={styles.link}>
                        Harry Potter
                    </Link>
                </li>
                <li>
                    <Link to="/jogue21" className={styles.link}>
                        Jogue 21
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
