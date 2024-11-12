import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = (color: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: colorConstants?.lightGray,
      paddingVertical: dimensionConstants?.paddingSmall,
    },
    textContainer: {
      flex: 1,
      paddingLeft: dimensionConstants?.padding,
    },
    rightSide: {
      alignItems: 'flex-end',
      paddingHorizontal: dimensionConstants?.padding,
    },
    icon: {
      width: dimensionConstants?.iconSmall,
      height: dimensionConstants?.iconSmall,
      backgroundColor: color,
      borderRadius: dimensionConstants?.iconSmall / 2,
      marginTop: dimensionConstants?.marginXSmall,
    },
    percentages: {
      position: 'absolute',
      top: 12,
      height: 40,
      width: '100%',
      textAlign: 'center',
    },
  });
};
