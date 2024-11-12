import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {TouchableIconInterface} from './TouchableIcon.interface';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';

const TouchableIcon = ({
  icon,
  onButtonPressCb,
  styles,
}: TouchableIconInterface) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles}}
      onPress={() => onButtonPressCb()}>
      {icon}
    </TouchableOpacity>
  );
};

TouchableIcon.propTypes = {
  onButtonPressCb: PropTypes.func.isRequired,
  icon: PropTypes.any,
  styles: PropTypes.any,
};

TouchableIcon.defaultProps = {
  onButtonPressCb: () => {},
  icon: (
    <MaterialCommunityIcons
      name="chevron-left"
      size={dimensionConstants?.iconMiddle}
      color={colorConstants?.white}
    />
  ),
  styles: {},
};

export default TouchableIcon;
