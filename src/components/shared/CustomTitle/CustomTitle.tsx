import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CustomTitleInterface} from './CustomTitle.interface';
import {styles} from './styles';

import {
  fontConstants,
  fontSizeArray,
  fontWeightArray,
} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';

const CustomTitle = ({
  title,
  titleColor,
  fontSize,
  fontWeight,
  numberOfLines,
  extraStyles,
}: CustomTitleInterface) => {
  const props = {
    fontWeight,
    fontSize,
    titleColor,
  };
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles(props)?.title, extraStyles]}>
      {title}
    </Text>
  );
};

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  numberOfLines: PropTypes.number,
  fontWeight: PropTypes.oneOf(fontWeightArray),
  fontSize: PropTypes.oneOf(fontSizeArray),
};

CustomTitle.defaultProps = {
  title: '',
  titleColor: colorConstants?.gray,
  fontWeight: fontConstants?.fontWeightBold,
  fontSize: fontConstants?.middle,
  numberOfLines: 30,
};

export default CustomTitle;
