import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

const Login = ({ googleLogin, facebookLogin }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C9BF9C',
    }}
  >
    <Button
      style={{
        backgroundColor: 'red',
        width: 200,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
      }}
      title="Google Sign in"
      onPress={googleLogin}
    />
    <Button
      style={{
        backgroundColor: 'black',
        width: 200,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
      }}
      title="Facebook Sign in"
      onPress={facebookLogin}
    />
  </View>
);

Login.propTypes = {
  googleLogin: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired,
};

export default Login;
