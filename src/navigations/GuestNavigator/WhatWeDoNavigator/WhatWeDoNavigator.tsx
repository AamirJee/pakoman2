import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/GuestScreens/WhatWeDo/Menu';
import PortfolioManagement from '../../../components/screens/GuestScreens/WhatWeDo/PortfolioManagement';

const WhatWeDoNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={languageTxt?.reactStackKeys?.guest?.whatWeDo?.menus}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.whatWeDo?.menus}
          component={Menus}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.portfolioManagement
          }
          component={PortfolioManagement}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default WhatWeDoNavigator;
