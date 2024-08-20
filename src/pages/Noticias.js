import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsApi';
import NewsList from '../components/noticias/NewsList';
import Paginacao from '../components/noticias/Paginacao';
import styles from './Noticias.module.css';

const Noticias = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (query) {
            const getNews = async () => {
                try {
                    const data = await fetchNews(query, currentPage);
                    setArticles(data.articles);
                    setTotalPages(Math.ceil(data.totalResults / 10));
                } catch (error) {
                    console.error('Erro ao buscar notícias', error);
                }
            };
            getNews();
        }
    }, [query, currentPage]);

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setQuery(e.target.query.value);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className={styles['container']}>
            <form onSubmit={handleSearch}>
                <input type="text" name="query" placeholder="Buscar notícias" />
                <button type="submit">Buscar</button>
            </form>
            <NewsList articles={articles} />
            {articles.length > 0 && (
                <Paginacao
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default Noticias;
