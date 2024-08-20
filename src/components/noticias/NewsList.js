import React from 'react';
import styles from './NewsList.module.css';

const NewsList = ({ articles }) => {
    return (
        <div>
            {articles.map((article, index) => (
                <div key={index} className={styles['news-item']}>
                    <img src={article.urlToImage} alt={article.title} />
                    <div className={styles['news-item-content']}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Leia mais
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
