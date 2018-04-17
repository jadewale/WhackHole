import React from 'react';
import { View } from 'react-native';
import Button from '../button';

const Header = () => {
  return (
    <View style={{
      flex: 0 , flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'space-between',
      borderBottomWidth:1,
      borderBottomColor: 'black',
    }}>
      <Button/>
      <Button/>
    </View>
  )
}

export default Header;