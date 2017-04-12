import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper';
const layoutBanner = Dimensions.get('window')

export class BannerItem extends Component {
    render() {
        const { dataBannerItem } = this.props
        return (
            <View style={styles.slide}>
                <Image style={styles.photo}
                    source={{ uri: dataBannerItem.photo }}>
                    <View>
                        <Text style={styles.title}>
                            {dataBannerItem.title}
                        </Text>
                    </View>
                </Image>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    slide: {
        flex: 1,
    },
    photo: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textShadowColor: '#000',
        textAlign: 'center',
        // backgroundColor:'#fff',
        textShadowRadius:10,
        fontSize: 30,
        fontWeight: 'bold',
        color: "#fff"
    }
})
export default BannerItem
