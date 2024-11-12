import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {numberWithCommas} from '../../../utils/function';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {CustomSummaryCardInterface} from './CustomSummaryCard.interface';

import CustomCard from '../CustomCard';
import CustomTitle from '../CustomTitle';

const CustomSummaryCard = ({
  amount,
  from,
  to,
  transactionDate,
  transactionType,
  units,
  index,
}: CustomSummaryCardInterface) => {
  return (
    <CustomCard
      body={
        <View style={styles.cardContainer}>
          <View style={styles.cardInnerContainer}>
            <View style={styles.leftTextContainer}>
              <View style={styles.textContainer}>
                <CustomTitle
                  title={index == 0 ? languageTxt.fund : languageTxt.fromFund}
                  fontSize={fontConstants.small}
                />
                <CustomTitle
                  title={from}
                  fontSize={fontConstants.small}
                  fontWeight={fontConstants.fontWeight400}
                />
              </View>
              {transactionType != 'Investment' && (
                <View style={styles.textContainer}>
                  <CustomTitle
                    title={index == 0 ? languageTxt.to : languageTxt.toFund}
                    fontSize={fontConstants.small}
                  />
                  <CustomTitle
                    title={to}
                    fontSize={fontConstants.small}
                    fontWeight={fontConstants.fontWeight400}
                  />
                </View>
              )}
            </View>
            <View style={styles.rightTextContainer}>
              <CustomTitle
                title={languageTxt.pendingTransaction}
                fontSize={fontConstants.middle}
              />
              <CustomTitle
                title={`PKR ${numberWithCommas(Number(amount).toFixed(2))}`}
                fontSize={fontConstants.small}
                fontWeight={fontConstants.fontWeight600}
                titleColor={colorConstants?.secondaryLight}
                extraStyles={{marginVertical: 3}}
              />
              <CustomTitle
                title={`Units ${numberWithCommas(Number(units).toFixed(4))}`}
                fontSize={fontConstants?.small}
                fontWeight={fontConstants.fontWeight600}
                titleColor={colorConstants?.secondaryLight}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{flex: 1}}>
              <CustomTitle
                title={languageTxt.transactionDate}
                fontSize={fontConstants.small}
              />
              <CustomTitle
                title={transactionDate}
                fontSize={fontConstants.small}
                fontWeight={fontConstants.fontWeight600}
                titleColor={colorConstants?.secondaryLight}
              />
            </View>
            <View>
              <CustomTitle
                title={languageTxt.transactionType}
                fontSize={fontConstants.small}
              />
              <CustomTitle
                title={transactionType}
                fontSize={fontConstants.small}
                fontWeight={fontConstants.fontWeight600}
                titleColor={colorConstants?.secondaryLight}
              />
            </View>
          </View>
        </View>
      }
    />
  );
};

CustomSummaryCard.propTypes = {
  amount: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  transactionDate: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

CustomSummaryCard.defaultProps = {
  amount: '',
  from: '',
  to: '',
  transactionDate: '',
  transactionType: '',
  units: '',
};

export default CustomSummaryCard;
