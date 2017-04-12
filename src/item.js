import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';


import { Actions } from 'react-native-router-flux'

const boxPadding = 5
const columShow = 3
const box = calPadding(boxPadding, columShow)

function calPadding(boxPadding, columShow) {
    return (((boxPadding * columShow) + boxPadding) / columShow)
}

export class Item extends Component {
    render() {
        const { dataItem } = this.props
        const detils = () => Actions.detail({dataDetail:dataItem})
        return (
            <TouchableOpacity 
            onPress={detils}>
            <View style={styles.item} >
                <Image 
                    style={styles.photo}
                    source={{ uri: dataItem.photo }} >
                    <Text >{dataItem.title}</Text>
                </Image>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "transparent",
        marginLeft: boxPadding,
        marginTop: boxPadding
    },
    photo: {
        width: (Dimensions.get('window').width / columShow) - box,
        height: (Dimensions.get('window').height / columShow),
    }
});

export default Item;