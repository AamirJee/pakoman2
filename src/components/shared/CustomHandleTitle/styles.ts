import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = (props: any) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: dimensionConstants?.padding,
    },
  });
};
