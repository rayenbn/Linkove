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
class Activity extends Component {
    render() {
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg'),
            "4": require('../../screens/assets/8.jpg')
        }
        return (
            <View style={{ width: this.props.width / 2 - 30, height: (this.props.width / 3) * 2 - 30, marginTop: 10,  borderRadius: 5 }}>
                <View style={{ flex: 2 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null,borderRadius: 12, resizeMode: 'cover' }}
                        source={images[this.props.imageSource]} />
                         <View style={{ position: 'absolute', right: 5 , top: 5 }}>
                            <TouchableOpacity transparent >
                                <Icon name="md-heart" style={{ color: '#DC1A72' }} />
                            </TouchableOpacity>
                         </View>
                </View> 
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 14, color: '#b63838' }}>{this.props.type}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 2, fontSize: 10 }}>{this.props.city}</Text>
                        <Text style={{ flex: 1, fontSize: 10 }}>34KM</Text>
                    </View>
                    {/* <StarRating
                        disable={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                    /> */}
                </View>
            </View>
        );
    }
}
export default Activity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});