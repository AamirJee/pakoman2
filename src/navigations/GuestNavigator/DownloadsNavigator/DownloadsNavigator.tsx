import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {colorConstants} from '../../../utils/constants/colorConstants';

import Menus from '../../../components/screens/GuestScreens/Downloads/Menu';
import FundManagersReport from '../../../components/screens/GuestScreens/Downloads/FundManagersReport';
import ApplicationForms from '../../../components/screens/GuestScreens/Downloads/ApplicationForms';
import ConstitutiveDocuments from '../../../components/screens/GuestScreens/Downloads/ConstitutiveDocuments';
import FinancialStatements from '../../../components/screens/GuestScreens/Downloads/FinancialStatements';
import HowToInvest from '../../../components/screens/GuestScreens/Downloads/HowToInvest';
import ProxyVotingPolicy from '../../../components/screens/GuestScreens/Downloads/ProxyVotingPolicy';
import ProvisioningPolicyFinal from '../../../components/screens/GuestScreens/Downloads/ProvisioningPolicyFinal';
import Fatwah from '../../../components/screens/GuestScreens/Downloads/Fatwah';
import ComplianceCertificate from '../../../components/screens/GuestScreens/Downloads/ComplianceCertificate';
import { useNavigation } from '@react-navigation/native';

const DownloadsNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={languageTxt?.reactStackKeys?.guest?.downloads?.menus}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colorConstants?.drakGray,
        }}>
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.downloads?.menus}
          component={Menus}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.downloads?.fundManagersReport
          }
          component={FundManagersReport}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.downloads?.applicationForms}
          component={ApplicationForms}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.downloads?.constitutiveDocuments
          }
          component={ConstitutiveDocuments}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.downloads?.financialStatements
          }
          component={FinancialStatements}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.downloads?.howToInvest}
          component={HowToInvest}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.downloads?.proxyVotingPolicy
          }
          component={ProxyVotingPolicy}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.downloads
              ?.provisioningPolicyFinal
          }
          component={ProvisioningPolicyFinal}
        />
        <Stack.Screen
          name={languageTxt?.reactStackKeys?.guest?.downloads?.fatwah}
          component={Fatwah}
        />
        <Stack.Screen
          name={
            languageTxt?.reactStackKeys?.guest?.downloads?.complianceCertificate
          }
          component={ComplianceCertificate}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default DownloadsNavigator;
