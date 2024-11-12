import React from 'react';
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

const BottomBar = createBottomTabNavigator();

const GuestNavigator = () => {
  return (
    <BottomBar.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && <View style={styles.xFillLine} />}
        </View>
      )}
      initialRouteName={languageTxt?.reactStackKeys?.auth?.name}
      screenOptions={{
        tabBarActiveTintColor: colorConstants?.gold,
        tabBarInactiveTintColor: colorConstants?.gray,
        headerShown: false,
      }}>
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.guest?.aboutus?.name}
        component={AboutusNavigator}
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
        component={WhatWeDoNavigator}
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
            <TabBarAdvancedButton bgColor={colorConstants?.iconBg} {...props} />
          ),
        }}
      />
      <BottomBar.Screen
        name={languageTxt?.reactStackKeys?.guest?.weServeYou?.name}
        component={WeServeYouNavigator}
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
        name={languageTxt?.reactStackKeys?.guest?.downloads?.name}
        component={DownloadsNavigator}
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
