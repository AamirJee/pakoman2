import {StyleSheet, Dimensions, View} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

const styles = StyleSheet.create({
  pdf: {
    height: Dimensions.get('screen').height - 260,
  },
});

export default styles;
