import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View
} from "react-native";
import {  Card, Icon } from 'native-base'

class ProfileMenu extends Component {
    render() {

        return (
            <View  style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: 'white', borderRadius: 2, marginStart: 15, minHeight:80,
            marginEnd: 15, borderColor: '#EBEEF7', borderWidth: 2 }}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Icon  name="md-clipboard" style={{ padding: 15, marginRight: 10, backgroundColor: '#DC1A72', opacity: 0.3, borderRadius: 25, fontSize: 25, color: 'red',}} />
                </View>
                <View style={{flex: 3}}>
                    <Text style={{ fontSize: 16}}>{this.props.cardText} </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Icon name="ios-arrow-forward" style={{ fontSize: 25, color: '#DC1A72' }} />
                </View>
            </View>
        );
    }
}
export default ProfileMenu;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});