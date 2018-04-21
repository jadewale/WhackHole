import React from 'react';
import Proptypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = ({ text, onClick }) => (
  <TouchableHighlight
    style={styles.submit}
    onPress={onClick}
    underlayColor="#fff"
  >
    <Text style={styles.submitText}>{text}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  text: Proptypes.number.isRequired,
};

export default Button;
