import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    ImageBackground,
    Dimensions,
    Animated,
    TouchableOpacity,
    FlatList
} from "react-native";
import { Container, Header, Item, Input, Button } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Activities/Category'
import Activity from '../components/Activities/Activity'
import ActivityLarge from '../components/Activities/ActivityLarge'
import MenuTags from '../components/MenuTags'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import * as theme from '../theme';

const { height, width } = Dimensions.get('window')

const mocks = [
    {
      id: 1,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: true,
      location: '中国，广州市，海珠区江南西路广义大厦1601',
      distance: 4.5,
      departure_time: '9:00',
      duration: 4,
      title: '外语教学',
      description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
      rating: 4.3,
      reviews: 3212,
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
      saved: false,
      location: '中国，广州市，海珠区江南西路广义大厦1601',
      distance: 4.5,
      departure_time: '9:00',
      duration: 4,
      title: '外语教学',
      description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
      rating: 4.3,
      reviews: 3212,
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
      distance: 4.5,
      departure_time: '9:00',
      duration: 4,
      title: '外语教学',
      description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
      rating: 4.3,
      reviews: 3212,
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
      distance: 4.5,
      departure_time: '9:00',
      duration: 4,
      title: '外语教学',
      description: '此项志愿服务主要服务内容是教授儿童外语，以及照顾看管儿童，其对象的年龄是5-10岁，服务地点将会在教室内，服务时间大约4小时, 服务过程中有课间休息时间。每次服务前需要准备教学内容及课件，以及适当的教具，协助儿童更有效地学习外语。义工志愿者要求有爱心，热情积极，外语掌握程度为英语4级或以上。',
      rating: 4.3,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
      ]
    },
  ]

class Activities extends Component {
    scrollX = new Animated.Value(0);
    componentDidMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
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
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }

    renderDots() {
        const { destinations } = this.props;
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
          <View style={[
            styles.flex, styles.row,
            { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
          ]}>
            {destinations.map((item, index) => {
              const borderWidth = dotPosition.interpolate({
                inputRange: [index -1, index, index + 1],
                outputRange: [0, 2.5, 0],
                extrapolate: 'clamp'
              });
              return (
                <Animated.View
                  key={`step-${item.id}`}
                  style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
                />
              )
            })}
          </View>
        )
      }

    renderActivities = () => {
        return (
          <View style={[ styles.column, styles.destinations ]}>
            <FlatList
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              style={{ overflow:'visible', height: 280 }}
              data={this.props.destinations}
              keyExtractor={(item, index) => `${item.id}`}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
              renderItem={({ item }) => this.renderActivity(item)}
            />
            {this.renderDots()}
          </View>
        );
      }

      renderActivity = item => {
        const { navigation } = this.props;
        return (
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ActivityDetails', { activity: item })}>
            <ImageBackground
              style={[styles.flex, styles.destination, styles.shadow]}
              imageStyle={{ borderRadius: theme.sizes.radius }}
              source={{ uri: item.preview }}
            >
              {/* <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <View style={{ flex: 0 }}>
                  <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                </View>
                <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }]}>
                  <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>{item.user.name}</Text>
                  <Text style={{ color: theme.colors.white }}>
                    <Octicons
                      name="location"
                      size={theme.sizes.font * 0.8}
                      color={theme.colors.white}
                    />
                    <Text> {item.location}</Text>
                  </Text>
                </View>
                <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View> */}
            </ImageBackground>
              <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
                <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
                  {item.title}
                </Text>
                <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                  <Text style={{ color: theme.colors.caption }}>
                    {item.description.split('').slice(0, 30)}...
                  </Text>
                  <FontAwesome
                    name="chevron-right"
                    size={theme.sizes.font * 0.75}
                    color={theme.colors.caption}
                  />
                </View>
              </View>
          </TouchableOpacity>
        )
      }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
             
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 }, alignItems: 'center',
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey" 
                                style={{ fontWeight: '700', paddingLeft:15, backgroundColor: 'white' }}
                            />
                        </View>
                        <Animated.View
                            style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                        >
                            <MenuTags name="Guests" />
                            <MenuTags name="Dates" />

                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        {/* <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you find, Varun?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('./assets/3.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('./assets/9.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('./assets/8.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                        </View> */}
                        {this.renderActivities()}
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Homes around the world
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Activity width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    imageSource="3"
                                    city="广州"
                                    // rating={4}
                                />
                                <Activity width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    imageSource="1"
                                    city="广州"
                                    // rating={4}
                                />
                                <Activity width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    imageSource="2"
                                    city="广州"
                                    // rating={4}
                                />
                                <Activity width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    imageSource="4"
                                    city="广州"
                                    // rating={4}
                                />

                            </View>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20, backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort
                                </Text>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('ActivityDetails')}>
                                <ActivityLarge width={width}
                                    title="和德国德国"
                                    desc="和恢复合肥符合和废话覅欸合肥二hi覅和夫人回房后人"
                                    imageSource="1"
                                    city="广东，广州"
                                />
                                </TouchableOpacity>
                                <ActivityLarge width={width}
                                    title="和德国德国"
                                    desc="和恢复合肥符合和废话覅欸合肥二hi覅和夫人回房后人"
                                    imageSource="3"
                                    city="广东，广州"
                                />
                                
                        </View>
                        
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
Activities.defaultProps = {
    destinations: mocks
  };
export default Activities;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flex: 0,
      },
      column: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      },
      header: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.sizes.padding,
        paddingTop: theme.sizes.padding * 1.33,
        paddingBottom: theme.sizes.padding * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      articles: {
      },
      destinations: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 15,
      },
      destination: {
        width: width - (theme.sizes.padding * 2),
        height: width * 0.6,
        marginHorizontal: theme.sizes.margin,
        paddingHorizontal: theme.sizes.padding,
        paddingVertical: theme.sizes.padding * 0.66,
        borderRadius: theme.sizes.radius,
      },
      destinationInfo: {
        position: 'absolute',
        borderRadius: theme.sizes.radius,
        paddingHorizontal: theme.sizes.padding,
        paddingVertical: theme.sizes.padding / 2,
        bottom: 20,
        left: (width - (theme.sizes.padding * 5)) / (Platform.OS === 'ios' ? 3.2 : 3),
        backgroundColor: theme.colors.white,
        width: width - (theme.sizes.padding * 4),
      },
      avatar: {
        width: theme.sizes.padding,
        height: theme.sizes.padding,
        borderRadius: theme.sizes.padding / 2,
      },
      shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
      },
      dots: {
        width: 10,
        height: 10,
        borderWidth: 2.5,
        borderRadius: 5,
        marginHorizontal: 6,
        backgroundColor: theme.colors.gray,
        borderColor: 'transparent',
      },
      activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        borderColor: theme.colors.active,
      }
});