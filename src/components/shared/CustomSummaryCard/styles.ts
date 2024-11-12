import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  cardContainer: {
    padding: dimensionConstants.cardPadding,
  },
  cardInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
  },
  leftTextContainer: {
    flex: 1.5,
    marginRight: dimensionConstants.marginLarge,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  rightTextContainer: {
    flex: 1,
  },
  bottomContainer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    borderColor: colorConstants.lightGray,
    marginTop: dimensionConstants.marginXSmall,
    paddingTop: dimensionConstants.marginXSmall,
  },
});
