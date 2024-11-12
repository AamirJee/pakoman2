import {StyleSheet} from 'react-native';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

export const styles = StyleSheet.create({
  typeContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: dimensionConstants?.cardPadding,
  },
  body: {
    padding: dimensionConstants?.cardPadding,
  },
  lineBreak: {
    margin: dimensionConstants.marginSmall,
  },
  flatListContainer: {
    height: '60%',
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: dimensionConstants.marginXXXLarge,
  },
  listContainer: {
    padding: dimensionConstants.paddingLarge,
  },
  imageView:{
    width:400, 
    height:80, 
    backgroundColor:'white', 
    alignItems:'center', 
    alignContent:'center'
  },
  imageStyle:{
    width: 65, 
    height: 85, 
    borderRadius: 15, 
    marginRight:5, 
    alignContent:'center', 
    alignItems:'center'
  }

});
