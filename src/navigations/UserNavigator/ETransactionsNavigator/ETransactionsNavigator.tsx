import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/UserScreen/ETransactions/Menu/Menus';
import Summary from '../../../components/screens/UserScreen/ETransactions/Summary';
import ERedemptionNavigator from './ERedemptionNavigator';
import EConversionNavigator from './EConversionNavigator';
import EInvestmentNavigator from './EInvestmentNavigator';

const ETransactionsNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={
        languageTxt?.reactStackKeys?.user?.eTransactions?.menus
      }>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.user?.eTransactions?.menus}
          component={Menus}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption?.name
          }
          component={ERedemptionNavigator}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion?.name
          }
          component={EConversionNavigator}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.name
          }
          component={EInvestmentNavigator}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.user?.eTransactions?.summary?.name}
          component={Summary}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ETransactionsNavigator;
