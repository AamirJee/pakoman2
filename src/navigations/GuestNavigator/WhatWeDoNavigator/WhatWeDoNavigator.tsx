import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/GuestScreens/WhatWeDo/Menu';
import PortfolioManagement from '../../../components/screens/GuestScreens/WhatWeDo/PortfolioManagement';
import ConventionalSolutions from '../../../components/screens/GuestScreens/WhatWeDo/ConventionalSolutions';
import ACF from '../../../components/screens/GuestScreens/WhatWeDo/ACF';
import POIF from '../../../components/screens/GuestScreens/WhatWeDo/POIF';
import ASYE from '../../../components/screens/GuestScreens/WhatWeDo/ASYE';
import POAAAF from '../../../components/screens/GuestScreens/WhatWeDo/POAAAF';
import AHYS from '../../../components/screens/GuestScreens/WhatWeDo/AHYS';
import ShariahCompliantSolutions from '../../../components/screens/GuestScreens/WhatWeDo/ShariahCompliantSolutions';
import PODDF from '../../../components/screens/GuestScreens/WhatWeDo/ShariahCompliantSolutions/PODDF';
import POIAAF from '../../../components/screens/GuestScreens/WhatWeDo/ShariahCompliantSolutions/POIAAF';
import POAIIF from '../../../components/screens/GuestScreens/WhatWeDo/ShariahCompliantSolutions/POAIIF';

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
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
              ?.name
          }
          component={ConventionalSolutions}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.portfolioManagement
          }
          component={PortfolioManagement}
        />

        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
              ?.acf
          }
          component={ACF}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
              ?.poif
          }
          component={POIF}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
              ?.asye
          }
          component={ASYE}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
              ?.poaaaf
          }
          component={POAAAF}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
              ?.ahys
          }
          component={AHYS}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo
              ?.shariahCompliantSolutions?.name
          }
          component={ShariahCompliantSolutions}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo
              ?.shariahCompliantSolutions?.poaiif
          }
          component={POAIIF}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo
              ?.shariahCompliantSolutions?.poiaaf
          }
          component={POIAAF}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.whatWeDo
              ?.shariahCompliantSolutions?.poddf
          }
          component={PODDF}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default WhatWeDoNavigator;
