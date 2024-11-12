import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  iconTxtContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimensionConstants?.paddingXSmall,
  },
  totalIcon: {
    backgroundColor: colorConstants?.goldLight,
    marginRight: dimensionConstants?.marginXSmall,
    borderRadius: dimensionConstants?.borderRadiusSmall,
    padding: dimensionConstants?.paddingXXSmall,
  },
});
