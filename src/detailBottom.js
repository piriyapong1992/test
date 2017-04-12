import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class DetailBottom extends Component {
    render() {
        const {dataDetail} = this.props
        return (
            <View style={styles.constainer}>
                <View>
                    <Text style={styles.head}>Story</Text>
                </View>
                <View>
                    <Text>
                        {dataDetail.detail}
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    constainer:{
        flex:1,
        padding:10,
        backgroundColor:'#eee'
    },
    head:{
        fontSize:20,
    }
});
export default DetailBottom