import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {CustomIconLabelValueInterface} from './CustomIconLabelValue.interface';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTitle from '../CustomTitle';
import {fontConstants} from '../../../utils/constants/fontConstants';

const CustomIconLabelValue = ({
  icon,
  label,
  value,
}: CustomIconLabelValueInterface) => {
  return (
    <View style={styles?.iconTxtContainer}>
      <MaterialCommunityIcons
        name={icon}
        color={colorConstants?.gold}
        size={dimensionConstants?.iconXSmall}
        style={styles?.totalIcon}
      />
      <View>
        <CustomTitle
          title={label}
          fontSize={fontConstants?.small}
          fontWeight={fontConstants?.fontWeightBold}
        />
        <CustomTitle title={value} fontSize={fontConstants?.xsmall} />
      </View>
    </View>
  );
};

CustomIconLabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

CustomIconLabelValue.defaultProps = {
  label: '',
  value: '',
  icon: 'chart-donut',
};

export default CustomIconLabelValue;
