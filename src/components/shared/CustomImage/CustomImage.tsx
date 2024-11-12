import React from 'react';
import {Image, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import PropTypes from 'prop-types';

import {styles} from './styles';
import LogoIcon from '../../../assets/logo/logo.png';
import {CustomImageInterface} from './CustomImage.interface';

const CustomImageCard = ({
  image,
  imageSize,
  extraStyles,
}: CustomImageInterface) => {
  if (image?.includes('.svg')) {
    return (
      <View style={[styles(imageSize).img, extraStyles]}>
        <SvgUri width="100%" height="100%" uri={image} />
      </View>
    );
  }
  return (
    <Image
      style={[styles(imageSize).img, extraStyles]}
      source={{uri: image}}
      defaultSource={LogoIcon}
    />
  );
};

CustomImageCard.propTypes = {
  image: PropTypes.any.isRequired,
};

CustomImageCard.defaultProps = {
  image: '',
  imageSize: 60,
};

export default CustomImageCard;
