import React, { useState } from 'react';
import { convertCurrency } from '../api/currencyApi';
import styles from './Conversor.module.css';

const Conversor = () => {
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleConvert = async () => {
        if (!fromCurrency || !toCurrency) {
            alert('Por favor, selecione as moedas.');
            return;
        }

        try {
            const result = await convertCurrency(
                fromCurrency,
                toCurrency,
                amount
            );
            setConvertedAmount(result);
        } catch (error) {
            alert('Erro ao converter a moeda.');
        }
    };

    const handleInvertCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <div className={styles['conversor-container']}>
            <h1>Conversor de moedas</h1>
            <form>
                <div>
                    <label>De:</label>
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        <option value="">Selecione a moeda</option>
                        <option value="USD">USD - Dólar Americano</option>
                        <option value="AUD">Dolar australiano</option>
                        <option value="CAD">Dolar canadense</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="BRL">BRL - Real Brasileiro</option>
                        <option value="JPY">Iene - Japão</option>
                        <option value="CNY">Yuan Chines</option>
                        <option value="CUP">Peso Cubano</option>
                        <option value="CLP">Peso Chileno</option>
                        <option value="ARS">Peso Argentino</option>
                        <option value="COP">Peso Colombiano</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="BOB">Boliviano</option>
                        <option value="DKK">Coroa Dinamarquesa</option>
                        <option value="GBP">Libra Esterlina</option>
                        <option value="EGP">Libra Egipisia</option>
                        <option value="THB">Baht - Tailandia</option>
                        <option value="PYG">Guarani - Paraguai</option>
                    </select>
                </div>

                <div>
                    <label>Para:</label>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        <option value="">Selecione a moeda</option>
                        <option value="USD">USD - Dólar Americano</option>
                        <option value="AUD">Dolar australiano</option>
                        <option value="CAD">Dolar canadense</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="BRL">BRL - Real Brasileiro</option>
                        <option value="JPY">Iene - Japão</option>
                        <option value="CNY">Yuan Chines</option>
                        <option value="CUP">Peso Cubano</option>
                        <option value="CLP">Peso Chileno</option>
                        <option value="ARS">Peso Argentino</option>
                        <option value="COP">Peso Colombiano</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="BOB">Boliviano</option>
                        <option value="DKK">Coroa Dinamarquesa</option>
                        <option value="GBP">Libra Esterlina</option>
                        <option value="EGP">Libra Egipisia</option>
                        <option value="THB">Baht - Tailandia</option>
                        <option value="PYG">Guarani - Paraguai</option>
                    </select>
                </div>

                <div>
                    <label>Quantia:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button type="button" onClick={handleConvert}>
                    Converter
                </button>
                <button type="button" onClick={handleInvertCurrencies}>
                    Inverter
                </button>
            </form>
            {convertedAmount !== null && (
                <div className="result">
                    <h2>Valor Convertido:</h2>
                    <p>{`${amount} ${fromCurrency} = ${convertedAmount.toFixed(
                        2
                    )} ${toCurrency}`}</p>
                </div>
            )}
        </div>
    );
};

export default Conversor;
