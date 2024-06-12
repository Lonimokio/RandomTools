import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {colors} from '../config/colors'; // Import colors from separate color file

import MagicBall from '../screens/MagicBall';
import Select from '../screens/Select';
import RNG from '../screens/RNG';
import Dice from '../screens/Dice';
import CoinFlip from '../screens/CoinFlip';

const Navigation = () => {
  const screens = [
    {name: 'Magic Ball', component: MagicBall},
    {name: 'Select', component: Select},
    {name: 'RNG', component: RNG},
    {name: 'Dice', component: Dice},
    {name: 'Coin Flip', component: CoinFlip},
  ];
  const [currentScreen, setCurrentScreen] = useState(screens[0].name);

  const handleItemClick = screen => {
    setCurrentScreen(screen.name);
  };
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Magic Ball':
        return <MagicBall />;
      case 'Select':
        return (
          <Select
            data={screens.filter(screen => screen.name !== 'Select')}
            onClick={handleItemClick}
          />
        );
      case 'RNG':
        return <RNG />;
      case 'Dice':
        return <Dice />;
      case 'Coin Flip':
        return <CoinFlip />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => handleItemClick(screens[1].component)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>{renderScreen()}</ScrollView>
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
    backgroundColor: colors.background,
  },
  scrollContainer: {},
  menuBar: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
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
