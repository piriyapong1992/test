import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';

const layout = Dimensions.get('window')

export class DetailTop extends Component {
    render() {
        const { dataDesc } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.zonePhoto}>
                    <Image
                        style={styles.img}
                        source={{ uri: dataDesc.photo }} />
                </View>
                <View style={styles.zoneTitle} >
                    <Text style={styles.title}>
                        {dataDesc.title}
                    </Text>
                    <Text>
                        Desciption: {dataDesc.desc}
                    </Text>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        // backgroundColor: '#cecece'
    },
    zonePhoto: {
        flex: 2,
    },
    zoneTitle: {
        flex: 3,
        padding: 10,
    },
    title: {
        fontSize:30
    },
    desc: {
        fontSize:20
    },
    img: {
        borderRadius: 10,
        flex: 1,
        height: layout.height/3,
    }
});
export default DetailTop