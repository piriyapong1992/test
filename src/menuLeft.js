import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


export class MenuLeft extends Component {
    render() {
        return (
            <View>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 1]}
                    colors={['#d70d52', '#e43a2c']}
                    style={styles.container}>
                    <Text style={styles.headTitle}>Menu</Text>
                    <Text style={styles.headTitle}>Logo</Text>
                    <Text style={styles.headTitle}>Search</Text>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 45,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e43a2c',
    },
    headTitle: {
        color: '#ffffff',
        padding: 5
    },
});

export default MenuLeft;