import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors} from '../config/colors';

const RNG = () => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [randomNumber, setRandomNumber] = useState('');

  const generateRandomNumber = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);

    if (isNaN(min) || isNaN(max)) {
      setRandomNumber('Invalid input');
    } else if (min >= max) {
      setRandomNumber('Min value must be less than max value');
    } else {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(random.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Min Value:</Text>
      <TextInput
        value={minValue}
        onChangeText={setMinValue}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Max Value:</Text>
      <TextInput
        value={maxValue}
        onChangeText={setMaxValue}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>Generate Random Number</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Random Number:</Text>
      <View style={styles.randomNumberContainer}>
        <Text style={styles.randomNumber}>{randomNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  label: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.font,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: colors.font,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: colors.font,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  randomNumberContainer: {
    width: 300,
    height: 200,
    borderRadius: 5,
    backgroundColor: colors.font,
    justifyContent: 'center',
    alignItems: 'center',
  },
  randomNumber: {
    margin: 16,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 16,
    color: colors.black,
  },
});

export default RNG;
