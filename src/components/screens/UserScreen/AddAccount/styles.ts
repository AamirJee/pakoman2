import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants?.white,
  },
  formContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: dimensionConstants?.cardPadding,
  },
  formValidation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
