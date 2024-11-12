import React, {useEffect, useState} from 'react';
import {Switch} from 'react-native-paper';
import {FlatList, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {updateUOSAlertApi} from '../../../../modules/m_transactions/api';
import {useGetUOSAlert} from '../../../../modules/m_transactions/hooks';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../shared/Skeleton';
import CustomSnack from '../../../shared/CustomSnack';
import CustomTitle from '../../../shared/CustomTitle';
import CustomButton from '../../../shared/CustomButton';

const Alerts = () => {
  const {data, refetch} = useGetUOSAlert();
  const [isLoading, setIsLoading] = useState(true);
  const [alertData, setAlertData] = useState([]);
  const [errorSnack, setErrorSnack] = useState('');

  useEffect(() => {
    if (data)
      data
        .then((value: any) => {
          setIsLoading(false);
          if (value?.success) {
            setAlertData(value?.data);
          }
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [data]);

  const onSubmitVerifyTpin = async () => {
    let apiData = '';
    alertData?.map((item: any) => {
      apiData =
        apiData +
        '<Alert' +
        item?.id +
        '>' +
        item?.status +
        '</Alert' +
        item?.id +
        '>';
    });
    setIsLoading(true);
    const {success, message} = await updateUOSAlertApi(apiData);
    setIsLoading(false);
    setErrorSnack(message);
    success && refetch();
  };
  return (
    <>
      <Skeleton
        isLoading={isLoading}
        isBack={false}
        isBottomNav={true}
        title={languageTxt?.reactStackKeys?.user?.alerts}>
        <View style={styles.container}>
          <CustomTitle
            fontSize={fontConstants.title}
            titleColor={colorConstants.primary}
            title={languageTxt.notificationAlerts}
          />

          <FlatList
            data={alertData}
            ListEmptyComponent={() => (
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
            renderItem={(element: any) => (
              <View style={styles.itemContainer}>
                <CustomTitle title={element?.item?.name} />
                <Switch
                  value={element?.item?.status == 1 ? true : false}
                  onValueChange={() => {
                    let newArray: any = [];
                    alertData?.map((item: any) => {
                      newArray.push({
                        ...item,
                        status:
                          element?.item?.id == item?.id
                            ? item?.status == 1
                              ? 0
                              : 1
                            : item?.status,
                      });
                    });
                    setAlertData(newArray);
                  }}
                  color={colorConstants.primary}
                />
              </View>
            )}
          />
          <CustomButton
            buttonText={languageTxt?.saveChanges}
            handleOnPress={onSubmitVerifyTpin}
            extraStyles={styles?.button}
          />
        </View>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default Alerts;
