import {StyleSheet} from 'react-native';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {shadowConstants} from '../../../utils/constants/shadowConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants.white,
    borderRadius: dimensionConstants?.cardRadius,
    marginBottom: dimensionConstants?.marginLarge,
    ...shadowConstants,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: colorConstants.primary,
    padding: dimensionConstants.cardPadding,
    borderTopEndRadius: dimensionConstants?.cardRadius,
    borderTopStartRadius: dimensionConstants?.cardRadius,
  },
  title: {
    textAlign: 'center',
    color: colorConstants.white,
  },
  bodyContainer: {
    flexDirection: 'row',
    paddingTop: dimensionConstants.padding,
    marginHorizontal: dimensionConstants.cardPadding,
  },
  borderBottom: {
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colorConstants.gray,
    marginHorizontal: dimensionConstants.cardPadding,
  },
  subBodyContainer: {
    flex: 1,
  },
  header: {
    fontSize: fontConstants.small,
  },
  description: {},
  bottomContainer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    borderColor: colorConstants.lightGray,
    padding: dimensionConstants.paddingMiddle,
    marginTop: dimensionConstants.marginXSmall,
    paddingTop: dimensionConstants.marginXSmall,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
