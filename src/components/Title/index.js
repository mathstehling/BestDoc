import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Title = () => {
  return <Text style={styles.title}>Olá Cliente </Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});
