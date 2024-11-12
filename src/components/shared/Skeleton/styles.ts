import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants.primary,
  },
  backArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimensionConstants.paddingMiddle,
  },
  backArrow: {
    paddingVertical: dimensionConstants.backArrowPadding,
    paddingHorizontal: dimensionConstants.padding,
  },
  content: {
    flex: 1,
    backgroundColor: colorConstants.white,
    borderTopStartRadius: dimensionConstants.borderRadiusXLarge,
    borderTopEndRadius: dimensionConstants.borderRadiusXLarge,
  },
});
