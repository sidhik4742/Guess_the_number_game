import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Card from '../components/Card/Card';
import Colors from '../Constants/Colors';

const SuccessResult = (props) => {
  const {
    randomGussedNumber,
    setUserTypingScreenStatus,
    setResultStatus,
    setSuccessStatus,
    setrandomGussedNumber,
  } = props;

  const startNewGameHandler = () => {
    setResultStatus(false);
    setSuccessStatus(false);
    setrandomGussedNumber(null);
    setUserTypingScreenStatus(true);
  };

  return (
    <View style={styles.previousContainer}>
      <Card style={styles.resultContainer}>
        <View style={styles.resultContainerText}>
          <Text style={styles.resultText}> Congratulations! </Text>
        </View>
        <View style={styles.resultNumberContainer}>
          <Text style={styles.resultNumberText}>
            {/* Your guessed number is : {randomGussedNumber?randomGussedNumber:null} */}
            You Win The Game
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Start New Game!"
            color={Colors.primary}
            onPress={startNewGameHandler}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: 300,
    maxWidth: '80%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  resultContainerText: {
    width: '100%',
    backgroundColor: 'green',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  resultText: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
  },
  resultNumberContainer: {
    marginTop: 20,
  },
  resultNumberText: {
    fontSize: 18,
    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 15,
  },
});

export default SuccessResult;
