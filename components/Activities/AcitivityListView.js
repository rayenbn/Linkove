import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

class AcitivityListView extends Component {
    render() {
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg'),
            "4": require('../../screens/assets/8.jpg')
        }
        return (
            <View style={{ flex: 1, height: 120, borderRadius: 5}}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, borderRadius: 12, resizeMode: 'cover' }}
                        source={images[this.props.imageSource]} />
                   
                    <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                        <View style={{ flex:1 }}>
                        <Text style={{ fontSize: 16, color: '#b63838'}}>{this.props.title}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row'}}>
                            <Icon name="location-pin" style={{ fontSize: 18, color: '#DC1A72' }} />
                            <Text style={{ flex: 3, fontSize: 12 }}>{this.props.city}</Text>
                            <Text style={{ flex: 1, fontSize: 12 }}>{this.props.distance}KM</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row'}}>
                            <Text style={{ flex: 4, fontSize: 14, fontWeight: 'bold', color: 'grey'}}>{this.props.name}</Text>
                           <View style={{ flex: 1}}>
                                <TouchableOpacity transparent >
                                    <Icon name="heart" style={{ fontSize: 18, color: '#DC1A72' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View> 
            </View>
        );
    }
}
export default AcitivityListView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});