import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
     
      <Image
        style={styles.logo}
        source={require('../../../media/icon/Eventhup.png')}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',  
  },
});

export default SplashScreen;
