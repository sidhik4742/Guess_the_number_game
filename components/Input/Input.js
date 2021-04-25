import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import Colors from '../../Constants/Colors';

const Input = (props) => {
  return (
    <View>
      <TextInput {...props} style={{...styles.input, ...props.style}} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
