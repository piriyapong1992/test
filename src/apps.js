import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import Home from './home'
import Detail from './detail'
import MenuHead from './menuHead'

export class Apps extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key='root'>
          <Scene
            key='home'
            component={Home}
            title='home'
            initial></Scene>
          <Scene
            key='detail'
            component={Detail}
            title='detail'>
          </Scene>
           <Scene
            key='menuHead'
            component={MenuHead}
            title='menuHead'></Scene>
        </Scene>
      </Router>
    );
  }
}


export default Apps
