import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  container: {
    padding: dimensionConstants?.paddingXXLarge,
    paddingBottom: dimensionConstants?.paddingXXXLarge,
  },
  textContainer: {
    flexDirection: 'row',
    paddingLeft: dimensionConstants?.paddingXSmall,
  },
  buttonBottomMargin: {
    marginBottom: dimensionConstants?.paddingXXXLarge,
  },
  table: {
    marginVertical: dimensionConstants.paddingSmall,
  },
  row: {flexDirection: 'row'},
  column1: {
    flex: 1,
    borderWidth: 1,
    textAlign: 'center',
    borderRightWidth: 0,
    fontWeight: fontConstants.fontWeight600,
    paddingVertical: dimensionConstants.paddingXSmall,
    paddingHorizontal: dimensionConstants.paddingSmall,
  },
  column2: {
    flex: 1,
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: fontConstants.fontWeight600,
    paddingVertical: dimensionConstants.paddingXSmall,
    paddingHorizontal: dimensionConstants.paddingSmall,
  },
  column3: {
    flex: 1,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    textAlign: 'center',
    paddingVertical: dimensionConstants.paddingXSmall,
    paddingHorizontal: dimensionConstants.paddingSmall,
  },
  column4: {
    flex: 1,
    borderWidth: 1,
    borderTopWidth: 0,
    textAlign: 'center',
    paddingVertical: dimensionConstants.paddingXSmall,
    paddingHorizontal: dimensionConstants.paddingSmall,
  },
});
