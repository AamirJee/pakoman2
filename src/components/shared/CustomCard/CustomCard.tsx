import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {CustomCardInterface} from './CustomCard.interface';
import {styles} from './styles';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const CustomCard = ({
  body,
  color,
  handleOnPress,
  isClickable,
}: CustomCardInterface) => {
  if (!isClickable)
    return (
      <TouchableOpacity activeOpacity={1} style={styles(color).container}>
        {body}
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity
      activeOpacity={dimensionConstants?.activeOpacity}
      onPress={handleOnPress}
      style={styles(color).container}>
      {body}
    </TouchableOpacity>
  );
};

CustomCard.propTypes = {
  body: PropTypes.any.isRequired,
  color: PropTypes.string,
  handleOnPress: PropTypes.any,
  isClickable: PropTypes.bool,
};

CustomCard.defaultProps = {
  body: <></>,
  color: 'white',
  handleOnPress: () => {},
  isClickable: false,
};
export default CustomCard;
