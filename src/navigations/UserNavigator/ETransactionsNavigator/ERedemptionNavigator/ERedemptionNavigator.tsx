import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../utils/constants/colorConstants';

import Form from '../../../../components/screens/UserScreen/ETransactions/ERedemption/Form';
import Declaration from '../../../../components/screens/UserScreen/ETransactions/ERedemption/Declaration';

const ERedemptionNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
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
            languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
              ?.declaration
          }
          component={Declaration}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption?.form
          }
          component={Form}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ERedemptionNavigator;
