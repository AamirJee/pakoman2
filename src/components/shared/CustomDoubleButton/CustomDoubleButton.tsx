import React from 'react';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {CustomDoubleButtonInterface} from './CustomDoubleButton.interface';

import CustomButton from '../CustomButton';
import {colorConstants} from '../../../utils/constants/colorConstants';

const CustomDoubleButton = ({
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
}: CustomDoubleButtonInterface) => {
  return (
    <>
      <CustomButton
        isDisabled={isDisabledPrimary}
        buttonText={primaryButtonText}
        handleOnPress={handlePrimaryOnPress}
        textColor={primaryTextColor}
        extraStyles={[styles?.button, primaryExtraStyles]}
      />
      <CustomButton
        isDisabled={isDisabledSecondary}
        buttonText={secondaryButtonText}
        handleOnPress={handleSecondaryOnPress}
        textColor={secondaryTextColor}
        extraStyles={[styles?.buttonTransparent, secondaryExtraStyles]}
      />
    </>
  );
};

CustomDoubleButton.propTypes = {
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

CustomDoubleButton.defaultProps = {
  primaryButtonText: '',
  secondaryButtonText: '',
  handlePrimaryOnPress: () => {},
  handleSecondaryOnPress: () => {},
  isDisabledPrimary: false,
  isDisabledSecondary: false,
  primaryTextColor: colorConstants?.white,
  secondaryTextColor: colorConstants?.primary,
};

export default CustomDoubleButton;
