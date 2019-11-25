import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Alert, Animated, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
// import { Button} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Entypo';
import Separator from '../components/Separator'
import Comment from '../components/Comment'
import AcitivityListView from '../components/Activities/AcitivityListView'
import * as theme from '../theme';
import { Thumbnail } from 'native-base';
const { width, height } = Dimensions.get('window');


class Article extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" color={theme.colors.white} size={theme.sizes.font * 1} />
          </TouchableOpacity>
            <Menu>
                <MenuTrigger>
                <MaterialIcons name="more-horiz" color={theme.colors.white} size={theme.sizes.font * 1.5} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} >
                    <Text style={{color: 'red'}}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                </MenuOptions>
            </Menu>
        </View>
      ),
      headerTransparent: true,
    }
  }

  
  renderDots = () => {
    const { navigation } = this.props;
    const activity = navigation.getParam('activity');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[ styles.flex, styles.row, styles.dotsContainer ]}>
        {activity.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          )
        })}
      </View>
    )
  }
  renderRatings = (rating) => {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
            style={{ marginRight: 4 }}
          />
        )
      })
    )
  }

  render() {
    const { navigation } = this.props;
    const activity = navigation.getParam('activity');


    return (
      <View style={styles.flex}>
      <ScrollView >
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          >
            {
              activity.images.map((img, index) => 
                <Image
                  key={`${index}-${img}`}
                  source={{ uri: img }}
                  resizeMode='cover'
                  style={{ width, height: width }}
                />
              )
            }
          </ScrollView>
          {this.renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
            <View style={{ flex: 1, flexDirection: 'row'}}>
            <Icon name="location-pin" style={{ fontSize: 20, color: theme.colors.mainColor }} />
                <Text style={{ flex: 4, fontSize: 14, fontWeight: 'bold', color: theme.colors.textGrey }}>
                {activity.location}</Text>
                <View style={{ flex: 1, alignItems:'flex-end'}}>
                    <TouchableOpacity transparent >
                        <Icon name="heart" style={{ fontSize: 22, color: theme.colors.mainColor }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.title}>{activity.title}</Text>
            <View style={[
              styles.row,
              { alignItems: 'center', marginVertical: theme.sizes.margin / 2 }
            ]}>
              <View style={[styles.row, {flex: 1, marginLeft: 10}]}>
                <Image style={{marginTop: 5}} source={require('./assets/icon1.png')}/>
                <View style={{marginLeft: 10, fontWeight: 'bold'}}>
                  <Text >离你</Text>
                  <Text style={{ fontSize: 16,fontWeight: 'bold'}}>{activity.distance} km</Text>
                </View>
              </View>

              <View style={[styles.row, {flex: 1, marginLeft: 10}]}>
                <Image style={{marginTop: 5}} source={require('./assets/icon2.png')}/>
                <View style={{marginLeft: 10, fontWeight: 'bold'}}>
                  <Text >集中时间</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{activity.departure_time} AM</Text>
                </View>
              </View>

              <View style={[styles.row, {flex: 1, marginLeft: 10}]}>
                <Image style={{marginTop: 5}} source={require('./assets/icon3.png')}/>
                <View style={{marginLeft: 10, fontWeight: 'bold'}}>
                  <Text >需时</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{activity.duration}h</Text>
                </View>
              </View>
              
            </View>
            <View style={[
              styles.row,
              { alignItems: 'center', marginVertical: theme.sizes.margin / 2 }
            ]}>
              {/* {this.renderRatings(3)} */}
              <Text style={{ color: 'grey', fontSize: 16}}>
              此项志愿服务主要服务内容是教授儿童外语，以
              及照顾看管儿童，其对象的年龄是5-10岁，
              服务地点将会在教室内，服务时间大约4小时，
              服务过程中有课间休息时间。每次服务前需要准备
              教学内容及课件，以及适当的教具，协助儿童更有效
              地学习外语。义工志愿者要求有爱心，热情积极，
              外语掌握程度为英语4级或以上。
              </Text>
            </View>
            <TouchableOpacity style={[{ width: "100%",  backgroundColor: theme.colors.mainColor 
            , borderRadius: 12, alignItems: 'center' }]} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={{  color: 'white', fontSize: 20,fontWeight: 'bold', padding: 10}}>我 想 加 入</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'white'}}>
            <Text style={{fontSize: 18, fontWeight:'bold', marginLeft: 10, paddingVertical: 10,}}>评论 (3)</Text>
          
          <Separator top={10} bottom={10} />
          <Comment imageSource='2'
                   name='冯 珍妮'
                   cmt='项志愿服务主要服务内容是教授儿童外语，主要服务内容是教授儿童外'
                   cmtTime='8h ago'
                   likes='23'
                   likeStatus= {theme.colors.mainColor}
                   />
          <Separator top={10} bottom={10} />
          <Comment imageSource='1'
                   name='冯 珍妮'
                   cmt='项志愿服务主要服务内容是教授儿童外语'
                   cmtTime='12h ago'
                   likes=''
                   likeStatus= {theme.colors.gray}
                   />
          <Separator top={10} bottom={10} />
          <Comment imageSource='3'
                   name='冯 珍妮'
                   cmt='项志愿服务主要服务内容是教授儿童外语，主要服务内容是教授儿童外'
                   cmtTime='34m ago'
                   likes='4'
                   likeStatus= {theme.colors.mainColor}
                   />
          <Separator top={10} bottom={10} />
          <View style={[styles.row, {flex: 1}]}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Thumbnail source={require('./assets/user1.jpg')} style={styles.avatar} />
                </View>
                <View style={{ flex: 4, paddingBottom: 20, paddingEnd: 10}}>
                  <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Add a comment"
                      placeholderTextColor="grey" 
                      style={{ fontWeight: '700', paddingLeft:15, borderRadius: 50 ,backgroundColor: theme.colors.bgGrey }}
                  />
                </View>
            </View>
          </View>
          <View style={{ marginTop: 18, paddingHorizontal: 20, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
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
              </View>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default Article;

const styles = StyleSheet.create({
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
      // backgroundColor: 'transparent',
      paddingHorizontal: theme.sizes.padding,
      paddingTop: theme.sizes.padding,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    back: {
      width: theme.sizes.base * 3,
      height: theme.sizes.base * 3,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    content: {
      // backgroundColor: theme.colors.active,
      // borderTopLeftRadius: theme.sizes.border,
      // borderTopRightRadius: theme.sizes.border,
    },
    contentHeader: {
      backgroundColor: 'transparent',
      padding: theme.sizes.padding,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: theme.sizes.radius,
      borderTopRightRadius: theme.sizes.radius,
      marginTop: -theme.sizes.padding / 2,
    },
    avatar: {
      width: 55,
      height: 55,
      borderRadius: theme.sizes.padding,
      
    },
    shadow: {
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    dotsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 36,
      right: 0,
      left: 0
    },
    dots: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 6,
      backgroundColor: theme.colors.gray,
    },
    title: {
      fontSize: theme.sizes.font * 2,
      fontWeight: 'bold',
      marginTop: 10
    },
    description: {
      fontSize: theme.sizes.font * 1.2,
      lineHeight: theme.sizes.font * 2,
      color: theme.colors.caption
    }
  });