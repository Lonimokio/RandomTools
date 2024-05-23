import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const MagicBall = () => {
  const [answer, setAnswer] = React.useState('');

  const shakeMagicBall = () => {
    // Generate a random answer
    const answers = ['Yes', 'No', 'Maybe', 'Ask again later'];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    // Set the answer
    setAnswer(randomAnswer);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={shakeMagicBall}>
        <Text>Shake the Magic Ball</Text>
      </TouchableOpacity>
      {answer && <Text>{answer}</Text>}
    </View>
  );
};

export default MagicBall;
