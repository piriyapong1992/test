import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import MenuHead from './menuHead'
import ListItems from './listItems'
import Banner from './banner';

export class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MenuHead style={{flex:1}} />
          <Banner style={{flex:1}} />
          <ListItems style={{flex:1}} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
});
export default Home
