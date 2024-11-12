import {Dimensions, StyleSheet} from 'react-native';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginHorizontal: dimensionConstants?.marginLarge,
  },
  loginContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: dimensionConstants?.cardPadding,
  },
  formValidation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  extraStyles: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  icon: {
    marginBottom: dimensionConstants?.marginSmall,
  },
});
