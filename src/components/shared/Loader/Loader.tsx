import React, { useEffect, useState } from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {LoaderInterface} from './Loader.interface';

import LogoIcon from '../../../assets/logo/logo.png';
import LogoIcon2 from '../../../assets/logo/logo2.png';

import {colorConstants} from '../../../utils/constants/colorConstants';
import { useAuthentication } from '../../../utils/globalHooks';

const Loader = ({isLoading}: LoaderInterface) => {
  const [mngmntCompany, setMngmntCompany] = useState('');
  const { data: authData }: any = useAuthentication();
  const [images, setImages] =useState([{}]);
  useEffect(() => {
    if (authData?.userProfile)
      setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
  }, [mngmntCompany]);

  useEffect(() => {
    setImages([require("../../../assets/logo/logo.png"),
              require("../../../assets/logo/logo2.png")])     
  }, []);

  //  const icon = mngmntCompany === 'RUSD Capital'  ? require('../../../assets/logo/logo.png') : require('../../../assets/logo/logo2.png');
  return (
    <View style={styles(isLoading).loading}>
      {/* <Image source={mngmntCompany === 'RUSD Capital' ? images[0] : images[1]}  style={styles(isLoading)?.logo}   /> */}
      {/* <Image source={{uri: icon}}  /> */}
      {/* <Image source={mngmntCompany === 'RUSD Capital' ?  require("../../../assets/logo/logo.png") : require("../../../assets/logo/LogoIcon2.png")} style={styles(isLoading)?.logo} /> */}
      <Image source={mngmntCompany === 'RUSD Capital' ?  LogoIcon : LogoIcon2 } style={styles(isLoading)?.logo} />
      <ActivityIndicator size="large" color={mngmntCompany === 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB} /> 
    </View>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
