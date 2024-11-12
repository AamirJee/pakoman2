import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Tab} from 'react-native-elements';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';
import {CustomSummaryCardInterface} from '../../../../shared/CustomSummaryCard/CustomSummaryCard.interface';
import {
  usePendingInvestment,
  useGetAllowedTransactionTypes,
  usePendingRedemptionConversion,
} from '../../../../../modules/m_transactions/hooks';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomSummaryCard from '../../../../shared/CustomSummaryCard';

const Summary = () => {
  const [index, setIndex] = useState(0);
  const [allowedTransactionTypes, setAllowedTransactionTypes] = useState({
    Conversion: 'false',
    Investment: 'false',
    Redemption: 'false',
  });
  const {data, refetch} = useGetAllowedTransactionTypes();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data)
      data
        .then((value: any) => {
          setIsLoading(false);
          if (value?.data) {
            if (value?.data?.Investment != 'true') {
              setIndex(1);
            }
            setAllowedTransactionTypes(value?.data);
          }
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [data]);

  const [investment, setInvestment] = useState([]);
  const [isLoadingInvestment, setIsLoadingInvestment] = useState(true);
  const {data: investmentData} = usePendingInvestment();
  useEffect(() => {
    if (investmentData)
      investmentData
        .then((value: any) => {
          setIsLoadingInvestment(false);
          value?.success && setInvestment(value?.data);
        })
        .catch((e: any) => {
          setIsLoadingInvestment(false);
        });
  }, [investmentData]);

  const [redemptionConversion, setRedemptionConversion] = useState([]);
  const [isLoadingRedemption, setIsLoadingRedemption] = useState(false);
  const {data: redemptionConversionData} = usePendingRedemptionConversion();
  useEffect(() => {
    if (redemptionConversionData)
      redemptionConversionData
        .then((value: any) => {
          setIsLoadingRedemption(false);
          value?.success && setRedemptionConversion(value?.data);
        })
        .catch((e: any) => {
          setIsLoadingRedemption(false);
        });
  }, [redemptionConversionData]);

  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      isLoading={isLoadingInvestment || isLoadingRedemption || isLoading}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.summary
          ?.transactionSummary
      }>
      <View style={styles.container}>
        <Tab value={index} onChange={setIndex} disableIndicator>
          <Tab.Item
            title={languageTxt.pendingInvestment}
            containerStyle={[
              styles.containerTab,
              allowedTransactionTypes?.['Investment'] == 'false' && {
                display: 'none',
              },
            ]}
            TouchableComponent={TouchableOpacity}
            buttonStyle={[
              styles.buttonStyle,
              index === 0 ? styles.tabActive : {},
            ]}
            titleStyle={[
              styles.tabTittle,
              index === 0 ? styles.tabTittleActive : {},
            ]}
          />
          <Tab.Item
            title={languageTxt.pendingRedemptionConversion}
            containerStyle={[
              styles.containerTab,
              allowedTransactionTypes?.['Conversion'] == 'false' && {
                display: 'none',
              },
            ]}
            TouchableComponent={TouchableOpacity}
            buttonStyle={[
              styles.buttonStyle,
              index === 1 ? styles.tabActive : {},
            ]}
            titleStyle={[
              styles.tabTittle,
              index === 1 ? styles.tabTittleActive : {},
            ]}
          />
        </Tab>
        {index === 0 ? (
          <>
            {investment ? (
              investment?.map(
                (element: CustomSummaryCardInterface, key: number) => (
                  <CustomSummaryCard
                    key={key}
                    amount={element.amount}
                    from={element.to}
                    to={
                      element?.transactionType == 'Investment'
                        ? ''
                        : element.from
                    }
                    transactionDate={
                      element.transactionDate?.split(' ')?.length > 0
                        ? element.transactionDate?.split(' ')[0]
                        : ''
                    }
                    transactionType={element.transactionType}
                    units={element.units}
                    index={index}
                  />
                ),
              )
            ) : (
              <View style={styles.noDataContainer}>
                <MaterialCommunityIcons
                  name="alert"
                  size={dimensionConstants?.iconXXLarge}
                  color={colorConstants?.primary}
                />
                <CustomTitle
                  title={languageTxt?.noDataAvailable}
                  fontSize={fontConstants.large}
                />
              </View>
            )}
          </>
        ) : (
          <>
            {redemptionConversion ? (
              redemptionConversion?.map(
                (element: CustomSummaryCardInterface, key: number) => (
                  <CustomSummaryCard
                    key={key}
                    amount={element.amount}
                    from={element.from}
                    to={element.to}
                    transactionDate={
                      element.transactionDate?.split(' ')?.length > 0
                        ? element.transactionDate?.split(' ')[0]
                        : ''
                    }
                    transactionType={element.transactionType}
                    units={element.units}
                    index={index}
                  />
                ),
              )
            ) : (
              <View style={styles.noDataContainer}>
                <MaterialCommunityIcons
                  name="alert"
                  size={dimensionConstants?.iconXXLarge}
                  color={colorConstants?.primary}
                />
                <CustomTitle
                  title={languageTxt?.noDataAvailable}
                  fontSize={fontConstants.large}
                />
              </View>
            )}
          </>
        )}
      </View>
    </Skeleton>
  );
};

export default Summary;
