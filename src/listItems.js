import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';

import Item from './item'

export class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        // const { items } = this.state
        const { items } = require('../data/list_item.json');
        return (
            <View style={styles.container} >
                {
                    items.map((val, key) => <Item dataItem={val} key={key} /> )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default ListItems;