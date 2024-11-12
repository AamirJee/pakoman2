import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { languageTxt } from '../../../../../utils/constants/languageTxt';
import { colorConstants } from '../../../../../utils/constants/colorConstants';
import { dimensionConstants } from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';
import { useGetAllowedTransactionTypes } from '../../../../../modules/m_transactions/hooks';
import { useAuthentication } from '../../../../../utils/globalHooks';

const Menus = () => {

  const navigation = useNavigation();
  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { data: authData }: any = useAuthentication();


  const [data, setData] = useState([]);
  const { data: transactionTypes, refetch } = useGetAllowedTransactionTypes();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (transactionTypes)
      transactionTypes
        .then((value: any) => {
          setIsLoading(false);
          if (value?.data) {
            let array: any = [];
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

  useEffect(() => {
    if (authData?.userProfile)
      console.log('Menu', authData?.userProfile?.['MNGMNT COMPANY'])
    setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
    let backgrndColor = mngmntCompany == 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor)
    console.log('Background Color Menu: ', bgColor) 
  }, [bgColor]);


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
      bgColor={bgColor}
      title={languageTxt?.reactStackKeys?.user?.eTransactions?.name}>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default Menus;
