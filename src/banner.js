import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import BannerItem from './bannerItem'

import Swiper from 'react-native-swiper';
const layoutBanner = Dimensions.get('window')

export class Banner extends Component {
    render() {
        const { banner } = require('../data/list_item.json')
        return (
            <Swiper
                autoplay={true}
                height={layoutBanner.height / 3.5}
                style={styles.wrapper}
                showsButtons={false}>
                {
                    banner.map((val, key) =>
                        <BannerItem key={key} dataBannerItem={val} />
                    )
                }
            </Swiper>
        );
    }
}
var styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
})
export default Banner
