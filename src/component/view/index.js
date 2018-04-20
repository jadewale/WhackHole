import React from 'react';
import Proptypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

const ClickableView = (props) => (
  <TouchableOpacity {...props} >
    <View>
      {props.children}
    </View>
  </TouchableOpacity>
);

export default ClickableView;

ClickableView.propTypes = {
  children: Proptypes.node.isRequired,
};
