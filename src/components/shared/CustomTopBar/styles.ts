import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = (userPlan: boolean, bgColor: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: dimensionConstants?.cardPadding,
      backgroundColor: bgColor,
    },
    userIconContainer: {
      paddingRight: dimensionConstants?.padding,
      paddingTop: dimensionConstants?.paddingXSmall,
      marginRight: dimensionConstants?.marginXSmall,
    },
    userStatus: {
      position: 'absolute',
      top: dimensionConstants?.avatarBadgeTop,
      right: dimensionConstants?.avatarBadgeRight,
      zIndex: dimensionConstants?.badgeZIndex,
      backgroundColor: userPlan ? colorConstants?.green : colorConstants?.red,
      justifyContent: 'center',
      borderRadius: dimensionConstants?.cardRadius,
      padding: dimensionConstants?.paddingXXSmall,
    },

    txtContainer: {
      flex: 3,
      paddingTop: dimensionConstants?.paddingXSmall,
    },
    title: {
      fontWeight: '600',
      fontSize: fontConstants?.title,
      color:
        bgColor == colorConstants?.primary
          ? colorConstants?.white
          : colorConstants?.drakGray,
    },
    description: {
      fontSize: fontConstants?.description,
      color:
        bgColor == colorConstants?.primary
          ? colorConstants?.white
          : colorConstants?.gray,
    },

    iconContainer: {
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
