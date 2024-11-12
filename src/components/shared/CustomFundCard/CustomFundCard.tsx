import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {numberWithCommas} from '../../../utils/function';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {CustomFundCardInterface} from './CustomFundCard.interface';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';

import CustomTitle from '../CustomTitle';

const CustomFundCard = ({
  title,
  heading1,
  description1,
  heading2,
  description2,
  balanceUnits,
  requestedUnits,
  minimunInvestmentAmount,
  minimunReInvestmentAmount,
  heading3,
  description3,
  heading4,
  description4,
}: CustomFundCardInterface) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomTitle title={title} extraStyles={styles.title} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.subBodyContainer}>
          <CustomTitle title={heading1} extraStyles={styles.header} />
          <CustomTitle
            title={`${description1}`}
            extraStyles={styles.description}
          />
        </View>
        <View style={styles.subBodyContainer}>
          <CustomTitle title={heading2} extraStyles={styles.header} />
          <CustomTitle
            title={`${description2}`}
            extraStyles={styles.description}
          />
        </View>
      </View>
      {minimunReInvestmentAmount && minimunReInvestmentAmount && (
        <View style={[styles.bodyContainer, {paddingTop: 0}]}>
          <View style={styles.subBodyContainer}>
            <CustomTitle
              title={'Minimum Investment'}
              extraStyles={[styles.header, {color: colorConstants.primary}]}
            />
            <CustomTitle
              title={`PKR ${minimunInvestmentAmount}`}
              extraStyles={styles.description}
            />
          </View>
          <View style={styles.subBodyContainer}>
            <CustomTitle
              title={'Minimum Re-Investment'}
              extraStyles={[styles.header, {color: colorConstants.primary}]}
            />
            <CustomTitle
              title={`PKR ${minimunReInvestmentAmount}`}
              extraStyles={styles.description}
            />
          </View>
        </View>
      )}
      {requestedUnits && balanceUnits && (
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <CustomTitle
              title={languageTxt.reqUnits}
              fontSize={fontConstants.small}
            />
            <CustomTitle
              title={`${requestedUnits}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants?.secondaryLight}
            />
          </View>
          <View style={styles.textContainer}>
            <CustomTitle
              title={languageTxt.balUnits}
              fontSize={fontConstants.small}
            />
            <CustomTitle
              title={`${balanceUnits}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants?.secondaryLight}
            />
          </View>
        </View>
      )}

      {description3 && description4 && (
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <CustomTitle title={`${heading3}`} fontSize={fontConstants.small} />
            <CustomTitle
              title={`${description3}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants?.secondaryLight}
            />
          </View>
          <View style={styles.textContainer}>
            <CustomTitle title={`${heading4}`} fontSize={fontConstants.small} />
            <CustomTitle
              title={`${description4}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants?.secondaryLight}
            />
          </View>
        </View>
      )}
    </View>
  );
};

CustomFundCard.propTypes = {
  title: PropTypes.string.isRequired,
  heading1: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  balanceUnits: PropTypes.string,
  requestedUnits: PropTypes.string,
};

CustomFundCard.defaultProps = {
  title: '',
  heading1: '',
  description1: '',
  heading2: '',
  description2: '',
  balanceUnits: '',
  requestedUnits: '',
};
export default CustomFundCard;
