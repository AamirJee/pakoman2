import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/GuestScreens/Aboutus/Menu';
import WhoWeAre from '../../../components/screens/GuestScreens/Aboutus/WhoWeAre';
import CodeofConduct from '../../../components/screens/GuestScreens/Aboutus/CodeofConduct';
import WhistleBlower from '../../../components/screens/GuestScreens/Aboutus/WhistleBlower';

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
          // name={languageTxt?.reactStackKeys?.guest?.aboutus?.menus}
          name={"ABOUT"}
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
          name={languageTxt?.reactStackKeys?.guest?.aboutus?.whistleBlower}
          component={WhistleBlower}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AboutusNavigator;
