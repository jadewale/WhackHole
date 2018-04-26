import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';
import styles from './styles';
import ClickableView from '../view';
import Animation from '../animation';

export const Double = ({
  addCount, decreaseCount, updateBackground, background,
}) => (
  <View style={styles.container}>
    {
      ['Key-', 'Key-', 'Key-'].map((obj, index) => {
        let image = '';
        if (background[`${obj}${index}`]) {
          console.log('I found');
          image = require('../../img/holeMask.png');
        } else {
          console.log('I never found');
          image = require('../../img/hole.png');
        }
        return (
          (index % 2 === 0) ?
            <ClickableView
              key={index.toString()}
              addCount={addCount}
              onPress={decreaseCount}
              style={[styles.row, styles.hole]}
            >
              <Animation updateBackground={updateBackground} id={`${obj}${index}`} addCount={addCount} />
            </ClickableView> :
            <ClickableView key={index.toString()} style={styles.row}> </ClickableView>
        );
      })
    }
  </View>
);

Double.propTypes = {
  addCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  background: PropTypes.object.isRequired,
  updateBackground: PropTypes.func.isRequired,
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
            <Animation updateBackground={updateBackground} id={`${obj}${index}`} addCount={addCount} />
          </ClickableView>
      ))
    }
  </View>
);

Single.propTypes = {
  addCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};

