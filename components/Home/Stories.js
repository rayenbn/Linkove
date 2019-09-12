import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View
} from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class Stories extends Component {
    render() {
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg'),
            "user1": require('../../screens/assets/user2.jpg'),
            "user2": require('../../screens/assets/user3.jpg'),
            "user3": require('../../screens/assets/user4.jpg')
        }

        return (
            <Card transparent >
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 70, width: 120, flex: 1, marginRight: 20, borderRadius: 7}} />
                </CardItem>
                <CardItem cardBody>
                    <Left>
                        <Thumbnail source={images[this.props.thumbSource]} style={{marginTop: 10, borderWidth: 2, borderColor: 'pink', height: 30, width: 30}}/>
                        <Body>
                            <Text style={{ fontSize: 12, color: 'grey'}} >{this.props.name}</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
export default Stories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});