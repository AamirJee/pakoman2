import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  container: {
    // padding: dimensionConstants.padding,
    marginTop: dimensionConstants.margin,
  },
  formValidation: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: dimensionConstants.paddingLarge,
  },
  formText: {
    fontSize: fontConstants.large,
  },
});
