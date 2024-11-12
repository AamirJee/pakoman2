import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = (textColor: any) => {
  return StyleSheet.create({
    header: {
      fontWeight: '600',
      color: textColor,
      fontSize: fontConstants.large,
      marginVertical: dimensionConstants.margin,
    },
  });
};
