import React, { useState, useEffect } from 'react';
import { shuffleDeck, drawCards } from '../../api/deckApi';
import Player from './Player';
import Dealer from './Dealer';
import Button from '../layout/Button';
import LoadingSpinner from '../jogue21/LoadingSpinner';

import styles from './Game.module.css';
import Confetti from 'react-confetti';
import CountUp from 'react-countup';

const calculateScore = (cards) => {
    let score = 0;

    cards.forEach((card) => {
        if (card.value === 'ACE') {
            score += 1;
        } else if (['KING', 'QUEEN', 'JACK'].includes(card.value)) {
            score += 10;
        } else {
            score += parseInt(card.value, 10);
        }
    });

    return score;
};

const Game = () => {
    const [deckId, setDeckId] = useState(null);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [hiddenCard, setHiddenCard] = useState(true);
    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);
    const [message, setMessage] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        startGame();
    }, []);

    const startGame = async () => {
        setLoading(true);
        const deck = await shuffleDeck();
        setDeckId(deck.deck_id);

        const playerHand = await drawCards(deck.deck_id, 2);
        const dealerHand = await drawCards(deck.deck_id, 2);

        setPlayerCards(playerHand.cards);
        setDealerCards(dealerHand.cards.slice(0, 1));
        setHiddenCard(dealerHand.cards[1]);

        setPlayerScore(calculateScore(playerHand.cards));
        setDealerScore(calculateScore(dealerHand.cards.slice(0, 1)));
        setGameOver(false);
        setMessage('');
        setGameStarted(false);
        setLoading(false);
    };

    const startGameHandler = () => {
        setGameStarted(true);
    };

    const drawPlayerCard = async () => {
        const cardData = await drawCards(deckId, 1);
        const newCards = [...playerCards, ...cardData.cards];
        const newScore = calculateScore(newCards);

        setPlayerCards(newCards);
        setPlayerScore(newScore);

        if (newScore > 21) {
            setMessage('Você estourou!');
            setGameOver(true);
        } else if (newScore === 21) {
            setMessage('Parabéns você fez 21!');
            setGameOver(true);
        }
    };

    const dealerPlay = async () => {
        let dealerHand = [...dealerCards, hiddenCard];
        setDealerCards(dealerHand);
        setHiddenCard(false);

        let newScore = calculateScore(dealerHand);

        while (newScore < playerScore && newScore < 21) {
            const cardData = await drawCards(deckId, 1);
            dealerHand = [...dealerHand, ...cardData.cards];
            newScore = calculateScore(dealerHand);
            setDealerCards(dealerHand);
        }

        setDealerScore(newScore);

        if (newScore > 21) {
            setMessage('Dealer estourou! Você ganhou!');
        } else if (newScore >= playerScore) {
            if (newScore === playerScore) {
                setMessage('Empate!');
            } else {
                setMessage('Dealer ganhou!');
            }
        }

        setGameOver(true);
    };

    const resetGame = () => {
        startGame();
    };

    const playerWon =
        message.includes('Parabéns você fez 21!') ||
        message.includes('Dealer estourou! Você ganhou!');

    return (
        <div className={styles.container}>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {gameOver && playerWon && <Confetti />}
                    <Player cards={playerCards} flipped={gameStarted} />
                    {gameStarted && (
                        <div className={styles['score-container']}>
                            <h3>
                                Sua Pontuação:
                                <CountUp
                                    start={0}
                                    end={playerScore}
                                    duration={2.5}
                                    separator=","
                                />
                            </h3>
                        </div>
                    )}
                    <Dealer
                        cards={dealerCards}
                        hiddenCard={hiddenCard}
                        flipped={gameStarted}
                    />
                    {gameStarted && (
                        <div className={styles['score-container']}>
                            <h3>
                                Pontuação do Dealer:
                                <CountUp
                                    start={0}
                                    end={dealerScore}
                                    duration={2.5}
                                    separator=","
                                />
                            </h3>
                        </div>
                    )}
                    <h3
                        className={`${styles.message} ${
                            playerWon ? styles.winning : ''
                        }`}
                    >
                        {message}
                    </h3>
                    {!gameStarted && (
                        <Button onClick={startGameHandler}>Iniciar Jogo</Button>
                    )}
                    {gameStarted && !gameOver && (
                        <div className={styles['button-group']}>
                            <Button onClick={drawPlayerCard}>
                                Puxar carta
                            </Button>
                            <Button onClick={dealerPlay}>Parar</Button>
                        </div>
                    )}
                    {gameOver && (
                        <Button
                            onClick={resetGame}
                            className={styles.resetButton}
                        >
                            Voltar ao Início
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default Game;
