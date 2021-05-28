import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import United from './screens/United';
import AllHearts from './screens/RentTheRunway';
import ADP from './screens/ADP';

export default function App() {
  return (
    <View style={styles.container}>
      <ADP />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
