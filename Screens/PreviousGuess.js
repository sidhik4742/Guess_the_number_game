import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../components/Card/Card';

const PreviousGuess = (props) => {
  const {resultPrediction, inputNumber} = props;

  console.log(inputNumber);

  return (
    <View style={styles.previousContainer}>
      <Card style={styles.resultContainer}>
        <View style={styles.resultContainerText}>
          <Text style={styles.resultText}> Oops! You're Wrong! </Text>
        </View>
        <View style={styles.guessPredictionContainer}>
          <Text style={styles.guessPredictionText}>
            {resultPrediction ? resultPrediction : 'Last guess was too high!'}
          </Text>
        </View>
        <View style={styles.previousGuessContainer}>
          <Text style={styles.previousGuessText}>Previous Guesses :</Text>
          <View style={styles.guessedNumbers}>
            {inputNumber.map((number, index) => (
              <Text key={index} style={styles.previousGuessText}>
                {number + ','}
              </Text>
            ))}
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  resultContainerText: {
    width: '100%',
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  resultText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  guessPredictionContainer: {
    marginTop: 10,
  },
  guessPredictionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  previousGuessContainer: {
    marginTop: 10,
  },
  previousGuessText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  guessedNumbers: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PreviousGuess;
