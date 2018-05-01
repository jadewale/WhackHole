import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

const Login = ({ googleLogin }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Button
      style={{
        backgroundColor: 'white',
        width: 200,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
      }}
      title="Google Sign in"
      onPress={googleLogin}
    />
  </View>
);

Login.propTypes = {
  googleLogin: PropTypes.func.isRequired,
};

export default Login;
