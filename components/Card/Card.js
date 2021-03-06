import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.cardContainer, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 5,
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default Card;
