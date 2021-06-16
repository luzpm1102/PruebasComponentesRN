import React from 'react';
import { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.purpleBox, opacity }}></Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  purpleBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
