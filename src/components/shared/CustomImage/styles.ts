import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = (imageSize: number) =>
  StyleSheet.create({
    img: {
      width: imageSize,
      height: imageSize,
      resizeMode: 'cover',
      alignSelf: 'center',
      borderRadius: imageSize,
    },
  });
