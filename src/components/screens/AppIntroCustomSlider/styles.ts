import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstants?.xLightBlackOpacity,
    borderRadius: dimensionConstants?.borderRadiusLarge,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorConstants?.primary,
  },
  image: {
    width: '100%',
    height: 360,
    resizeMode: 'stretch',
    marginVertical: dimensionConstants?.marginXXXLarge,
  },
  text: {
    textAlign: 'justify',
    color: colorConstants?.white,
    fontSize: fontConstants?.middle,
    paddingHorizontal: dimensionConstants?.paddingLarge,
  },
  title: {
    fontWeight: '500',
    textAlign: 'center',
    color: colorConstants?.white,
    fontSize: fontConstants?.header,
  },
});
