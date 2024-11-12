import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {numberWithCommas} from '../../../utils/function';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {CustomETransactionsCardInterface} from './CustomETransactionsCard.interface';

import CustomCard from '../CustomCard';
import CustomTitle from '../CustomTitle';

const CustomETransactionsCard = ({
  accountTitle,
  accountType,
  balanceUnits,
  bankAccountNo,
  bankBranchCode,
  bankCity,
  folioNumber,
  fundClassType,
  fundName,
  fundTypeName,
  holdingUnits,
  ibanNo,
  netAmount,
  redeemableAmount,
  redeemableUnits,
  requestedUnits,
  unitPrice,
  onClick,
}: CustomETransactionsCardInterface) => {
  return (
    <CustomCard
      isClickable={true}
      handleOnPress={() =>
        onClick({
          accountTitle,
          accountType,
          balanceUnits,
          bankAccountNo,
          bankBranchCode,
          bankCity,
          folioNumber,
          fundClassType,
          fundName,
          fundTypeName,
          holdingUnits,
          ibanNo,
          netAmount,
          redeemableAmount,
          redeemableUnits,
          requestedUnits,
          unitPrice,
        })
      }
      body={
        <View style={styles.cardContainer}>
          <View style={styles.cardInnerContainer}>
            <View style={styles.leftTextContainer}>
              <CustomTitle
                title={languageTxt.productName}
                fontSize={fontConstants.middle}
              />
              <CustomTitle
                title={fundName}
                fontWeight={fontConstants.fontWeight400}
                fontSize={fontConstants.small}
              />
              {/* <View style={styles.textContainer}>
                <CustomTitle
                  title={languageTxt.classCode}
                  fontSize={fontConstants.small}
                />
                <CustomTitle
                  title={fundClassType}
                  fontSize={fontConstants.small}
                  fontWeight={fontConstants.fontWeight400}
                />
              </View> */}
              {/* <View style={styles.textContainer}>
                <CustomTitle
                  title={languageTxt.typeName}
                  fontSize={fontConstants.small}
                />
                <CustomTitle
                  title={fundTypeName}
                  fontSize={fontConstants.small}
                  fontWeight={fontConstants.fontWeight400}
                />
              </View> */}
            </View>
            <View style={styles.rightTextContainer}>
              <CustomTitle
                title={languageTxt.Redeemable}
                fontSize={fontConstants.middle}
              />
              <CustomTitle
                title={`PKR ${numberWithCommas(Number(redeemableAmount))}`}
                fontSize={fontConstants.small}
                fontWeight={fontConstants.fontWeight600}
                titleColor={colorConstants?.secondaryLight}
                extraStyles={{marginVertical: 3}}
              />
              <CustomTitle
                title={`Units ${numberWithCommas(Number(redeemableUnits))}`}
                fontSize={fontConstants?.small}
                fontWeight={fontConstants.fontWeight600}
                titleColor={colorConstants?.secondaryLight}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <CustomTitle
                title={languageTxt.reqUnits}
                fontSize={fontConstants.small}
              />
              <CustomTitle
                title={`${numberWithCommas(Number(requestedUnits))}`}
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
                title={`${numberWithCommas(Number(balanceUnits))}`}
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

CustomETransactionsCard.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountType: PropTypes.string.isRequired,
  balanceUnits: PropTypes.string.isRequired,
  bankAccountNo: PropTypes.string.isRequired,
  bankBranchCode: PropTypes.string.isRequired,
  bankCity: PropTypes.string.isRequired,
  folioNumber: PropTypes.string.isRequired,
  fundClassType: PropTypes.string.isRequired,
  fundName: PropTypes.string.isRequired,
  fundTypeName: PropTypes.string.isRequired,
  holdingUnits: PropTypes.string.isRequired,
  ibanNo: PropTypes.string.isRequired,
  netAmount: PropTypes.string.isRequired,
  redeemableAmount: PropTypes.string.isRequired,
  redeemableUnits: PropTypes.string.isRequired,
  unitPrice: PropTypes.string.isRequired,
};

CustomETransactionsCard.defaultProps = {
  accountTitle: '',
  accountType: '',
  balanceUnits: '',
  bankAccountNo: '',
  bankBranchCode: '',
  bankCity: '',
  folioNumber: '',
  fundClassType: '',
  fundName: '',
  fundTypeName: '',
  holdingUnits: '',
  ibanNo: '',
  netAmount: '',
  redeemableAmount: '',
  redeemableUnits: '',
  unitPrice: '',
};

export default CustomETransactionsCard;
