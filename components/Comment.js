import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { Thumbnail } from 'native-base';
import * as theme from '../theme';

class Comment extends Component {
    render() {
        const images = {

            "1": require('../screens/assets/user2.jpg'),
            "2": require('../screens/assets/user1.jpg'),
            "3": require('../screens/assets/user3.jpg'),
        }
        return (
            <View style={[styles.row, {flex: 1}]}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Thumbnail source={images[this.props.imageSource]} style={styles.avatar} />
                    <View style={[styles.row, { flexWrap: 'wrap', marginTop: 5 }]} >
                    <Icon name="heart" style={{ color: this.props.likeStatus, fontSize: 18,  }} />
                    <Text style={{color: theme.colors.textGrey}}>{this.props.likes}</Text>
                    </View>
                </View>
                <View style={{ flex: 4, paddingEnd: 10}}>
                    <View style={[styles.row]} >
                        <Text style={{ flex: 4, fontSize: 14, fontWeight: 'bold'}}>{this.props.name}</Text>
                        <Text style={{ flex: 1, fontSize: 14, color: theme.colors.textGrey}}>{this.props.cmtTime}</Text>
                    </View>
                    <Text style={{ fontSize: 12, marginTop: 5}}>{this.props.cmt}</Text>
                </View>
            </View>
        );
    }
}
export default Comment;

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row'
    },
    avatar: {
      width: 55,
      height: 55,
      borderRadius: 30,
    },
  });