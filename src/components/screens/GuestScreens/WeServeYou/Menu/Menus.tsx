import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomList from '../../../../shared/CustomList';
import CustomMenuCard from '../../../../shared/CustomMenuCard';
import {Linking} from 'react-native';

const Menus = () => {
  const navigation = useNavigation();

  const data = [
    {
      title: languageTxt?.reactStackKeys?.guest?.weServeYou?.companyInfromation,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="office-building"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.weServeYou?.needAFinancialAdvisor,
      link: 'https://pakomanfunds.com/need-a-financial-advisor/',
      icon: (
        <MaterialCommunityIcons
          name="human-male-board-poll"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.weServeYou?.postAQueryComplaintForm,
      link: 'https://pakomanfunds.com/query-complaint/',
      icon: (
        <MaterialCommunityIcons
          name="alert-outline"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.weServeYou?.accountStatement,
      link: 'https://pakomanfunds.com/account-statement/',
      icon: (
        <MaterialCommunityIcons
          name="file-chart-outline"
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
        onPress={async () => {
          item?.link
            ? await Linking.openURL(item?.link)
            : navigation.navigate(item?.title);
        }}
      />
    );
  };

  return (
    <Skeleton
      isBack={false}
      isScroll={false}
      isBottomNav={true}
      title={languageTxt?.reactStackKeys?.guest?.weServeYou?.name}>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default Menus;
