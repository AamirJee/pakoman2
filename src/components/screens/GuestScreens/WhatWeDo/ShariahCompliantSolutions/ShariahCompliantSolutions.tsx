import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';

const ShariahCompliantSolutions = () => {
  const navigation = useNavigation();

  const data = [
    {
      title:
        languageTxt?.reactStackKeys?.guest?.whatWeDo?.shariahCompliantSolutions
          ?.poaiif,
      icon: (
        <MaterialCommunityIcons
          name="hand-coin-outline"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.whatWeDo?.shariahCompliantSolutions
          ?.poiaaf,
      icon: (
        <MaterialCommunityIcons
          name="home-analytics"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.whatWeDo?.shariahCompliantSolutions
          ?.poddf,
      icon: (
        <MaterialCommunityIcons
          name="cash-multiple"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
  ];

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
      isScroll={false}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.guest?.whatWeDo?.shariahCompliantSolutions
          ?.name
      }>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default ShariahCompliantSolutions;
