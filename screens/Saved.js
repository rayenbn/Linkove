import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Animated,
    TextInput,
    Platform,
    StatusBar,
    TouchableOpacity
    
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AcitivityListView from '../components/Activities/AcitivityListView'
import Separator from '../components/Separator'
import SearchBar from '../components/SearchBar'
import * as theme from '../theme'

const { height, width } = Dimensions.get('window')
class Saved extends Component {

    constructor() {
        super()
        this.state = {
            FavoriteData: []
        }
    }

    scrollX = new Animated.Value(0);
    componentDidMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 60
        this.endHeaderHeight = 30
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 50 + StatusBar.currentHeight
            this.endHeaderHeight = 30 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 30],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [20, 0],
            extrapolate: 'clamp'
        })

        this.setState({
            FavoriteData : [
                {
                    id: 1,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    },
                    saved: true,
                    location: '中国，广州市，海珠区江南西路广义大厦1601',
                    city: '广州',
                    distance: 4.5,
                    departure_time: '9:00',
                    duration: 4,
                    title: '外语教学',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    rating: 4.3,
                    reviews: 3212,
                    type: "PRIVATE ROOM - 2 BEDS",
                    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    ]
                  },
                  {
                    id: 2,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    },
                    saved: true,
                    location: '中国，广州市，海珠区江南西路广义大厦1601',
                    city: '广州',
                    distance: 4.5,
                    departure_time: '9:00',
                    duration: 4,
                    title: '外语教学',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    rating: 4.3,
                    reviews: 3212,
                    type: "PRIVATE ROOM - 2 BEDS",
                    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
                    ]
                  },
                  {
                    id: 3,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    },
                    saved: true,
                    location: '中国，广州市，海珠区江南西路广义大厦1601',
                    city: '广州',
                    distance: 4.5,
                    departure_time: '9:00',
                    duration: 4,
                    title: '外语教学',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    rating: 4.3,
                    reviews: 3212,
                    type: "PRIVATE ROOM - 2 BEDS",
                    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                    ]
                  },
                  {
                    id: 4,
                    user: {
                      name: 'Lelia Chavez',
                      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    },
                    saved: false,
                    location: '中国，广州市，海珠区江南西路广义大厦1601',
                    city: '广州',
                    distance: 4.5,
                    departure_time: '9:00',
                    duration: 4,
                    title: '外语教学',
                    description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
                    rating: 4.3,
                    type: "PRIVATE ROOM - 2 BEDS",
                    reviews: 3212,
                    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
                    images: [
                      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
                    ]
                  },
            ]
        })

    }
    updateFavoriteStatus= (index) => {
        //here you can add your logic to update your state / update your backend
        alert('add your logic to update the Fav',{index})
    }
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <SearchBar animatedHeaderHeight={this.animatedHeaderHeight}
                               animatedTagTop= {this.animatedTagTop} 
                               animatedOpacity={this.animatedOpacity}
                    />
                    <ScrollView 
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}>
                        <View style={{ marginTop: 20, paddingHorizontal: 20, backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    最受欢迎志愿服务
                            </Text>
                            <View style={{ marginTop: 20 }}>
                            {this.state.FavoriteData.map((data, i)=> {
                                return (
                                <TouchableOpacity activeOpacity={0.8} key={i} >
                                    <AcitivityListView width={width}
                                        UpdateFavEvent={()=>this.updateFavoriteStatus(i)}
                                        imageSource={data.id}
                                        title={data.description.split('').slice(0, 12)} 
                                        name={data.user.name}
                                        city={data.city}
                                        distance={data.distance}
                                        saved={data.saved}
                                    />
                                    <Separator top={10} bottom={10} />
                                </TouchableOpacity>
                                )}
                            )}
                                {/* <AcitivityListView width={width}
                                    title="hi湖公园风景和v"
                                    name="绑定通过"
                                    imageSource="3"
                                    city="广州, 记得记得"
                                    distance={4.5}
                                />
                                <Separator top={10} bottom={10} /> */}
                                
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