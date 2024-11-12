import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../utils/constants/colorConstants';

import Form from '../../../../components/screens/UserScreen/ETransactions/EInvestment/Form';
import Declaration from '../../../../components/screens/UserScreen/ETransactions/EInvestment/Declaration';

const EConversionNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
          ?.declaration
      }>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
              ?.declaration
          }
          component={Declaration}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.form
          }
          component={Form}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default EConversionNavigator;
