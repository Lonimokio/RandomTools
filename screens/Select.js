import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {colors} from '../config/colors';

const Select = ({data, onClick}) => {
  const getImageByScreenName = name => {
    switch (name) {
      case 'Magic Ball':
        return require('../assets/magicBall.png');
      case 'RNG':
        return require('../assets/RNG.png');
      default:
        return require('../assets/missing.png');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View>
            <Text style={styles.header} key={index}>
              {item.name}
            </Text>
            <TouchableOpacity
              key={index}
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
    </ScrollView>
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
