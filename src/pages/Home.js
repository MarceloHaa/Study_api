import React from 'react';
import styles from './Home.module.css';
import myPhoto from '../assets/imagens/Eu.jpg';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Sobre mim</h1>
            <img src={myPhoto} alt="Foto de Marcelo" className={styles.img} />

            <p>
                Tenho 38 anos e iniciei minha carreira aos 18 anos em uma loja
                de shopping como estoquista onde com minha ética e trabalho logo
                fui promovido a vendedor. Depois de 2 anos acendi a gerência
                onde desenvolvi minha habilidades em Liderança e contato com o
                publico. Buscando novos desafios decidi começar estudar a área
                de programação onde me apaixonei pelo front-end e estou
                iniciando uma nova jornada.
            </p>
        </div>
    );
}

export default Home;
