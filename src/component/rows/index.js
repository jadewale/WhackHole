import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export const Double = ({ width }) => (
  <View style={styles.container}>
    {
      ['One', 'Two', 'Three'].map((obj, index ) => (
        (index % 2 === 0) ? <View key={index.toString()} style={ [styles.row, styles.hole] }> </View> :
          <View style={ styles.row }> </View>
      ))
    }
  </View>
)



export const  Single = ({ width }) => (
  <View style={styles.container}>
    {
      ['One', 'Two', 'Three'].map((obj, index ) => (
        (index % 2 === 0) ? <View key={index.toString()} style={ styles.row }> </View> :
          <View style={[styles.row, styles.hole] }> </View>
      ))
    }
  </View>
)

