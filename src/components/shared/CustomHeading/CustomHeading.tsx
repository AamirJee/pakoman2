import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {CustomHeadingInterface} from './CustomHeading.interface';
import {styles} from './styles';
import {colorConstants} from '../../../utils/constants/colorConstants';

const CustomHeading = ({textColor, text}: CustomHeadingInterface) => {
  return <Text style={styles(textColor).header}>{text}</Text>;
};

CustomHeading.propTypes = {
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

CustomHeading.defaultProps = {
  textColor: colorConstants.drakGray,
  text: '',
};

export default CustomHeading;
