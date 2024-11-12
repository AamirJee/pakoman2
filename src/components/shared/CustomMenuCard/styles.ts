import {StyleSheet} from 'react-native';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimensionConstants?.paddingMiddle,
    paddingHorizontal: dimensionConstants?.paddingXLarge,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: dimensionConstants?.iconXXLarge,
    height: dimensionConstants?.iconXXLarge,
    backgroundColor: colorConstants?.primary,
    borderRadius: dimensionConstants?.iconXXLarge / 2,
    zIndex: 999,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colorConstants?.xlightGray,
    paddingLeft: dimensionConstants?.paddingXLarge,
    paddingRight: dimensionConstants?.paddingMiddle,
    paddingVertical: dimensionConstants?.paddingMiddle,
    borderTopEndRadius: dimensionConstants?.borderRadiusXLarge,
    borderBottomEndRadius: dimensionConstants?.borderRadiusXLarge,
    marginLeft: -10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontConstants?.xmiddle,
  },
});
