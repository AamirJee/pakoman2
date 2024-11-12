import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    padding: dimensionConstants.paddingLarge,
    marginTop: dimensionConstants.paddingMiddle,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    margin: dimensionConstants.margin,
    paddingVertical: dimensionConstants.padding,
    borderBottomColor: colorConstants.lightGray,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimensionConstants.marginXXXLarge,
  },
  button: {
    marginVertical: dimensionConstants.paddingMiddle,
  },
});
