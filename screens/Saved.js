import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView,
    
} from "react-native";
import AcitivityListView from '../components/Activities/AcitivityListView'
import Separator from '../components/Separator'

const { height, width } = Dimensions.get('window')
class Saved extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{ marginTop: 40, paddingHorizontal: 20, backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    最受欢迎志愿服务
                            </Text>
                            <View style={{ marginTop: 20 }}>
                                <AcitivityListView width={width}
                                    title="hi湖公园风景和v"
                                    name="绑定通过"
                                    imageSource="3"
                                    city="广州, 记得记得"
                                    distance={4.5}
                                />
                                <Separator top={10} bottom={10} />
                                <AcitivityListView width={width}
                                    title="给法国和德国的"
                                    name="胡云峰"
                                    imageSource="4"
                                    city="广州，公司股东"
                                    distance={4.5}
                                />
                                <Separator top={10} bottom={10} />
                                 <AcitivityListView width={width}
                                    title="hi湖公园风景和v"
                                    name="绑定通过"
                                    imageSource="1"
                                    city="广州, 记得记得"
                                    distance={4.5}
                                />
                                <Separator top={10} bottom={10} />
                                <AcitivityListView width={width}
                                    title="给法国和德国的"
                                    name="胡云峰"
                                    imageSource="2"
                                    city="广州，公司股东"
                                    distance={4.5}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});