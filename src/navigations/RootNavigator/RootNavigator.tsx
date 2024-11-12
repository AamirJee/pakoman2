import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../utils/constants/languageTxt';

import GuestNavigator from '../GuestNavigator';
import UserNavigator from '../UserNavigator';
import ERedemptionNavigator from '../UserNavigator/ETransactionsNavigator/ERedemptionNavigator';
import EConversionNavigator from '../UserNavigator/ETransactionsNavigator/EConversionNavigator';
import EInvestmentNavigator from '../UserNavigator/ETransactionsNavigator/EInvestmentNavigator';
import Summary from '../../components/screens/UserScreen/ETransactions/Summary';
import ChangePassword from '../../components/screens/GuestScreens/ChangePassword';

const rootStack = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={languageTxt?.reactStackKeys?.guest?.name}>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.guest?.name}
            component={GuestNavigator}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.user?.name}
            component={UserNavigator}
          />
          <RootStack.Screen
            name={languageTxt?.reactStackKeys?.auth?.changePassword}
            component={ChangePassword}
          />
          <RootStack.Screen
            name={
              languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
                ?.name
            }
            component={ERedemptionNavigator}
          />
          <RootStack.Screen
            name={
              languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
                ?.name
            }
            component={EConversionNavigator}
          />
          <RootStack.Screen
            name={
              languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
                ?.name
            }
            component={EInvestmentNavigator}
          />
          <RootStack.Screen
            name={
              languageTxt?.reactStackKeys?.user?.eTransactions?.summary?.name
            }
            component={Summary}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default rootStack;
