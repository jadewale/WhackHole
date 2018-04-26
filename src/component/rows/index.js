import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';
import styles from './styles';
import ClickableView from '../view';
import Animation from '../animation';

export const Double = ({ addCount, decreaseCount, updateBackground }) => (
  <View style={styles.container}>
    {
      ['Key-', 'Key-', 'Key-'].map((obj, index) => (
        (index % 2 === 0) ?
          <ClickableView
            key={index.toString()}
            addCount={addCount}
            onPress={decreaseCount}
            style={[styles.row, styles.hole]}
          >
            <ImageBackground style={styles.backgroundImage} source={require('../../img/hole.png')}>
              <Animation updateBackground={updateBackground} id={`${obj}${index}`} addCount={addCount} />
            </ImageBackground>
          </ClickableView> :
          <ClickableView key={index.toString()} style={styles.row}> </ClickableView>
      ))
    }
  </View>
);

Double.propTypes = {
  addCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};


export const Single = ({
  addCount, decreaseCount, updateBackground,
}) => (
  <View style={styles.container}>
    {
      ['One-', 'Two-', 'Three-'].map((obj, index) => (
        (index % 2 === 0) ?
          <ClickableView key={index.toString()} style={styles.row}> </ClickableView> :
          <ClickableView
            key={index.toString()}
            addCount={addCount}
            onPress={decreaseCount}
            style={[styles.row, styles.hole]}
          >
            <ImageBackground style={styles.backgroundImage} source={require('../../img/hole.png')}>
              <Animation updateBackground={updateBackground} id={`${obj}${index}`} addCount={addCount} />
            </ImageBackground>
          </ClickableView>
      ))
    }
  </View>
);

Single.propTypes = {
  addCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};

