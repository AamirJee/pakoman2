import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

import CustomCard from '../CustomCard';
import CustomTitle from '../CustomTitle';
import CustomButton from '../CustomButton';
import {CustomRegisterCardInterface} from './CustomRegisterCard.interface';

const CustomRegisterCard = ({
  title,
  description,
  handleOnPress,
}: CustomRegisterCardInterface) => {
  return (
    <CustomCard
      body={
        <View style={styles?.body}>
          <CustomTitle
            title={title}
            titleColor={colorConstants?.drakGray}
            fontSize={fontConstants?.large}
          />
          <CustomTitle
            title={description}
            extraStyles={{
              textAlign: 'justify',
              marginTop: dimensionConstants?.marginSmall,
            }}
            titleColor={colorConstants?.drakGray}
            fontSize={fontConstants?.small}
          />
          <CustomButton
            buttonText={languageTxt?.register}
            width={100}
            extraStyles={styles?.button}
            handleOnPress={handleOnPress}
          />
        </View>
      }
      color={colorConstants?.backgroundColor}
      isClickable={false}
    />
  );
};

CustomRegisterCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleOnPress: PropTypes.any,
};

CustomRegisterCard.defaultProps = {
  title: '',
  description: '',
  handleOnPress: () => {},
};
export default CustomRegisterCard;
