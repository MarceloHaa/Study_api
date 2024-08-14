import React, { useState } from 'react';
import {
    PieChart,
    Pie,
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
} from 'recharts';
import { getCountriesData } from '../api/countriesApi';
import CustomYAxis from '../components/graficos/CustomYAxis';
import Button from '../components/layout/Button';
import styles from './Graficos.module.css';

const Graficos = () => {
    const [filterType, setFilterType] = useState('region');
    const [filterValue, setFilterValue] = useState('');
    const [countriesData, setCountriesData] = useState([]);

    const handleFetchData = async () => {
        const data = await getCountriesData(filterType, filterValue);
        setCountriesData(data);
    };

    const COLORS = [
        '#0088FE',
        '#DC143C',
        '#0000FF ',
        '#00C49F',
        '#4B0082',
        '#00FF00',
        '#FFD700',
        '#FF4500',
        '#FF8042',
        '#FF6384',
        '#36A2EB',
        '#0077FE',
        '#0069FE',
        '#0047FE',
        '#FF77FE',
        '#00FA9A',
        '#FF0000 ',
    ];

    const formatNumber = (number) => {
        return new Intl.NumberFormat('pt-BR').format(number);
    };

    return (
        <div className={styles['graficos-container']}>
            <h1 className={styles['graficos-title']}>Gráficos de Países</h1>
            <div className={styles['filter-container']}>
                <label className={styles['filter-label']}>Filtro: </label>
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className={styles['filter-select']}
                >
                    <option value="region">Continente</option>
                    <option value="subregion">Subcontinente</option>
                    <option value="currency">Moeda</option>
                    <option value="language">Linguagem</option>
                    <option value="name">Nome do País</option>
                </select>
                <input
                    type="text"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    placeholder="Digite o filtro"
                    className={styles['filter-input']}
                />
                <Button onClick={handleFetchData}>Preencher Gráficos</Button>
            </div>

            {countriesData.length > 0 && (
                <div className={styles['charts-container']}>
                    <div className={styles['chart-wrapper']}>
                        <PieChart width={600} height={600}>
                            <Pie
                                data={countriesData}
                                dataKey="population"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                fill="#8884d8"
                            >
                                {countriesData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => formatNumber(value)}
                            />
                            <Legend
                                layout="vertical"
                                align="right"
                                verticalAlign="middle"
                                wrapperStyle={{
                                    maxHeight: '400px',
                                    overflowY: 'auto',
                                    fontSize: '10px',
                                }}
                            />
                        </PieChart>
                    </div>

                    <div className={styles['chart-wrapper']}>
                        <LineChart
                            width={600}
                            height={300}
                            data={countriesData}
                        >
                            <XAxis dataKey="name" />
                            <CustomYAxis />
                            <CartesianGrid stroke="#ccc" />
                            <Tooltip
                                formatter={(value) => formatNumber(value)}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="population"
                                stroke={COLORS[0]}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </div>

                    <div className={styles['chart-wrapper']}>
                        <BarChart width={600} height={300} data={countriesData}>
                            <XAxis dataKey="name" />
                            <CustomYAxis />
                            <CartesianGrid stroke="#ccc" />
                            <Tooltip
                                formatter={(value) => formatNumber(value)}
                            />
                            <Legend />
                            <Bar dataKey="population" fill={COLORS[1]} />
                        </BarChart>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Graficos;
