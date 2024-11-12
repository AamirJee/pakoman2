import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = ({bottom}: any) => {
  const bottomContainer = bottom
    ? {marginBottom: dimensionConstants?.marginLarge}
    : {
        marginBottom: 'auto',
      };
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorConstants?.lightBlackOpacity,
    },
    modalView: {
      marginTop: 'auto',
      backgroundColor: colorConstants?.white,
      padding: dimensionConstants?.modalPadding,
      borderRadius: dimensionConstants?.modalRadius,
      marginHorizontal: dimensionConstants?.modalMargin,
      ...bottomContainer,
    },
    title: {
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: colorConstants?.drakGray,
      fontSize: fontConstants?.large,
      marginBottom: dimensionConstants?.margin,
      marginHorizontal: dimensionConstants?.marginLarge,
    },
    closeButton: {
      zIndex: 999,
      position: 'absolute',
      right: dimensionConstants?.modalMargin,
      top: dimensionConstants?.modalMargin,
    },
  });
};
