import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';
import {useGetAllowedTransactionTypes} from '../../../../../modules/m_transactions/hooks';

const Menus = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const {data: transactionTypes, refetch} = useGetAllowedTransactionTypes();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (transactionTypes)
      transactionTypes
        .then((value: any) => {
          setIsLoading(false);
          if (value?.data) {
            let array: any = [];
            if (value?.data?.Redemption == 'true') {
              array.push({
                title:
                  languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
                    ?.name,
                icon: (
                  <MaterialCommunityIcons
                    name="hand-coin"
                    size={dimensionConstants?.iconLarge}
                    color={colorConstants?.white}
                  />
                ),
              });
            }
            if (value?.data?.Conversion == 'true') {
              array.push({
                title:
                  languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
                    ?.name,
                icon: (
                  <MaterialCommunityIcons
                    name="cached"
                    size={dimensionConstants?.iconLarge}
                    color={colorConstants?.white}
                  />
                ),
              });
            }
            if (value?.data?.Investment == 'true') {
              array.push({
                title:
                  languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
                    ?.name,
                icon: (
                  <MaterialCommunityIcons
                    name="finance"
                    size={dimensionConstants?.iconLarge}
                    color={colorConstants?.white}
                  />
                ),
              });
            }
            array.push({
              title:
                languageTxt?.reactStackKeys?.user?.eTransactions?.summary?.name,
              icon: (
                <MaterialCommunityIcons
                  name="file-clock"
                  size={dimensionConstants?.iconLarge}
                  color={colorConstants?.white}
                />
              ),
            });
            setData(array);
          }
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [transactionTypes]);

  const renderCard = (item: any) => {
    return (
      <CustomMenuCard
        title={item?.title}
        icon={item?.icon}
        onPress={() => {
          navigation.navigate(item?.title);
        }}
      />
    );
  };

  return (
    <Skeleton
      isBack={false}
      isScroll={false}
      isBottomNav={true}
      isLoading={isLoading}
      title={languageTxt?.reactStackKeys?.user?.eTransactions?.name}>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default Menus;
