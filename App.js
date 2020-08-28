import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Header from './components/Header'
import GameScreen from './screen/GameScreen'
import Gaming from './screen/Gaming'

const randomNumber = (min, max, exclude) => {

  let guessNumber = 0;

  guessNumber = Math.floor(Math.random()*(max - min) + min);

  if (guessNumber == exclude) {
    randomNumber(min, max, exclude);
  } else {
    return guessNumber;
  }

}

export default function App() {

  //state
  const [isGame, setIsGame] = useState(false);
  const [comfirmNumber, setComfirmNumber] = useState(0);
  const [currentGuess,setCurrentGuess] = useState(0);
  let max = useRef(100);
  let min = useRef(1);

  //event handler
  const startGameHandler = comfirmNumber => {
        setIsGame(true);
        setComfirmNumber(comfirmNumber);
        setCurrentGuess(randomNumber(min.current, max.current, comfirmNumber));
  }

  const reGen = gradient => {
    if (gradient === 'lower' && currentGuess < comfirmNumber || gradient === 'greater' && currentGuess > comfirmNumber) {
      Alert.alert('Don\'t lie!', 'Be kind to your computer friend', [{text: 'Fuck it', style: 'destructive'}])
    } else {
      gradient === 'lower' ? max.current = currentGuess : min.current = currentGuess;
      setCurrentGuess(randomNumber(min.current, max.current, currentGuess));
    }
  }

  //condition component
  let screen = null;
  if (isGame) {
    screen = <Gaming reGen={reGen}>{currentGuess}</Gaming>
  } else {
    screen = <GameScreen startGameHandler={startGameHandler}/>
  }

  //main content
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={() => {Keyboard.dismiss()}}>
      <View style={{flex: 1}}>
        <Header title="Guess a number"/>
          {screen}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
