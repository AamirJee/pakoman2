import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomRegisterCard from '../../../../shared/CustomRegisterCard';

const InvestorTypes = () => {
  const navigation = useNavigation();

  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.auth?.register?.investorTypes}
      isBottomNav={true}>
      <>
        <CustomTitle
          title={languageTxt?.selectYourInvestmentType}
          titleColor={colorConstants?.drakGray}
          fontWeight={fontConstants?.fontWeight600}
          fontSize={fontConstants?.header}
          extraStyles={{
            textAlign: 'center',
            paddingTop: dimensionConstants?.paddingXXXLarge,
            paddingHorizontal: dimensionConstants?.paddingXXXLarge,
          }}
        />
        <View style={styles?.typeContainer}>
          <CustomRegisterCard
            title={`${languageTxt?.registerAsA} ${languageTxt?.corporateInvestorTitle}`}
            description={languageTxt?.corporateInvestorDetail}
            handleOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.corporateInvestor,
              );
            }}
          />

          <CustomRegisterCard
            title={`${languageTxt?.registerAsA} ${languageTxt?.individualInvestorTitle}`}
            description={languageTxt?.individualInvestorDetail}
            handleOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.individualInvestor,
              );
            }}
          />

          {/* <CustomRegisterCard
            title={`${languageTxt?.registerAsA} ${languageTxt?.pensionInvestorTitle}`}
            description={languageTxt?.pensionInvestorDetail}
            handleOnPress={() => {
              navigation.navigate(
                languageTxt?.reactStackKeys?.auth?.register?.pensionInvestor,
              );
            }}
          /> */}
        </View>
      </>
    </Skeleton>
  );
};

export default InvestorTypes;
