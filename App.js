/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator,createBottomTabNavigator,createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuProvider } from 'react-native-popup-menu';
import Home from './screens/Home'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Activities from './screens/Activities'
import Profile from './screens/Profile'
import Article from './screens/Article'
import NewsDetail from './screens/NewsDetail'

export default class App extends React.Component {
  render() {
    return (
      <MenuProvider>
        <AppContainer/>
      </MenuProvider>
    );
  }
}
const NewsStacNav = createStackNavigator({
  Home: {
    screen: Home,
    headerMode: 'none',
    navigationOptions: {
      // header : null  
      headerTitle: 'Linkove',
    }
  },
  NewsDetails: {
    screen: NewsDetail,
    navigationOptions: {
      headerTitle: 'Details',
    }
  }
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1
    },
  },
}
)
const ActivitiesStacNav = createStackNavigator({
  Activities: {
    screen: Activities,
    headerMode: 'none',
    navigationOptions: {
      header : null  
      // headerTitle: 'Activities',
    }
  },
  ActivityDetails: {
    screen: Article,
  },
},
{
  initialRouteName: 'Activities',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1
    },
  },
}
)
const TabNavigator = createBottomTabNavigator({
  
  Home: {
    screen: NewsStacNav,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" color={tintColor} size={24} />
        
      )
    }
  },
  Activities: {
    screen: ActivitiesStacNav,
    navigationOptions: {
      tabBarLabel: 'Activities',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-heart" color={tintColor} size={24} />
      )
    }
  },
  
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-heart" color={tintColor} size={24} />
        // <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-person" color={tintColor} size={24} />
      )
    }
  }
},
{
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        // headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

  const DashboardStacNav = createStackNavigator({
    DashboardTabNavigator: TabNavigator
  //   Activities: {
  //     screen: Activities,
  //     headerMode: 'none',
  //     navigationOptions: {
  //       header : null  
  //       // headerTitle: 'Activities',
  //     }
  //   },
  //   ActivityDetails: {
  //     screen: Article,
  //   },
  //   NewsDetails: {
  //     screen: News,
  //   }
  // },
  // {
  //   initialRouteName: 'DashboardTabNavigator',
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#fff',
        
  //     },
  //     headerTintColor: '#000',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //       alignSelf: 'center',
  //       textAlign: 'center',
  //       flex: 1
  //     },
  //   },
  }
  )

const AppContainer= createAppContainer(DashboardStacNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});