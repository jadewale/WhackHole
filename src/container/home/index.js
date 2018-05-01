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

  render() {
    return (
      <Login googleLogin={this.signInWithGoogleAsync} />
    );
  }
}

export default Home;
