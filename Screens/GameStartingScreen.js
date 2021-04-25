import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Colors from '../Constants/Colors';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';

import {numberChecker} from '../Validator/Validator';

const GameStartingScreen = (props) => {
  const {
    setResultStatus,
    setgameOverStatus,
    randomGussedNumber,
    setResultPrediction,
    setSuccessStatus,
    setInputNumber,
    inputNumber,
    setPreviousGuessCount,
    previousGuessCount,
    setUserTypingScreenStatus,
  } = props;

  const [conifrmStatus, setConifrmStatus] = useState(false);
  const [userTypeNumber, setuserTypeNumber] = useState('');

  const resetHandler = () => {
    // console.log('Reset btn   pressed !');
    setuserTypeNumber('');
    setConifrmStatus(false);
  };

  const confirmHandler = () => {
    console.log('Confirm btn pressed !');
    const number = parseInt(userTypeNumber);
    console.log(number, previousGuessCount, randomGussedNumber);
    setInputNumber([...inputNumber, number]);
    if (previousGuessCount >= 10) {
      setInputNumber([]);
      setPreviousGuessCount(0);
      setResultStatus(false);
      setUserTypingScreenStatus(false);
      setgameOverStatus(true);
      return;
    }
    if (number === NaN || number <= 0 || number > 99) {
      return;
    } else {
      if (number > randomGussedNumber) {
        setResultPrediction('Last guess was too High!');
        setPreviousGuessCount(previousGuessCount + 1);
        setResultStatus(true);
      } else if (number < randomGussedNumber) {
        setResultPrediction('Last guess was too Low!');
        setPreviousGuessCount(previousGuessCount + 1);
        setResultStatus(true);
      } else if (number == randomGussedNumber) {
        setInputNumber([]);
        setPreviousGuessCount(0);
        setResultStatus(false);
        setUserTypingScreenStatus(false);
        setSuccessStatus(true);
      }
      setuserTypeNumber('');
    }
    // alert('You guess the number is :' + userTypeNumber);
  };

  const inputNumberHandler = (value) => {
    console.log(value);
    setuserTypeNumber(numberChecker(value));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.startGameContainer}>
        <Text style={styles.headingText}> Start a New Game! </Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.inputText}>Select a number between 1 to 99</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            onChangeText={inputNumberHandler}
            value={userTypeNumber}
          />
          <View style={styles.actionContainer}>
            <View style={styles.resetBtn}>
              <Button
                title="Reset"
                color={Colors.secondary}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.confirmBtn}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmHandler}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  startGameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    // marginHorizontal: 30,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    textAlign: 'center',
  },
  input: {
    width: 30,
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resetBtn: {
    width: 80,
  },
  confirmBtn: {
    width: 80,
  },
});

export default GameStartingScreen;
