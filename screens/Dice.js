import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import {colors} from '../config/colors';
import D6 from '../assets/svg/d6.js';
import D20 from '../assets/svg/d20.js';
import D4 from '../assets/svg/d4.js';

const Dice = props => {
  const [diceArray, setDiceArray] = useState([]);
  const [total, setTotal] = useState(0);
  const [customDiceSize, setCustomDiceSize] = useState('');
  const [rollResults, setRollResults] = useState([]);

  const addDice = diceType => {
    const dice = new CustomDie(diceType);
    setDiceArray([...diceArray, dice]);
  };

  const addCustomDice = () => {
    const size = parseInt(customDiceSize);
    if (!isNaN(size) && size > 0) {
      setDiceArray([...diceArray, new CustomDie(size)]);
    }
  };

  const rollDice = () => {
    let total = 0;
    const updatedRollResults = diceArray.map(dice => {
      const rollResult = dice.rollDice();
      total += rollResult;
      return rollResult;
    });
    setRollResults(updatedRollResults);
    setTotal(total);
  };

  const removeDice = index => {
    if (diceArray.length > 0) {
      const updatedDiceArray = diceArray.filter((_, i) => i !== index);
      const updatedRollResults = rollResults.filter((_, i) => i !== index);
      setRollResults(updatedRollResults);
      setDiceArray(updatedDiceArray);
    }
  };

  class Dice {
    rollDice() {
      return Math.floor(Math.random() * this.sides) + 1;
    }
  }

  class CustomDie extends Dice {
    constructor(size) {
      super();
      this.sides = size;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.dicesContainer}>
        {diceArray.map((dice, index) => (
          <TouchableOpacity key={index} onPress={() => removeDice(index)}>
            <View key={index}>
              <View style={styles.diceContainer}>
                {dice.sides === 4 ? (
                  <D4 />
                ) : dice.sides === 20 ? (
                  <D20 />
                ) : dice.sides === 6 ? (
                  <D6 />
                ) : (
                  <D6 />
                )}
                <Text style={styles.diceText}>{rollResults[index]}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {total}</Text>
      </View>
      <View style={styles.diceChoiceContainer}>
        <TouchableOpacity onPress={() => addDice(6)} style={styles.diceButton}>
          <D6 />
          <Text style={styles.diceText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDice(20)} style={styles.diceButton}>
          <D20 />
          <Text style={styles.diceText}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addDice(4)} style={styles.diceButton}>
          <D4 />
          <Text style={styles.diceText}>4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.customDiceContainer}>
        <Text style={styles.buttonText}>Custom dice</Text>
        <TextInput
          style={styles.customDiceInput}
          value={customDiceSize}
          onChangeText={text => setCustomDiceSize(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={addCustomDice}
          style={styles.customDiceButton}>
          <Text style={styles.customDiceButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={rollDice} style={styles.rollButton}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginTop: 60,
    marginBottom: 60,
  },
  dicesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'left',
  },
  diceContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 10,
  },
  diceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    display: 'relative',
    top: -35,
    left: 2,
    color: colors.black,
  },
  totalContainer: {
    width: 80,
    height: 70,
    borderRadius: 5,
    margin: 10,
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: colors.font,
  },
  diceChoiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  diceButton: {
    width: 50,
    height: 50,
    margin: 5,
  },
  customDiceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  customDiceInput: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 5,
    color: colors.font,
    textAlign: 'center',
  },
  customDiceButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  customDiceButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  rollButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dice;
