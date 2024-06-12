import Svg, {Polygon} from 'react-native-svg';
import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class D20 extends React.Component {
  render() {
    return (
      <View>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 60"
          width="55"
          height="50">
          <Polygon
            fill="red"
            stroke="darkred"
            points="0,17.75 24.75,8 47.75,17.75 47.75,48 25,61.75 0.5,47.75"
          />
          <Polygon
            fill="red"
            stroke="darkred"
            points="0,17.75 24.75,17 24.75,8 0,17.75"
          />
          <Polygon
            fill="red"
            stroke="darkred"
            points="0.25,47.75 11.75,41.75 24.25,61.75 0,47.75"
          />
          <Polygon
            fill="red"
            stroke="darkred"
            points="47.75,18 47.75,48 39.5,42"
          />
          <Polygon
            fill="red"
            stroke="darkred"
            points="12.75,42 39.25,41.75 24.75,61"
          />
          <Polygon
            fill="red"
            stroke="darkred"
            points="0,17.75 12,42 24.75,17"
          />
          <Polygon
            fill="red"
            stroke="darkred"
            points="47.75,18 39.5,42 24.75,17"
          />
        </Svg>
      </View>
    );
  }
}
