import React, {useEffect, useState} from 'react';
import {Alert, BackHandler, View} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {IS_IPHONE_X} from '../../utils/utils';
import {languageTxt} from '../../utils/constants/languageTxt';
import {colorConstants} from '../../utils/constants/colorConstants';
import {dimensionConstants} from '../../utils/constants/dimensionConstants';

import Home from '../../components/screens/UserScreen/Home';
import Alerts from '../../components/screens/UserScreen/Alerts';
import ETransactionsNavigator from './ETransactionsNavigator';
import AddAccount from '../../components/screens/UserScreen/AddAccount';
import HomeNavigator from './HomeNavigator';
import AccountStatementNavigator from './AccountStatementNavigator';

import TabBarAdvancedButton from '../../components/shared/TabBarAdvancedButton';
import CustomSnack from '../../components/shared/CustomSnack';
import {asyncLogoutService} from '../../config/asyncStorage/asynDataStore';
import {useQueryClient} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import Menus from '../../components/screens/UserScreen/ETransactions/Menu';

const BottomBar = createBottomTabNavigator();

const UserNavigator = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [errorSnack, setErrorSnack] = useState('');
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'YES',
  //         onPress: () => {
  //           asyncLogoutService(languageTxt, queryClient);
  //           navigation.navigate(languageTxt?.reactStackKeys?.guest?.name);
  //           BackHandler.exitApp();
  //         },
  //       },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  return (
    <>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
      <BottomBar.Navigator
        tabBar={props => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
            {IS_IPHONE_X && <View style={styles.xFillLine} />}
          </View>
        )}
        initialRouteName={languageTxt?.reactStackKeys?.user?.home?.name}
        screenOptions={{
          tabBarActiveTintColor: colorConstants?.gold,
          tabBarInactiveTintColor: colorConstants?.gray,
          headerShown: false,
        }}>
        <BottomBar.Screen
          name={languageTxt?.reactStackKeys?.user?.alerts}
          component={Alerts}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="alert"
                color={color}
                size={dimensionConstants?.iconSmall}
              />
            ),
          }}
        />
        <BottomBar.Screen
          name={languageTxt?.reactStackKeys?.user?.eTransactions?.name}
          // component={ETransactionsNavigator}
          component={Menus}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="swap-horizontal"
                color={color}
                size={dimensionConstants?.iconSmall}
              />
            ),
          }}
        />
        <BottomBar.Screen
          name={languageTxt?.reactStackKeys?.user?.home?.name}
          component={HomeNavigator}
          options={{
            tabBarButton: props => (
              <TabBarAdvancedButton
                bgColor={colorConstants?.iconBg}
                {...props}
              />
            ),
          }}
        />
        <BottomBar.Screen
          name={languageTxt?.reactStackKeys?.user?.addAccount}
          component={AddAccount}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="bank-plus"
                color={color}
                size={dimensionConstants?.iconSmall}
              />
            ),
          }}
        />
        <BottomBar.Screen
          name={languageTxt?.reactStackKeys?.user?.accountStatement?.name}
          component={AccountStatementNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="file-document-multiple"
                color={color}
                size={dimensionConstants?.iconSmall}
              />
            ),
          }}
        />
      </BottomBar.Navigator>
    </>
  );
};

export default UserNavigator;
