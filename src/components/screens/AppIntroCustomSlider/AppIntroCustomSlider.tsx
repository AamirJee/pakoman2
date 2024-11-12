import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

import {styles} from './styles';
import {slides} from './appIntroCustomSliderItems';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {storeServiceBoolean} from '../../../config/asyncStorage/asynDataStore';
import {languageTxt} from '../../../utils/constants/languageTxt';

const AppIntroCustomSlider = ({setShowRealApp}: any) => {
  const renderItem = ({item}: any) => {
    return (
      <View
        style={[
          styles?.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles?.title}>{item.title}</Text>
        <Image source={item.image} style={styles?.image} />
        <Text style={styles?.text}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles?.buttonCircle}>
        <Icon
          size={24}
          name="arrow-forward-outline"
          color={colorConstants?.white}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles?.buttonCircle}>
        <Icon
          size={24}
          name="checkmark-outline"
          color={colorConstants?.white}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      onDone={() => {
        setShowRealApp(true);
        storeServiceBoolean(languageTxt?.reactAsyncStorageKeys?.appInfo, true);
      }}
    />
  );
};

export default AppIntroCustomSlider;
