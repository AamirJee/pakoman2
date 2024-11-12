import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {languageTxt} from '../../../utils/constants/languageTxt';

import AccountStatement from '../../../components/screens/UserScreen/AccountStatement';
import PDFViewer from '../../../components/screens/UserScreen/AccountStatement/PDFViewer';

const AccountStatementNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={
        languageTxt?.reactStackKeys?.user?.accountStatement?.screen
      }>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.user?.accountStatement?.screen}
          component={AccountStatement}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.user?.accountStatement?.pdf}
          component={PDFViewer}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AccountStatementNavigator;
