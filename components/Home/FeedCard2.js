import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View
} from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import * as theme from '../../theme';
import { ThemeColors } from "react-navigation";

class FeedCard2 extends Component {
    render() {
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg')
        }

        return (
            <Card transparent>
                <CardItem>
                    <Left style={{ marginLeft: 0 }}>
                        <Thumbnail source={require('../../screens/assets/user1.jpg')} />
                        <Body>
                            <Text>Varun </Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                    <Right>
                         <Icon name="md-more" style={{ fontSize: 25, color: '#7A8FA6' }} />
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Text  style={{ flex: 1, fontSize: 16, color: 'black', marginBottom: 20}} >{this.props.description}</Text>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1, borderRadius: 7}} />
                </CardItem>
                <CardItem cardBody style={{ flex: 1, flexDirection: 'row',  height: 45 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', marginRight: 10}} >
                        <Button transparent>
                            <Icon name="md-heart" style={{ color: theme.colors.mainColor }} />
                            <Text>{this.props.likes} </Text>
                        </Button>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start'}} >
                        <Button transparent>
                            <Icon name="ios-text" style={{ color: '#7A8FA6' }} />
                            <Text >{this.props.comments} </Text>
                        </Button>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start'}}>
                        <Button transparent>
                          <Icon name="md-share-alt" style={{ color: '#7A8FA6' }} />
                          <Text>{this.props.shares} </Text>
                        </Button>
                    </View>
                    <View style={{ flex: 2}}></View>
                </CardItem>
            </Card>
        );
    }
}
export default FeedCard2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});