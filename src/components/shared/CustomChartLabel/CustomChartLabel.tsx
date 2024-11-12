import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {CustomChartLabelInterface} from './CustomChartLabel.interface';
import {colorConstants} from '../../../utils/constants/colorConstants';
import CustomTitle from '../CustomTitle';
import {fontConstants} from '../../../utils/constants/fontConstants';

const CustomChartLabel = ({label, color}: CustomChartLabelInterface) => {
  return (
    <View style={styles(color)?.iconTxtContainer}>
      <View style={styles(color)?.icon}></View>
      <CustomTitle title={label} fontSize={fontConstants.xsmall} />
    </View>
  );
};

CustomChartLabel.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

CustomChartLabel.defaultProps = {
  label: '',
  color: colorConstants?.primary,
};

export default CustomChartLabel;
