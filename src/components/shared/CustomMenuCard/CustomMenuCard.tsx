import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {CustomMenuCardInterface} from './CustomMenuCard.interface';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const CustomMenuCard = ({
  title,
  icon,
  onPress,
  numberOfline = 1,
}: CustomMenuCardInterface) => {
  return (
    <TouchableOpacity
      activeOpacity={dimensionConstants?.activeOpacity}
      onPress={() => onPress()}
      style={styles?.container}>
      <View style={styles?.iconContainer}>{icon}</View>
      <View style={styles?.titleContainer}>
        <Text numberOfLines={numberOfline} style={styles?.title}>
          {title}
        </Text>
        <MaterialCommunityIcons
          name="chevron-right"
          color={colorConstants?.gray}
          size={dimensionConstants?.iconSmall}
        />
      </View>
    </TouchableOpacity>
  );
};

CustomMenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
};

CustomMenuCard.defaultProps = {
  title: '',
  icon: <></>,
  onPress: () => {},
};

export default CustomMenuCard;
