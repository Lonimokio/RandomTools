import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {colors} from '../config/colors';
import RNShake from 'react-native-shake';

const MagicBall = () => {
  const [answer, setAnswer] = React.useState('');

  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      console.log('Shake event detected');
      shakeMagicBall();
    });
    return () => {
      console.log('unmounting');
      subscription.remove();
    };
  }, []);

  const shakeMagicBall = () => {
    // Generate a random answer
    const answers = [
      {answer: 'Yes', weight: 10},
      {answer: 'No', weight: 6},
      {answer: 'Maybe', weight: 4},
      {answer: 'Ask again later', weight: 8},
      {answer: 'Definitely', weight: 10},
      {answer: 'Absolutely', weight: 8},
      {answer: 'Without a doubt', weight: 10},
      {answer: 'It is certain', weight: 10},
      {answer: 'Most likely', weight: 8},
      {answer: 'Outlook good', weight: 6},
      {answer: 'Signs point to yes', weight: 8},
      {answer: 'Cannot predict now', weight: 4},
      {answer: 'Concentrate and ask again', weight: 6},
      {answer: 'Reply hazy, try again', weight: 4},
      {answer: 'Better not tell you now', weight: 6},
      {answer: 'My sources say no', weight: 6},
      {answer: "Don't count on it", weight: 4},
      {answer: 'Very doubtful', weight: 4},
      {answer: 'Outlook not so good', weight: 4},
      {answer: 'Help im stuck in the ball', weight: 1},
    ];

    const totalWeight = answers.reduce((sum, answer) => sum + answer.weight, 0);
    const randomWeight = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    let randomAnswer;

    for (const answer of answers) {
      cumulativeWeight += answer.weight;
      if (randomWeight <= cumulativeWeight) {
        randomAnswer = answer.answer;
        break;
      }
    }

    // Set the answer
    setAnswer(randomAnswer);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your question"
        placeholderTextColor={colors.font}
      />
      <View style={styles.ballContainer}>
        <View style={styles.internalBallContainer}>
          {answer && <Text style={styles.answerText}>{answer}</Text>}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={shakeMagicBall}>
        <Text style={styles.buttonText}>Shake the Magic Ball</Text>
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
  },
  ballContainer: {
    width: 340,
    height: 340,
    borderRadius: 200,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  internalBallContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: colors.primary,
    color: colors.font,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  answerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default MagicBall;
