import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CustomButtonInterface} from './CustomButton.interface';
import {styles} from './styles';

import {
  fontConstants,
  fontSizeArray,
  fontWeightArray,
} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const CustomButton = ({
  buttonText,
  textColor,
  backgroundColor,
  fontSize,
  fontWeight,
  width,
  handleOnPress,
  isDisabled,
  icon,
  line,
  extraStyles,
}: CustomButtonInterface) => {
  const props = {line, width, fontWeight, fontSize, textColor, backgroundColor};
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={dimensionConstants?.activeOpacity}
      style={[
        styles(props).button,
        isDisabled && styles(props).disabled,
        extraStyles,
      ]}
      onPress={() => handleOnPress()}>
      {icon}
      <Text style={styles(props)?.title} numberOfLines={1}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontWeight: PropTypes.oneOf(fontWeightArray),
  fontSize: PropTypes.oneOf(fontSizeArray),
  width: PropTypes.any,
  handleOnPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  icon: PropTypes.element,
  line: PropTypes.number,
  extraStyles: PropTypes.any,
};

CustomButton.defaultProps = {
  buttonText: '',
  textColor: colorConstants?.white,
  backgroundColor: colorConstants?.primary,
  fontWeight: 'bold',
  fontSize: fontConstants?.middle,
  width: '100%',
  isDisabled: false,
  handleOnPress: () => {},
  icon: <></>,
  line: 0,
  extraStyles: null,
};

export default CustomButton;
