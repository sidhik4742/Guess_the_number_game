import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from '../components/Card/Card';
import Colors from '../Constants/Colors';

const GameOver = (props) => {
  const {setgameOverStatus, setUserTypingScreenStatus} = props;
  const tryAgaineHandler = () => {
    setgameOverStatus(false);
    setUserTypingScreenStatus(true);
  };

  return (
    <View style={styles.previousContainer}>
      <Card style={styles.resultContainer}>
        <View style={styles.resultContainerText}>
          <Text style={styles.resultText}> Game Over </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Try Again!"
            color={Colors.secondary}
            onPress={tryAgaineHandler}
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
    backgroundColor: 'red',
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

export default GameOver;
