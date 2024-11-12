import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {usePoliciesInfo} from '../../../../../modules/m_transactions/hooks';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Policies = () => {
  const navigation = useNavigation();
  const {data, isLoading} = usePoliciesInfo();

  const renderCard = (item: any) => {
    return (
      <CustomMenuCard
        title={item?.name}
        icon={
          <MaterialCommunityIcons
            name="file-pdf-box"
            size={dimensionConstants?.iconLarge}
            color={colorConstants?.white}
          />
        }
        numberOfline={4}
        onPress={() => {
          navigation.navigate(
            languageTxt?.reactStackKeys?.guest?.aboutus?.policyDetail,
            {
              data: item,
            },
          );
        }}
      />
    );
  };

  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.policies}
      isBottomNav={true}
      isLoading={isLoading}>
      <CustomList renderItemView={renderCard} listData={data?.data} />
    </Skeleton>
  );
};

export default Policies;
