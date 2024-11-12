import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  container: {
    margin: dimensionConstants.marginXLarge,
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
    fontSize: fontConstants.small,
    color: colorConstants.primary,
  },
  tabTittleActive: {
    color: colorConstants.white,
  },
});
