import React from 'react';
import { TouchableOpacity, View } from 'react-native';
const ClickableView = (props) => (
  <TouchableOpacity { ...props} >
    <View>
      {props.children}
    </View>
  </TouchableOpacity>
)

export default ClickableView;