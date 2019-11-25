import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, SafeAreaView, ScrollView, TouchableOpacity,Animated,Platform, StatusBar, } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as theme from '../theme';
import ChatListCard from '../components/ChatListCard'
import SearchBar from '../components/SearchBar'

class Inbox extends Component {

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
            outputRange: [40, 30],
            extrapolate: 'clamp'
        })
    }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <SearchBar animatedHeaderHeight={60}
            animatedTagTop= {10} 
            animatedOpacity={1}
        />
            <ScrollView >
            <View style={{ flex: 1, flexDirection: 'row',marginTop: 5,marginBottom:5, paddingHorizontal: 20,}}>
                <View style={{flex: 2, justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            My Chats
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end',backgroundColor: 'white',justifyContent: 'center'}}>
                  <View elevation={9} style={{width: 47, height: 47,justifyContent: 'center',alignItems: 'center' ,backgroundColor: '#FFFFFF', borderRadius: 50,}}>
                      <View style={{width: 40, height: 40,justifyContent: 'center',alignItems: 'center' ,backgroundColor: '#2FBBF0', borderRadius: 25}}>
                      <FontAwesome5
                        name="plus"
                        size={22}
                        color='#fff'
                      />
                      </View>
                  </View>
                </View>
            </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
                    
                    <View style={{ marginTop: 10 }}>
                      <ChatListCard imageSource='2'
                        name='冯 珍妮'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                        <ChatListCard imageSource='1'
                        name='Alex'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                        <ChatListCard imageSource='3'
                        name='Fish rogger'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                      <ChatListCard imageSource='2'
                        name='冯 珍妮'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                      <ChatListCard imageSource='1'
                        name='冯妮'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                      <ChatListCard imageSource='3'
                        name='Fish rogger'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                      <ChatListCard imageSource='2'
                        name='冯 珍妮'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                      <ChatListCard imageSource='1'
                        name='冯妮'
                        cmt='项志愿服务主要服务内容是教..'
                        cmtTime='8h ago'
                      />
                    </View>
                </View>
            </ScrollView>
    </SafeAreaView>
    )
  }
}

export default Inbox;

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
    avatar: {
      width: 55,
      height: 55,
      borderRadius: theme.sizes.padding,
      
    },
  });