import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import ClickableView from '../view';

export const Double = ({ keyPath, width, onClick }) => (
  <View style={styles.container}>
    {
      ['One', 'Two', 'Three'].map((obj, index ) => (
        (index % 2 === 0) ? <ClickableView
            key={index.toString()} onPress={ () => onClick([ keyPath, index])} style={ [styles.row, styles.hole] }> </ClickableView> :
          <ClickableView style={ styles.row }> </ClickableView>
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

