import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';

export const styles = ({showDropDown}: any) => {
  const showDropDownStyle: any = showDropDown
    ? {
        display: 'flex',
      }
    : {display: 'none'};
  return StyleSheet.create({
    dropDownContainer: {
      height: 400,
      ...showDropDownStyle,
    },
  });
};
