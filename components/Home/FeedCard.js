import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class FeedCard extends Component {
    render() {
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../screens/assets/user1.jpg')} />
                        <Body>
                            <Text>Varun </Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="md-heart" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-chatbubbles" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-send" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>varun
                            </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default FeedCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});