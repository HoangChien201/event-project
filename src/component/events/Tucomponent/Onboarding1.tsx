import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.iphoneImage}
        source={require('../../../media/icon/iphonex.png')}
      />
      <Image
        style={styles.baseImage}
        source={require('../../../media/icon/Base.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.largeText}>Explore Upcoming and{'\n'} Nearby Events</Text>
        <Text style={styles.smallText}>In publishing and graphic design,{'\n'} Lorem is a placeholder text commonly</Text>
      </View>
      
      <View style={styles.bottomContainer}> 
        <Text style={styles.skipText}>Skip</Text>
        <Text style={styles.nextText}>Next</Text>


        <View style={styles.dotsContainer}>
          <Image
            style={styles.dot2Image}
            source={require('../../../media/icon/Dot2.png')}
          />
          <Image
            style={styles.dot1Image}
            source={require('../../../media/icon/Dot1.png')}
          />
          <Image
            style={styles.dotImage}
            source={require('../../../media/icon/Dot.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iphoneImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: 140,
  },
  baseImage: {
    width: 400,
    height: 390,
    resizeMode: 'contain',
    position: 'absolute',
    top: 495,
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    color: 'white',
    top: 180,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    color: 'white',
    top: 195,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  skipText: {
    color: 'white',
    position: 'absolute',
    left: 20, 
    bottom: -5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextText: {
    color: 'white',
    position: 'absolute',
    right: 20, 
    bottom: -5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  dotsContainer: {
    flexDirection: 'row', // Hiển thị các hình ngang với nhau
    alignItems: 'center',
  },
  dot2Image: {
    width: 20,
    height: 12,
    resizeMode: 'contain',
    marginRight: 1,
  },
  dot1Image: {
    width: 20,
    height: 12,
    resizeMode: 'contain',
  },
 
  dotImage: {
    width: 20,
    height: 12,
    resizeMode: 'contain',
  },
});

export default Onboarding1;
