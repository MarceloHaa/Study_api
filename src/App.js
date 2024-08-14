import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import HarryPotter from './pages/HarryPotter';
import Jogue21 from './pages/Jogue21';
import Previsao from './pages/Previsao';
import Graficos from './pages/Graficos';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemons" element={<Pokemons />} />
                <Route path="/harrypotter" element={<HarryPotter />} />
                <Route path="/jogue21" element={<Jogue21 />} />
                <Route path="/previsoes" element={<Previsao />} />
                <Route path="/graficos" element={<Graficos />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
