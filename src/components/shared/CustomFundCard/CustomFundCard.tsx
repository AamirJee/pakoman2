import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {numberWithCommas} from '../../../utils/function';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {CustomFundCardInterface} from './CustomFundCard.interface';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import { useAuthentication} from '../../../utils/globalHooks';

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

  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { data: authData }: any = useAuthentication();
  
  useEffect(() => {
    if (authData?.userProfile)
      console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
      setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
      let backgrndColor = mngmntCompany === 'RUSD Capital' ? '#374265' : '#60975c'
      setBgColor(backgrndColor)
  }, [bgColor]);

  
  return (
    <View style={[styles.container,{backgroundColor:bgColor}]}>
      <View style={[styles.headerContainer,{backgroundColor:bgColor}]}>
        <CustomTitle title={title} 
        fontWeight={fontConstants.fontWeight600}
        titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.subBodyContainer}>
          <CustomTitle title={heading1} 
          titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
          extraStyles={[styles.header]} />
          <CustomTitle
            title={`${description1}`}
            titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
            extraStyles={styles.description}
          />
        </View>
        <View style={styles.subBodyContainer}>
          <CustomTitle title={heading2} 
          titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
          extraStyles={styles.header} />
          <CustomTitle
            title={`${description2}`}              
            fontWeight={fontConstants.fontWeight600}
            titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
          />
        </View>
      </View>
      {minimunReInvestmentAmount && minimunReInvestmentAmount && (
        <View style={[styles.bodyContainer, {paddingTop: 0}]}>
          <View style={styles.subBodyContainer}>
            <CustomTitle
              title={'Minimum Investment'}
              extraStyles={styles.header}
              titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
            />
            <CustomTitle
              title={`${minimunInvestmentAmount}`}
              extraStyles={styles.description}
              titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
            />
          </View>
          <View style={styles.subBodyContainer}>
            <CustomTitle
              title={'Minimum Re-Investment'}
              extraStyles={styles.header}
              titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
            />
            <CustomTitle
              title={`${minimunReInvestmentAmount}`}
              extraStyles={styles.description}
            />
          </View>
        </View>
      )}
      {requestedUnits && balanceUnits && (
        <View style={styles.bottomContainer}>
          {/* <View style={styles.textContainer}>
            <CustomTitle
              title={languageTxt.reqUnits}
              fontSize={fontConstants.small}
            />
            <CustomTitle
              title={`${requestedUnits}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={mngmntCompany === 'RUSD Capital' ? colorConstants.white : 'white'}
            />
          </View> */}
          <View style={styles.lineBreak}></View>
          <View style={styles.textBalContainer}>
            <CustomTitle
              title={languageTxt.existingFundAvailable}
              fontSize={fontConstants.small}
              titleColor={colorConstants?.white}
            />
            <CustomTitle
              title={`${balanceUnits}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants.white }
            />
          </View>
        </View>
      )}

      { description4 && (
        <View style={styles.textBalContainer}>
          {/* <View style={styles.textBalContainer}>
            <CustomTitle 
            title={`${heading3}`} 
            fontSize={fontConstants.small} 
            titleColor={colorConstants.white}
            />
            <CustomTitle
              title={`${description3}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants.white}
            />
          </View> */}
          <View style={styles.textBalContainer}>
            <CustomTitle 
            title={`${heading4}`} 
            fontSize={fontConstants.small} 
            titleColor={colorConstants.white}
            />
            <CustomTitle
              title={`${description4}`}
              fontSize={fontConstants.small}
              fontWeight={fontConstants.fontWeight600}
              titleColor={colorConstants.white}
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
