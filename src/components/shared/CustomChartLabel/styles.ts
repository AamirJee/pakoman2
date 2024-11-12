import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = (color: any) => {
  return StyleSheet.create({
    iconTxtContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: dimensionConstants?.marginMedium,
    },
    icon: {
      backgroundColor: color,
      width: dimensionConstants?.iconXXSmall,
      height: dimensionConstants?.iconXXSmall,
      borderRadius: dimensionConstants?.borderRadiusLarge,
      marginRight: dimensionConstants?.marginXSmall,
    },
  });
};
