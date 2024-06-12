import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from '../config/colors';

const Select = ({data, onClick}) => {
  const getImageByScreenName = name => {
    switch (name) {
      case 'Magic Ball':
        return require('../assets/images/magicBall.png');
      case 'RNG':
        return require('../assets/images/RNG.png');
      case 'Dice':
        return require('../assets/images/dice.png');
      case 'Coin Flip':
        return require('../assets/images/heads.png');
      default:
        return require('../assets/images/missing.png');
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View>
          <Text style={styles.header} key={index + '-' + item.name + '-header'}>
            {item.name}
          </Text>
          <TouchableOpacity
            key={index + '-' + item.name + '-button'}
            style={styles.box}
            onPress={() => onClick(item)}>
            <Image
              style={styles.Image}
              source={getImageByScreenName(item.name)}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'left',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: colors.font,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  Image: {
    width: 145,
    height: 145,
  },
  header: {
    color: colors.font,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Select;
