import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import HeaderCard from "../components/Profile/HeaderCard";
import ProfileMenu from "../components/Profile/ProfileMenu";

const { height, width } = Dimensions.get('window')
class Profile extends Component {
    render() {
        return (
            <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white'}}>
                 
                        <View style={{  backgroundColor: 'red'}}>
                            <Image
                                style={{ flex: 1, width: width, height: height / 3, resizeMode: 'cover', opacity: 0.8 }}
                                source={require('./assets/10.jpg')} />
                                
                        </View>
                        <View style={{ top: -80 }}>
                            <HeaderCard width={width}/>
                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity>
                                    <ProfileMenu cardText='我的义工体验'/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <ProfileMenu cardText='设置'/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <ProfileMenu cardText='邀请好友'/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <ProfileMenu cardText='帮助'/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <ProfileMenu cardText='反馈建议'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
                </ScrollView> 
            </SafeAreaView>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});