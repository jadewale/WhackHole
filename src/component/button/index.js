import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = () => (
  <TouchableHighlight
    style={styles.submit}
    onPress={() => {}}
    underlayColor='#fff'>
    <Text style={styles.submitText}>Button</Text>
  </TouchableHighlight>
)

export default Button;