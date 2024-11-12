import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import RootNavigator from './navigations/RootNavigator';
import {colorConstants} from './utils/constants/colorConstants';
import AppIntroCustomSlider from './components/screens/AppIntroCustomSlider';

import RNSplashScreen from 'react-native-splash-screen';
import {getServiceBoolean} from './config/asyncStorage/asynDataStore';
import {languageTxt} from './utils/constants/languageTxt';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  useEffect(() => {
    getServiceBoolean(languageTxt?.reactAsyncStorageKeys?.appInfo).then(val => {
      setShowRealApp(val);
    });
    RNSplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colorConstants?.white}}>
      {Platform?.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
      {showRealApp ? (
        <RootNavigator />
      ) : (
        <AppIntroCustomSlider setShowRealApp={setShowRealApp} />
      )}
    </SafeAreaView>
  );
};

export default App;
