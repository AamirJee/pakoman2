import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {languageTxt} from '../../../utils/constants/languageTxt';

import Home from '../../../components/screens/UserScreen/Home';
import Profile from '../../../components/screens/Profile';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={languageTxt?.reactStackKeys?.user?.home?.screen}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.user?.home?.screen}
          component={Home}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.profile}
          component={Profile}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
