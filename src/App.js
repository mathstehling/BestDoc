import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Title } from './components';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Title />
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
