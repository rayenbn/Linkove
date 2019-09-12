import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ImageBackground,
    Dimensions,
    Animated,
    TouchableOpacity,
    FlatList
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import * as theme from '../../theme';

const { height, width } = Dimensions.get('window')

const mocks = [
    {
      id: 1,
      user: {
        name: 'Lelia Chavez',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      saved: true,
      location: 'Santorini, Greece',
      temperature: 34,
      title: '克都可看到',
      description: '打开了法克法克都可看到被扣分本办法，放不放假被军方背景部分金额不符基本发表能否加快步伐加快步伐居然被警方北京日报',
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
      location: 'tunisia',
      temperature: 34,
      title: '都可看到被',
      description: '打开了法克法克都可看到被扣分本办法，放不放假被军方背景部分金额不符基本发表能否加快步伐加快步伐居然被警方北京日报',
      rating: 4.6,
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
      location: 'greece',
      temperature: 34,
      title: '都可看，到被',
      description: '打开了法克法克都可看到被扣分本办法，放不放假被军方',
      rating: 3.2,
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
      location: 'Loutraki, Greece',
      temperature: 34,
      title: '法克都可',
      description: '打开了法克法克都可看到被扣，伐加快步伐居然被警方北京日报',
      rating: 5,
      reviews: 3212,
      preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
      ]
    },
  ]

class Slider extends Component {
    scrollX = new Animated.Value(0);
    
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
    renderActivity = item => {
        const { navigation } = this.props;
        return (
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ActivityDetails', { ActivityDetails: item })}>
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
}
export default Slider;

Activities.defaultProps = {
    destinations: mocks
};

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