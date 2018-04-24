import React from 'react';
import Proptypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

const ClickableView = (props) => (
  <TouchableOpacity {...props} >
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
      {props.children}
    </View>
  </TouchableOpacity>
);

export default ClickableView;

ClickableView.propTypes = {
  children: Proptypes.node.isRequired,
};
