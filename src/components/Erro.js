import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Erro = ({ showError }) => {
    return showError ? <Text style={styles.texto}>Não encontrado</Text> : null;
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        marginTop: 40,
        color: 'red',
        width: '80%',
        textAlign: 'center',
    },
});

export default Erro;
