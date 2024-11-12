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
import { useAuthentication} from '../../../../utils/globalHooks';

import Skeleton from '../../../shared/Skeleton';
import CustomSnack from '../../../shared/CustomSnack';
import CustomTitle from '../../../shared/CustomTitle';
import CustomButton from '../../../shared/CustomButton';


const Alerts = () => {
  
  
  const {data, refetch} = useGetUOSAlert();
  const [isLoading, setIsLoading] = useState(true);
  const [alertData, setAlertData] = useState([]);
  const [redemptionSMS, setRedemptionSMS] = React.useState(false);
  const [redemptionEmail, setRedemptionEmail] = React.useState(false);
  const [investmentSMS, setInvestmentSMS] = React.useState(false);
  const [investmentEmail, setInvestmentEmail] = React.useState(false);
  const [conversionSMS, setConversionSMS] = React.useState(false);
  const [conversionEmail, setConversionEmail] = React.useState(false);
  const [errorSnack, setErrorSnack] = useState('');

  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { data: authData }: any = useAuthentication();
  
  useEffect(() => {
    if (data)
      data
        .then((value: any) => {
          setIsLoading(false);
          if (value?.success) {
            setAlertData(value?.data);
            value?.data?.map((item: any) => {
              if (item?.id == '1011') {
                setInvestmentEmail(item?.status == 1 ? true : false);
              } else if (item?.id == '1012') {
                setInvestmentSMS(item?.status == 1 ? true : false);
              } else if (item?.id == '2011') {
                setRedemptionEmail(item?.status == 1 ? true : false);
              } else if (item?.id == '2012') {
                setRedemptionSMS(item?.status == 1 ? true : false);
              } else if (item?.id == '3011') {
                setConversionEmail(item?.status == 1 ? true : false);
              } else if (item?.id == '3012') {
                setConversionSMS(item?.status == 1 ? true : false);
              }
            });
          }
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [data]);

  useEffect(() => {
    if (authData?.userProfile)
      console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
      setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
      let backgrndColor = mngmntCompany == 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
      setBgColor(backgrndColor)
      console.log('Background Color Alert: ', bgColor) 
  }, [bgColor]); 


  const onSubmitVerifyTpin = async () => {
    setIsLoading(true);

    const {success, message} = await updateUOSAlertApi(
      investmentEmail ? '1' : '0',
      redemptionEmail ? '1' : '0',
      conversionEmail ? '1' : '0',
      investmentSMS ? '1' : '0',
      redemptionSMS ? '1' : '0',
      conversionSMS ? '1' : '0',
    );

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
        bgColor={bgColor}
        title={languageTxt?.reactStackKeys?.user?.alerts}>
        <View style={styles.container}>
          <CustomTitle
            fontSize={fontConstants.title}
            titleColor={bgColor}// titleColor={mngmntCompany !== 'RUSD Investment Bank' ? 'white' : colorConstants.primary}            
            title={languageTxt.notificationAlerts}
            extraStyles={{
              textAlign: 'center',
              padding: dimensionConstants?.paddingXXXSmall,
              paddingBottom: dimensionConstants?.paddingXXSmall
            }}
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
                  value={
                    element?.item?.id == '1011'
                      ? investmentEmail
                      : element?.item?.id == '1012'
                      ? investmentSMS
                      : element?.item?.id == '2011'
                      ? redemptionEmail
                      : element?.item?.id == '2012'
                      ? redemptionSMS
                      : element?.item?.id == '3011'
                      ? conversionEmail
                      : element?.item?.id == '3012'
                      ? conversionSMS
                      : false
                  }
                  onValueChange={() => {
                    if (element?.item?.id == '1011') {
                      setInvestmentEmail(!investmentEmail);
                    } else if (element?.item?.id == '1012') {
                      setInvestmentSMS(!investmentSMS);
                    } else if (element?.item?.id == '2011') {
                      setRedemptionEmail(!redemptionEmail);
                    } else if (element?.item?.id == '2012') {
                      setRedemptionSMS(!redemptionSMS);
                    } else if (element?.item?.id == '3011') {
                      setConversionEmail(!conversionEmail);
                    } else if (element?.item?.id == '3012') {
                      setConversionSMS(!conversionSMS);
                    }
                  }}
                  color={colorConstants.primary}
                />
              </View>
            )}
          />
          <CustomButton
            backgroundColor= {bgColor}//{mngmntCompany !== 'RUSD Investment Bank' ? bgColor : colorConstants.primary}
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
