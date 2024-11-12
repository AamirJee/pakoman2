import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';

import {styles} from './styles';
import {CustomInfoValueInterface} from './CustomInfoValue.interface';

import {colorConstants} from '../../../utils/constants/colorConstants';
import CustomTitle from '../CustomTitle';
import {fontConstants} from '../../../utils/constants/fontConstants';

const CustomInfoValue = ({label, value, icon}: CustomInfoValueInterface) => {
  return (
    <View style={styles?.container}>
      <CustomTitle
        title={label}
        titleColor={colorConstants?.drakGray}
        fontWeight={fontConstants?.fontWeightBold}
      />
      <View style={styles?.valueContainer}>
        {icon}
        <CustomTitle
          title={value}
          titleColor={colorConstants?.gray}
          fontWeight={fontConstants?.fontWeight500}
          extraStyles={styles?.value}
        />
      </View>
    </View>
  );
};

CustomInfoValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

CustomInfoValue.defaultProps = {
  label: '',
  value: '',
  icon: <></>,
};
export default CustomInfoValue;
