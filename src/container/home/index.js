import React from 'react';
import Login from './Login';

class Home extends React.Component {
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        iosClientId: '393448988202-p206h3anqg2ud6hrirpdk2n046p6jf5u.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log('yeah');
        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }

  signInWithFacebookAsync = async () => {

    try {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('167289037440981', {
        permissions: ['public_profile'],
      });

      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        console.log(await response.json().name);
      }

    } catch (e) {
      return { error: true };
    }
  }

  render() {
    return (
      <Login googleLogin={this.signInWithGoogleAsync} facebookLogin={this.signInWithFacebookAsync} />
    );
  }
}

export default Home;
