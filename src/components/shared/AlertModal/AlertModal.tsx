import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image, NativeModules, StyleSheet, View} from 'react-native';

import {languageTxt} from '../../../utils/constants/languageTxt';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';


import CustomTitle from '../CustomTitle';
import CustomModal from '../CustomModal';
import CustomButton from '../CustomButton';
import LogoIcon from '../../../assets/logo/logo.png';


interface CustomModalInterface {
  open: boolean;
  onRequestClose: Function;
  title?: string;
  description?: string;
  closeLink?: boolean;
}
const AlertModal = ({
  open,
  onRequestClose,
  title = languageTxt.error_title,
  description = languageTxt.an_unexpected_error,
  closeLink = false,
}: CustomModalInterface) => {

  const navigation = useNavigation();
  
  const handlePressClose = () => {
    if (closeLink) {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        NativeModules.DevSettings.reload();
      }
    } else {
      onRequestClose();
    }
  };

  return (
    <CustomModal
      open={open}
      closeButton={false}
      onRequestClose={onRequestClose}
      body={
        <View style={styles.viewBoxContent}>
          <View style={styles?.logoContainer}>
            <Image source={LogoIcon} style={styles?.logo} />
          </View>
          <View style={styles.viewContent}>
            <CustomTitle extraStyles={styles.txtTitle} title={title} />
            <CustomTitle
              extraStyles={styles.txtDesc}
              numberOfLines={4}
              title={description}
            />
          </View>
          <CustomButton
            buttonText={languageTxt.ok}
            handleOnPress={handlePressClose}
          />
        </View>
      }
    />
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  viewBoxContent: {
    height: Dimensions.get('window').width,
    marginBottom: dimensionConstants.marginLarge,
    paddingHorizontal: dimensionConstants.padding,
  },
  viewContent: {
    flex: 1,
    alignItems: 'center',
  },
  txtTitle: {
    fontWeight: '600',
    fontSize: fontConstants.large,
    lineHeight: fontConstants.header,
    marginBottom: dimensionConstants.marginLarge,
  },
  txtDesc: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: fontConstants.middle,
    lineHeight: fontConstants.header,
  },
  logo: {
    width: 110,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: dimensionConstants?.marginImage,
  },
});
