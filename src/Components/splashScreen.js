import React from 'react';
import {Text, View, Image} from 'react-native';
const SplashScreen = () => {
  return (
    <View>
      <Image
        style={{height: '100%', width: '100%'}}
        source={require('../img/screenshot1.jpg')}
      />
    </View>
  );
};

export default SplashScreen;
