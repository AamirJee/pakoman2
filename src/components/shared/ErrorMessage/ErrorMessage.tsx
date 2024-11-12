import React from 'react';

import CustomTitle from '../CustomTitle';

import {styles} from './styles';
import {ErrorMessageInterface} from './ErrorMessage.interface';
import {Image, View} from 'react-native';
import LogoIcon from '../../../assets/logo/logo.png';

const ErrorMessage = ({text}: ErrorMessageInterface) => {
  return (
    <View style={styles.container}>
      <Image source={LogoIcon} style={styles?.logo} />
      <CustomTitle
        title={text ? text : 'Data not available!'}
        extraStyles={styles.error}
      />
    </View>
  );
};

export default ErrorMessage;
