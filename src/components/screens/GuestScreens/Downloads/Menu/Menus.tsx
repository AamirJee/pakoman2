import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';

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
      title: languageTxt?.reactStackKeys?.guest?.downloads?.fundManagersReport,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="chart-bar"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.navHistory,
      link: 'https://pakomanfunds.com/nav-history/',
      icon: (
        <MaterialCommunityIcons
          name="history"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.applicationForms,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="file-document-edit"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.downloads?.constitutiveDocuments,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="file-document-multiple"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.financialStatements,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="chart-bar-stacked"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.howToInvest,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="hand-coin"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.proxyVotingPolicy,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="file-find"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.downloads?.provisioningPolicyFinal,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="television-guide"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title: languageTxt?.reactStackKeys?.guest?.downloads?.fatwah,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="mosque"
          size={dimensionConstants?.iconLarge}
          color={colorConstants?.white}
        />
      ),
    },
    {
      title:
        languageTxt?.reactStackKeys?.guest?.downloads?.complianceCertificate,
      link: '',
      icon: (
        <MaterialCommunityIcons
          name="certificate"
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
      title={languageTxt?.reactStackKeys?.guest?.downloads?.name}>
      <CustomList renderItemView={renderCard} listData={data} />
    </Skeleton>
  );
};

export default Menus;
