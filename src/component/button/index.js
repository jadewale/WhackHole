import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = ({ text }) => (
  <TouchableHighlight
    style={styles.submit}
    onPress={() => {}}
    underlayColor='#fff'>
    <Text style={styles.submitText}>{text}</Text>
  </TouchableHighlight>
)

export default Button;