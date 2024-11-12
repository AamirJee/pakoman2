import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';

const Menus = () => {
  const navigation = useNavigation();

  const data = [
    {
      title: languageTxt?.reactStackKeys?.guest?.aboutus?.whoWeAre,
      icon: (
        <MaterialCommunityIcons
          name="handshake"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.aboutus?.codeofConduct,
      icon: (
        <MaterialCommunityIcons
          name="account-multiple"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.aboutus?.policies,
      icon: (
        <MaterialCommunityIcons
          name="format-list-text"
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
      isBack={false}
      isScroll={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.name}>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default Menus;
