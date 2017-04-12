import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import MenuHead from './menuHead'
import DetailTop from './detailTop'
import DetailBottom from './detailBottom';

export class Detail extends Component {
    render() {
        const { dataDetail } = this.props
        return (
            <ScrollView>
                <MenuHead />
                <DetailTop dataDesc={dataDetail} />
                <DetailBottom dataDetail={dataDetail} />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default Detail
