import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import Display from '../assets/Styles/Display.js';
// import Images from '../assets/Styles/Images.js';
import Colors from '../assets/Styles/Colors.js';
const MainScreen = () => {
  return (
    <>
    <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
    <View style={styles.container}>
      <Image source={require('../assets/images/plate.png')} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>FOOD ORDERING</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
  },
});

export default MainScreen;
