import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CustomHandleTitleInterface} from './CustomHandleTitle.interface';
import {styles} from './styles';

import {
  fontConstants,
  fontSizeArray,
  fontWeightArray,
} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import CustomTitle from '../CustomTitle';

const CustomHandleTitle = ({
  title,
  titleColor,
  handleOnPress,
  fontSize,
  fontWeight,
  extraStyles,
  textExtraStyles,
}: CustomHandleTitleInterface) => {
  const props = {};
  return (
    <TouchableOpacity
      activeOpacity={dimensionConstants?.activeOpacity}
      style={[styles(props).container, extraStyles]}
      onPress={() => handleOnPress()}>
      <CustomTitle
        title={title}
        fontWeight={fontWeight}
        fontSize={fontSize}
        titleColor={titleColor}
        extraStyles={textExtraStyles}
      />
    </TouchableOpacity>
  );
};

CustomHandleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  handleOnPress: PropTypes.func.isRequired,
  fontWeight: PropTypes.oneOf(fontWeightArray),
  fontSize: PropTypes.oneOf(fontSizeArray),
  extraStyles: PropTypes.any,
  textCenter: PropTypes.bool,
};

CustomHandleTitle.defaultProps = {
  title: '',
  titleColor: colorConstants?.gray,
  handleOnPress: () => {},
  fontWeight: fontConstants?.fontWeightBold,
  fontSize: fontConstants?.middle,
  extraStyles: null,
  textCenter: false,
};

export default CustomHandleTitle;
