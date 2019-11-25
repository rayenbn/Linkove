import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Picker
} from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import * as theme from '../../theme';
import { withNavigation } from 'react-navigation';
import { ThemeColors } from "react-navigation";

class FeedCard2 extends Component {

    _onPressButton = () => {
        return(
            <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        )
    }
    render() {
        const { navigation } = this.props;
        const images = {

            "1": require('../../screens/assets/4.jpg'),
            "2": require('../../screens/assets/6.jpg'),
            "3": require('../../screens/assets/3.jpg')
        }
        return (
            <Card transparent>
                <CardItem>
                    <Left style={{ flexDirection: 'row' ,marginLeft: 0 }}>
                    <TouchableOpacity activeOpacity={0.8}  onPress={() => {navigation.navigate('Activities')}}>
                        <Thumbnail source={require('../../screens/assets/user1.jpg')} />
                    </TouchableOpacity>
                        <Body>
                        <TouchableOpacity activeOpacity={0.8}  onPress={() => {navigation.navigate('Activities')}}>
                            <Text>Varun </Text>
                            <Text note>Jan 15, 2018</Text>
                        </TouchableOpacity>
                        </Body>
                    
                    </Left>
                    <Right>
                    <Menu>
                        <MenuTrigger>
                            <Icon name="md-more" style={{ fontSize: 25, color: '#7A8FA6' }}/>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption onSelect={() => alert(`Share via`)} text='Share via' />
                            <MenuOption onSelect={() => alert(`Hide this post`)} >
                            <Text style={{color: 'red'}}>Hide this post</Text>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Report this post`)} disabled={true} text='Report this post' />
                        </MenuOptions>
                    </Menu>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Text  style={{ flex: 1, fontSize: 16, color: 'black', marginBottom: 20}} >{this.props.description}...</Text>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1, borderRadius: 7}} />
                </CardItem>
                <CardItem cardBody style={{ flex: 1, flexDirection: 'row',  height: 45}}>
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
export default withNavigation(FeedCard2);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});