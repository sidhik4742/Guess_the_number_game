import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../Constants/Colors';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 60,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '800',
    paddingBottom: 10,
  },
});

export default Header;
