import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {useAuthentication} from '../../../utils/globalHooks';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

import Skeleton from '../../shared/Skeleton';
import CustomTitle from '../../shared/CustomTitle';
import CustomInfoValue from '../../shared/CustomInfoValue';

const Profile = () => {
  const [data, setData] = useState([
    {
      label: 'Account Title',
      value: '-',
      icon: 'account',
    },
    {
      label: 'Account Status',
      value: 'Deactive',
      icon: 'account-box-multiple',
    },
    {
      label: 'Email Address',
      value: '-',
      icon: 'email',
    },
    {
      label: 'Account Opening Date',
      value: '-',
      icon: 'calendar-range',
    },
    {
      label: 'Cell Number',
      value: '-',
      icon: 'phone',
    },
    {
      label: 'Account Type',
      value: '-',
      icon: 'account-details',
    },
    {
      label: 'CNIC Expiry',
      value: '-',
      icon: 'card-account-details',
    },
    {
      label: 'Account Risk Level',
      value: '-',
      icon: 'speedometer',
    },
    {
      label: 'Account Zakat Status',
      value: '-',
      icon: 'mosque',
    },
    {
      label: 'Bank Name',
      value: '-',
      icon: 'bank',
    },
    {
      label: 'Account No',
      value: '-',
      icon: 'file-account',
    },
  ]);
  const [userName, setUserName] = useState('');

  const {data: authData}: any = useAuthentication();
  useEffect(() => {
    if (authData?.userProfile) {
      setUserName(authData?.userProfile?.['Account Title']);
      const newData = data?.map((oldItem: any) => {
        return {
          ...oldItem,
          value: authData?.userProfile?.[oldItem['label']],
        };
      });
      setData(newData);
    }
  }, [authData]);

  return (
    <Skeleton isBack={true} title={languageTxt?.reactStackKeys?.profile}>
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <MaterialCommunityIcons
            name="account-circle"
            color={colorConstants?.gray}
            size={dimensionConstants?.avatarLWidth}
          />
          <CustomTitle
            title={userName}
            fontSize={fontConstants?.large}
            titleColor={colorConstants?.drakGray}
            fontWeight={fontConstants?.fontWeightBold}
            extraStyles={{
              marginVertical: dimensionConstants?.margin,
              textAlign: 'center',
            }}
          />
        </View>
        {data?.map(item => (
          <CustomInfoValue
            label={item?.label}
            value={item?.value}
            icon={
              <MaterialCommunityIcons
                name={item?.icon}
                size={dimensionConstants?.iconXSmall}
                color={colorConstants?.primary}
              />
            }
          />
        ))}
      </View>
    </Skeleton>
  );
};

export default Profile;
