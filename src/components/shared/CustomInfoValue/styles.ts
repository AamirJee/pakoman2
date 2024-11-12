import {StyleSheet} from 'react-native';

import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'flex-start',
    marginVertical: dimensionConstants?.marginSmall,
  },
  valueContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: dimensionConstants?.paddingMiddle,
    marginTop: dimensionConstants?.marginXSmall,
    backgroundColor: colorConstants?.xlightGray,
    borderRadius: dimensionConstants?.borderRadiusSmall,
  },
  value: {
    marginHorizontal: dimensionConstants?.marginLarge,
  },
});
