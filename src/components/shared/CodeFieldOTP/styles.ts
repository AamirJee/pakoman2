import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp2dp} from 'react-native-responsive-screen';

import {colorConstants} from '../../../utils/constants/colorConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  txtCell: {
    textAlign: 'center',
    fontSize: fontConstants.header,
    lineHeight: fontConstants.header,
  },
  cell: {
    width: 60,
    height: 60,
    paddingTop: 4,
    borderRadius: 130,
    alignItems: 'center',
    borderWidth: 1,
    marginRight: wp2dp(2),
    justifyContent: 'center',
    borderColor: colorConstants.primary,
    backgroundColor: colorConstants.primaryLight,
  },
  labelText: {
    fontSize: fontConstants.xmiddle,
    color: colorConstants.primary,
    paddingTop: wp2dp(4),
  },
  labelTextDisabled: {
    fontSize: fontConstants.xmiddle,
    color: colorConstants.gray,
    paddingTop: wp2dp(4),
  },
});
