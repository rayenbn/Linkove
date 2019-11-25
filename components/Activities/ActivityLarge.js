import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { Button, Icon } from 'native-base'
import StarRating from 'react-native-star-rating'
class ActivityLarge extends Component {
    render() {
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg'),
            "4": require('../../screens/assets/8.jpg')
        }
        return (
            <View style={{ width: this.props.width - 40, height: 300, marginTop: 30 }}>
                <View style={{ flex: 2 }}>
                    <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                        source={images[this.props.imageSource]}
                    />
                    <View style={{ position: 'absolute', right: 8 , top: 5 }}>
                        <TouchableOpacity transparent >
                            <Icon name="md-heart" style={{ color: (this.props.saved ? '#DC1A72' : '#fff') }} />
                        </TouchableOpacity>
                    </View>
                   
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', marginTop: 10, paddingLeft: 10 }}>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <Text style={{ flex: 2, fontSize: 18, fontWeight: 'bold', color: '#DC1A72' }}>{this.props.title}</Text>
                        <Text style={{ flex: 1, fontSize: 14, color: 'grey'}}>{this.props.city}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16 }}>{this.props.desc.split('').slice(0, 30)}...</Text>
                    </View>
                </View>
                
            </View>
        );
    }
}
export default ActivityLarge;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});