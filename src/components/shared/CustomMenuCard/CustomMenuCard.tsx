import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {CustomMenuCardInterface} from './CustomMenuCard.interface';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import { useAuthentication } from '../../../utils/globalHooks';


const CustomMenuCard = ({title, icon, onPress}: CustomMenuCardInterface) => {

  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { data: authData }: any = useAuthentication();

  useEffect(() => {
    if (authData?.userProfile) 
      console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
    setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
    let backgrndColor = mngmntCompany == 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor)
    console.log('Background Color : ', bgColor)
  }, [bgColor]);


  return (
    <TouchableOpacity
      activeOpacity={dimensionConstants?.activeOpacity}
      onPress={() => onPress()}
      style={styles?.container}>
      <View style={[styles?.iconContainer,{backgroundColor:bgColor}]}>{icon}</View>
      <View style={styles?.titleContainer}>
        <Text numberOfLines={1} style={styles?.title}>
          {title}
        </Text>
        <MaterialCommunityIcons
          name="chevron-right"
          color={colorConstants?.gray}
          size={dimensionConstants?.iconSmall}
        />
      </View>
    </TouchableOpacity>
  );
};

CustomMenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
};

CustomMenuCard.defaultProps = {
  title: '',
  icon: <></>,
  onPress: () => {},
};

export default CustomMenuCard;
