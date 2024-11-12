import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';

import {styles} from './styles';
import {CustomCardInterface} from './CustomPortfolioCard.interface';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';

import CustomTitle from '../CustomTitle';

const CustomPortfolioCard = ({
  nav,
  fundsName,
  unit,
  investment,
  percentages,
  color,
}: CustomCardInterface) => {
  return (
    <View style={styles(color).container}>
      <View>
        <Progress.Circle
          size={40}
          progress={percentages / 100}
          color={color}
          showsText={false}
          textStyle={{
            fontWeight: 'bold',
            fontSize: fontConstants?.small,
            color: colorConstants?.drakGray,
          }}
        />
        <CustomTitle
          title={`${percentages}%`}
          titleColor={colorConstants?.secondary}
          fontSize={fontConstants.xsmall}
          extraStyles={styles(color).percentages}
        />
      </View>
      <View style={styles(color).textContainer}>
        <CustomTitle
          title={fundsName}
          titleColor={colorConstants?.secondary}
          fontSize={fontConstants.small}
        />
        {/* <CustomTitle
          title={`Holding Percentages ${percentages}%`}
          titleColor={colorConstants?.secondaryLight}
          fontSize={fontConstants?.small}
        /> */}
      </View>
      <View style={styles(color).rightSide}>
        <CustomTitle
          title={`PKR ${investment}`}
          titleColor={colorConstants?.secondary}
          fontSize={fontConstants.small}
        />
        <CustomTitle
          title={`Units ${unit}`}
          titleColor={colorConstants?.secondary}
          fontSize={fontConstants?.small}
        />
        <CustomTitle
          title={`Nav ${unit}`}
          titleColor={colorConstants?.secondary}
          fontSize={fontConstants?.small}
        />
      </View>
    </View>
  );
};

CustomPortfolioCard.propTypes = {
  fundsName: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  investment: PropTypes.string.isRequired,
  percentages: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
};

CustomPortfolioCard.defaultProps = {
  fundsName: '',
  unit: 0,
  investment: '',
  percentages: 0,
  color: colorConstants?.primary,
};
export default CustomPortfolioCard;
