import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {IS_IPHONE_X} from '../../utils/utils';
import {languageTxt} from '../../utils/constants/languageTxt';
import {colorConstants} from '../../utils/constants/colorConstants';
import {dimensionConstants} from '../../utils/constants/dimensionConstants';

import AuthNavigator from './AuthNavigator';
import AboutusNavigator from './AboutusNavigator';
import WhatWeDoNavigator from './WhatWeDoNavigator';
import WeServeYouNavigator from './WeServeYouNavigator';
import DownloadsNavigator from './DownloadsNavigator';

import TabBarAdvancedButton from '../../components/shared/TabBarAdvancedButton';
import { useAuthentication } from '../../utils/globalHooks';
import HomeNavigator from '../UserNavigator/HomeNavigator';
import Login from '../../components/screens/GuestScreens/Login';

const BottomBar = createBottomTabNavigator();

const GuestNavigator = () => {
const { data: authData }: any = useAuthentication();

  return (
    <BottomBar.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && <View style={styles.FillLine} />}
        </View>
      )}
      initialRouteName={languageTxt?.reactStackKeys?.auth?.name}
      screenOptions={{
        tabBarActiveTintColor: colorConstants?.gold,
        tabBarInactiveTintColor: colorConstants?.gray,
        headerShown: false,
      }}>
      <BottomBar.Screen        
        // name={"ABOUTUS"}
        name={languageTxt?.reactStackKeys?.guest?.aboutus?.name}        
        // component={HomeNavigatorL}  
        component={Login}  
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={dimensionConstants?.iconSmall}              
            />
          ),
        }}
        
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.guest?.whatWeDo?.name}
        // name={"WHATWEDO"}
        // component={WhatWeDoNavigator}
        component={Login}  
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cogs"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.auth?.name}
        component={AuthNavigator}
        options={{
          tabBarButton: props => (
            <TabBarAdvancedButton bgColor={colorConstants.primary} {...props} />
          ),
        }}
      />
      <BottomBar.Screen
        // name={"WESERVEYOU"}
        name={languageTxt?.reactStackKeys?.guest?.weServeYou?.name}        
        // component={WeServeYouNavigator}
        component={Login}  
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="hand-heart"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
      <BottomBar.Screen
        // name={"DOWNLOAD"}
        name={languageTxt?.reactStackKeys?.guest?.downloads?.name}
        // component={DownloadsNavigator}
        component={Login}  
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="download"
              color={color}
              size={dimensionConstants?.iconSmall}
            />
          ),
        }}
      />
    </BottomBar.Navigator>
  );
};

export default GuestNavigator;
