import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from '../config/colors';
import tails from '../assets/images/tails.png';
import heads from '../assets/images/heads.png';

const CoinFlip = () => {
  const [result, setResult] = useState('');

  const flipCoin = () => {
    const randomNum = Math.random();
    const coinSide = randomNum < 0.5 ? 'Heads' : 'Tails';
    setResult(coinSide);
  };

  return (
    <View style={styles.container}>
      {result === 'Heads' && <Image source={heads} style={styles.image} />}
      {result === 'Tails' && <Image source={tails} style={styles.image} />}
      {result !== '' && <Text style={styles.resultText}>{result}</Text>}
      <TouchableOpacity onPress={flipCoin}>
        <Text style={styles.buttonText}>Tap to Flip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: colors.background,
  },
  buttonText: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.font,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default CoinFlip;
