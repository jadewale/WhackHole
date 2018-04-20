import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = ({ text, onClick }) => (
  <TouchableHighlight
    style={styles.submit}
    onPress={onClick}
    underlayColor='#fff'>
    <Text style={styles.submitText}>{text}</Text>
  </TouchableHighlight>
)

export default Button;