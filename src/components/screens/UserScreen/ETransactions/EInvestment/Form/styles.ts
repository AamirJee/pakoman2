import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    padding: dimensionConstants.paddingLarge,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimensionConstants.marginXXXLarge,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: dimensionConstants.paddingLarge,
    paddingVertical: dimensionConstants.paddingMiddle,
  },
  formValidation: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: dimensionConstants.paddingLarge,
  },
  flatListContainer: {
    height: '70%',
  },
  listContainer: {
    padding: dimensionConstants.paddingLarge,
  },
  lineBreak: {
    margin: dimensionConstants.marginSmall,
  },
});
