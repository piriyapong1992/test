import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Apps from './src/apps'

export default class movie extends Component {
  render() {
    return (
        <Apps />
    );
  }
}


AppRegistry.registerComponent('movie', () => movie);
