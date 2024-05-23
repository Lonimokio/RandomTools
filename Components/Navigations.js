import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../config/colors'; // Import colors from separate color file

import MagicBall from './screens/MagicBall';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <MagicBall />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    height: '100%',
    backgroundColor: colors.background2,
  },
  menuBar: {
    backgroundColor: colors.background,
    width: '100%',
    padding: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    color: colors.font,
    fontSize: 30,
  },
  navItemsContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    zIndex: 1,
    backgroundColor: colors.secondary,
    width: '30%',
    height: '100%',
  },
  navItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.font,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navItemText: {
    color: colors.font,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Navigation;
