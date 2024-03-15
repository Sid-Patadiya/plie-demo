/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import appColors from '../utils/appColor';
import {Images} from '../utils/images';
import {Image, StatusBar, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Tab.Navigator
        initialRouteName="Event"
        screenOptions={({route}) => ({
          tabBarShowLabel: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {},
          tabBarIconStyle: {marginTop: 10},
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({focused}) => {
            let iconName = Images.search;
            if (route.name === 'Search') {
              iconName = Images.search;
            } else if (route.name === 'Event') {
              iconName = Images.calendar;
            } else if (route.name === 'Favourites') {
              iconName = Images.heart;
            } else if (route.name === 'Profile') {
              iconName = Images.user;
            }
            return (
              <Image
                source={iconName}
                style={styles.iconStyle}
                resizeMode={'contain'}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        />
        <Tab.Screen name="Event" component={HomeScreen} />
        <Tab.Screen
          name="Favourites"
          component={HomeScreen}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    height: 25,
    width: 25,
    marginVertical: 20,
  },
  tabBarLabelStyle: {
    color: appColors.black,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
});
