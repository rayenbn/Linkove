import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Separator extends Component {
    render() {
        return (
            <View
                style={{
                    marginTop: this.props.top,
                    marginBottom: this.props.bottom,
                    borderBottomColor: '#D8D8D8',
                    borderBottomWidth: 1,
                }}
            />
        );
    }
}
export default Separator;