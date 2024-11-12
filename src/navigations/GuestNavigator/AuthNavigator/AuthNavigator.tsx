import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Login from '../../../components/screens/GuestScreens/Login';
import InvestorTypes from '../../../components/screens/GuestScreens/Register/InvestorTypes';
import CorporateInvestor from '../../../components/screens/GuestScreens/Register/CorporateInvestor';
import IndividualInvestor from '../../../components/screens/GuestScreens/Register/IndividualInvestor';
import PensionInvestor from '../../../components/screens/GuestScreens/Register/PensionInvestor';
import SahulatSarmayakari from '../../../components/screens/GuestScreens/Register/SahulatSarmayakari';
import ForgotPassword from '../../../components/screens/GuestScreens/ForgotPassword';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={languageTxt?.reactStackKeys?.auth?.login}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.login}
          component={Login}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.forgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.investorTypes}
          component={InvestorTypes}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.corporateInvestor}
          component={CorporateInvestor}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.individualInvestor}
          component={IndividualInvestor}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.pensionInvestor}
          component={PensionInvestor}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.auth?.register?.sahulatSarmayakari}
          component={SahulatSarmayakari}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
