import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';
import { colorConstants } from '../../../../../../utils/constants/colorConstants';

import Skeleton from '../../../../../shared/Skeleton';
import CustomTitle from '../../../../../shared/CustomTitle';
import CustomDoubleButton from '../../../../../shared/CustomDoubleButton';
import { useAuthentication} from '../../../../../../utils/globalHooks';

const Declaration = () => {
  const navigation = useNavigation();
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
    <Skeleton
      isBack={true}
      isBottomNav={true}
      bgColor={bgColor}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
          ?.declaration
      }>
      <View style={styles.container}>
      <View style={styles.textContainer}>
          <CustomTitle
            title={''}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration0}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>

        {/* <View style={styles.textContainer}>
          <CustomTitle
            title={'1. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration1}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'2. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration2}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'3. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration3}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'4. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration4}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'5. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration5}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'6. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration6}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'7. '}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={languageTxt.eTransactionsDeclaration7}
            fontSize={fontConstants.middle}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View> */}
        <CustomDoubleButton
          primaryButtonText={languageTxt?.txtAgree}
          secondaryButtonText={languageTxt?.txtDisagree}
          secondaryExtraStyles={styles.buttonBottomMargin}
          handlePrimaryOnPress={() => {
            navigation.navigate(
              languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
                ?.form,);
          }}
          handleSecondaryOnPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </Skeleton>
  );
};

export default Declaration;
