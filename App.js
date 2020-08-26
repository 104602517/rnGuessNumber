import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './components/Header'
import GameScreen from './screen/GameScreen'

export default function App() {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => {Keyboard.dismiss()}}>
      <View>
        <Header title="Guess a number"/>
        <GameScreen />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
