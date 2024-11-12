import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../../shared/Skeleton';
import CustomTitle from '../../../../../shared/CustomTitle';
import CustomDoubleButton from '../../../../../shared/CustomDoubleButton';

const Declaration = () => {
  const navigation = useNavigation();
  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
          ?.declaration
      }>
      <View style={styles.container}>
        <View style={styles.textContainer}>
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
            title={languageTxt.eTransactionsDeclaration0}
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
        </View>
        <CustomDoubleButton
          primaryButtonText={languageTxt?.txtAgree}
          secondaryButtonText={languageTxt?.txtDisagree}
          secondaryExtraStyles={styles.buttonBottomMargin}
          handlePrimaryOnPress={() => {
            navigation.navigate(
              languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
                ?.form,
            );
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
