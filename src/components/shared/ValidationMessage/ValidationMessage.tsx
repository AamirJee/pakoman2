import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {ValidationMessageInterface} from './ValidationMessage.interface';
import {styles} from './styles';
import {colorConstants} from '../../../utils/constants/colorConstants';

const ValidationMessage = ({color, children}: ValidationMessageInterface) => {
  return <Text style={styles(color).error}> {children} </Text>;
};

ValidationMessage.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ValidationMessage.defaultProps = {
  children: '',
  color: colorConstants?.red,
};

export default ValidationMessage;
