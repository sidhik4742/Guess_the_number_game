import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './components/Header/Header';
import GameOver from './Screens/GameOver';
import GameStartingScreen from './Screens/GameStartingScreen';
import PreviousGuess from './Screens/PreviousGuess';
import SuccessResult from './Screens/SuccessResult';

export default function App() {
  const [resultStatus, setResultStatus] = useState(false);
  const [userTypingScreenStatus, setUserTypingScreenStatus] = useState(true);
  const [successStatus, setSuccessStatus] = useState(false);
  const [previousGuessCount, setPreviousGuessCount] = useState(0);
  const [inputNumber, setInputNumber] = useState([]);
  const [resultPrediction, setResultPrediction] = useState('');
  const [randomGussedNumber, setrandomGussedNumber] = useState();
  const [gameOverStatus, setgameOverStatus] = useState(false);

  useEffect(() => {
    setrandomGussedNumber(Math.floor(Math.random() * 99 + 1));
    return () => {};
  }, [gameOverStatus || successStatus]);

  return (
    <View>
      <Header title="Guess a Number" />
      <View style={styles.gameStartScreen}>
        {userTypingScreenStatus && (
          <GameStartingScreen
            setgameOverStatus={setgameOverStatus}
            setResultStatus={setResultStatus}
            randomGussedNumber={randomGussedNumber}
            setPreviousGuessCount={setPreviousGuessCount}
            setResultPrediction={setResultPrediction}
            setSuccessStatus={setSuccessStatus}
            setInputNumber={setInputNumber}
            inputNumber={inputNumber}
            setPreviousGuessCount={setPreviousGuessCount}
            previousGuessCount={previousGuessCount}
            setUserTypingScreenStatus={setUserTypingScreenStatus}
          />
        )}
        {resultStatus && (
          <PreviousGuess
            resultPrediction={resultPrediction}
            inputNumber={inputNumber}
          />
        )}
        {successStatus && (
          <SuccessResult
            randomGussedNumber={randomGussedNumber}
            setrandomGussedNumber={setrandomGussedNumber}
            setUserTypingScreenStatus={setUserTypingScreenStatus}
            setResultStatus={setResultStatus}
            setSuccessStatus={setSuccessStatus}
          />
        )}
        {gameOverStatus && (
          <GameOver
            setgameOverStatus={setgameOverStatus}
            setUserTypingScreenStatus={setUserTypingScreenStatus}
            setResultStatus={setResultStatus}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameStartScreen: {},
});
