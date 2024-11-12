import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { CustomDoubleLoginButtonInterface } from './CustomDoubleLoginButton.interface';

import CustomButton from '../CustomButton';
import { colorConstants } from '../../../utils/constants/colorConstants';
import { useAuthentication } from '../../../utils/globalHooks';
import CustomLoginButton from '../CustomLoginButton';


const CustomDoubleLoginButton = (
  {
    primaryButtonText,
    secondaryButtonText,
    handlePrimaryOnPress,
    handleSecondaryOnPress,
    isDisabledPrimary,
    isDisabledSecondary,
    primaryExtraStyles,
    secondaryExtraStyles,
    primaryTextColor,
    secondaryTextColor,
    isLogin,
  }: CustomDoubleLoginButtonInterface) => {

  // const [mngmntCompany, setMngmntCompany] = useState('');
  // const [bgColor, setBgColor] = useState(colorConstants.primary);
  // const { data: authData }: any = useAuthentication();

  // useEffect(() => {
  //   if (authData?.userProfile)
  //     console.log('Custom Fund Card MG COMPANY', authData?.userProfile?.['MNGMNT COMPANY'])
  //   setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
  //   let backgrndColor = mngmntCompany ===  'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
  //   setBgColor(backgrndColor)
  //   console.log('Background Color : ', bgColor)
  // }, [bgColor]);


  return (
    <>
      <CustomLoginButton
        isDisabled={isDisabledPrimary}
        buttonText={primaryButtonText}
        handleOnPress={handlePrimaryOnPress}
        textColor={primaryTextColor}
        backgroundColor={colorConstants.primary}
        extraStyles={[styles?.button, primaryExtraStyles]}
      />
      <CustomLoginButton
        isDisabled={isDisabledSecondary}
        buttonText={secondaryButtonText}
        handleOnPress={handleSecondaryOnPress}
        textColor={secondaryTextColor}
        backgroundColor={colorConstants.primary}
        extraStyles={[styles?.buttonTransparent, secondaryExtraStyles]}
      />
    </>
  );
};

CustomDoubleLoginButton.propTypes = {
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  handlePrimaryOnPress: PropTypes.func.isRequired,
  handleSecondaryOnPress: PropTypes.func.isRequired,
  isDisabledPrimary: PropTypes.bool,
  isDisabledSecondary: PropTypes.bool,
  secondaryExtraStyles: PropTypes.any,
  primaryExtraStyles: PropTypes.any,
  primaryTextColor: PropTypes.string,
  secondaryTextColor: PropTypes.string,
};

CustomDoubleLoginButton.defaultProps = {
  primaryButtonText: '',
  secondaryButtonText: '',
  handlePrimaryOnPress: () => { },
  handleSecondaryOnPress: () => { },
  isDisabledPrimary: false,
  isDisabledSecondary: false,
  primaryTextColor: colorConstants?.white,
  secondaryTextColor: colorConstants?.primary,


};

export default CustomDoubleLoginButton;
