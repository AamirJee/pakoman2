import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/GuestScreens/Aboutus/Menu';
import WhoWeAre from '../../../components/screens/GuestScreens/Aboutus/WhoWeAre';
import CodeofConduct from '../../../components/screens/GuestScreens/Aboutus/CodeofConduct';
import Policies from '../../../components/screens/GuestScreens/Aboutus/Policies';
import PolicyDetail from '../../../components/screens/GuestScreens/Aboutus/Policies/PolicyDetail';

const AboutusNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={languageTxt?.reactStackKeys?.guest?.aboutus?.menus}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.aboutus?.menus}
          component={Menus}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.aboutus?.whoWeAre}
          component={WhoWeAre}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.aboutus?.codeofConduct}
          component={CodeofConduct}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.aboutus?.policies}
          component={Policies}
        />

        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.aboutus?.policyDetail}
          component={PolicyDetail}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AboutusNavigator;
