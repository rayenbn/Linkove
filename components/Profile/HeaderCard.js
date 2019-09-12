import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View
} from "react-native";
import {Thumbnail} from 'native-base'

class HeaderCard extends Component {
    render() {
        const images = {
            "1": require('../../screens/assets/4.jpg'),
        }

        return (
            <View style={StyleSheet.flatten([styles.cardStyle,{minWidth: this.props.width - 30,}])}>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <View style={{top: -55, alignItems: 'center'}}>
                        <Thumbnail source={require('../../screens/assets/user1.jpg')} style={styles.thumStyle} />
                        <Text style={{fontSize: 24, marginTop: 20, fontWeight: 'bold'}} >冯 珍妮</Text>
                        <Text style={{fontSize: 16, marginTop: 10, alignItems: 'center',fontWeight: 'bold', color: '#DC1A72'}} >中国  ,  广州</Text>
                    </View>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', top: -20}}>
                        <View style={{flex: 1,  alignItems: 'center'}}>
                            <Text style={{color: 'grey', fontSize: 12}}>收藏夹</Text>
                            <Text style={{fontSize: 20, marginTop: 5}}>3234</Text>
                        </View>
                        <View style={{flex: 1,  alignItems: 'center'}}>
                            <Text style={{color: 'grey'}}>足迹</Text>
                            <Text style={{marginTop: 5, fontSize: 20}}>34h</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{color: 'grey'}}>已完成</Text>
                            <Text style={{marginTop: 5, fontSize: 20}}>334</Text>
                        </View>
                        <View style={{flex: 1,  alignItems: 'center'}}>
                            <Text style={{color: 'grey'}}>待完成</Text>
                            <Text style={{marginTop: 5, fontSize: 20}}>280</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default HeaderCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyle: {
        backgroundColor: 'white', 
        marginStart: 15, 
        marginEnd: 15, 
        borderRadius: 7, 
        minHeight: 240, 
        // position: 'absolute', 
        // top: -80, 
        padding: 10
    },
    thumStyle: {
        height: 120, 
        width: 120, 
        borderWidth: 2, 
        borderColor: 'white',
        borderRadius: 60,
        // position: 'absolute',
        // top: -55
         
    }
});