import Svg, {Polygon} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class D6 extends React.Component {
  render() {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg">
          <Polygon d="M5,50 L27.5,5 L50,50 Z" stroke="green" fill="green" />
        </Svg>
      </View>
    );
  }
}
