import Svg, {Polygon} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class D6 extends React.Component {
  render() {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg">
          <Polygon points="5,5 50,5 50,50 5,50" stroke="white" fill="white" />
        </Svg>
      </View>
    );
  }
}
