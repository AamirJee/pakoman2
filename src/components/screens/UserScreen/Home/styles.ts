import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';
import {fontConstants} from '../../../../utils/constants/fontConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: dimensionConstants?.bottomNavSize,
    
  },
  chartContainer: {
    height: 140,
    width: '100%',
    position: 'absolute',
    backgroundColor: colorConstants?.primary,
    borderBottomEndRadius: dimensionConstants?.borderRadiusLarge,
    borderBottomStartRadius: dimensionConstants?.borderRadiusLarge,
    
  },
  cardContainer: {
    paddingHorizontal: dimensionConstants?.paddingXLarge,
    paddingBottom: dimensionConstants?.paddingXLarge,
  },
  chartBody: {
    flexDirection: 'row',
  },
  totalValueContainer: {
    // flex: 1,
    width: '40%',
    paddingLeft: 10,
    paddingRight: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  listContainer: {
    paddingBottom: dimensionConstants?.paddingLarge,
    paddingRight: dimensionConstants?.paddingMiddle,
  },
  chartLabelContainer: {
    flex: 1,
    paddingRight: dimensionConstants?.paddingXSmall,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimensionConstants.marginXXXLarge,
  },
  chartBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimensionConstants.paddingSmall,
  },
  chartBoxText: {
    fontWeight: 'bold',
    color: colorConstants.black,
    fontSize: fontConstants.large,
  },
  chartBoxSubtext: {
    textAlign: 'center',
    color: colorConstants.black,
    fontSize: fontConstants.xsmall,
    paddingHorizontal: dimensionConstants.paddingXSmall,
  },
});
