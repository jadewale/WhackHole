import React from 'react';
import { ImageBackground, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ClickableView from '../view';
import Animation from '../animation';


export const Double = ({ keyPath, width, onClick, delay, addCount, decreaseCount }) => (
  <View style={styles.container}>
    {
      ['One', 'Two', 'Three'].map((obj, index ) => (
        (index % 2 === 0) ? <ClickableView
            key={index.toString()} addCount={addCount} onPress={ decreaseCount} style={ [styles.row, styles.hole] }>
            <ImageBackground style={ styles.backgroundImage } source={require('../../img/hole.png')}>
              <Animation addCount={addCount}/>
            </ImageBackground>
            </ClickableView> :
          <ClickableView key={index.toString()} style={ styles.row }> </ClickableView>
      ))
    }
  </View>
)



export const  Single = ({ keyPath, width, onClick, delay, addCount, decreaseCount  }) => (
  <View style={styles.container}>
    {
      ['One', 'Two', 'Three'].map((obj, index ) => (
        (index % 2 === 0) ?  <ClickableView key={index.toString()} style={ styles.row }> </ClickableView> :
          <ClickableView
            key={index.toString()} addCount={addCount} onPress={ decreaseCount} style={ [styles.row, styles.hole] }>
            <ImageBackground style={ styles.backgroundImage } source={require('../../img/hole.png')}>
              <Animation addCount={addCount} />
            </ImageBackground>
          </ClickableView>
      ))
    }
  </View>
)

