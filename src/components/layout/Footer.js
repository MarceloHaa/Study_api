import React from 'react';
import styles from '../layout/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; 2024 </p>
                <a
                    href="https://www.instagram.com/marceloalmeida.h"
                    className={styles.icon}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
