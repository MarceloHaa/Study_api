import React from 'react';
import styles from './Paginacao.module.css';

const Paginacao = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={styles['paginacao']}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            <span>
                Pagina{currentPage} de {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Proxima
            </button>
        </div>
    );
};

export default Paginacao;
