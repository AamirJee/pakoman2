import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    margin: dimensionConstants.marginXLarge,
    backgroundColor: 'white',
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
  },
  containerTab: {
    backgroundColor: 'white',
    marginBottom: dimensionConstants.marginLarge,
  },
  tabActive: {
    backgroundColor: colorConstants.primary,
  },
  buttonStyle: {
    minHeight: 60,
    borderBottomWidth: 1,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    borderBottomColor: colorConstants.primary,
  },
  tabTittle: {
    fontSize: 10,
    color: colorConstants.primary,
  },
  tabTittleActive: {
    color: colorConstants.white,
  },
});
