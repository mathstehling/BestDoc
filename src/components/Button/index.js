import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textButton}> Entrar </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 50,
    height: 100,
    backgroundColor: 'blue',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
