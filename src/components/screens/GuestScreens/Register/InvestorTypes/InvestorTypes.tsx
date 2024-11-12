import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useForm, Controller, set } from 'react-hook-form';

//import { useManagementComanies, } from '../../../../../modules/m_transactions/hooks';

import { styles } from './styles';
import { languageTxt } from '../../../../../utils/constants/languageTxt';
import { fontConstants } from '../../../../../utils/constants/fontConstants';
import { colorConstants } from '../../../../../utils/constants/colorConstants';
import { dimensionConstants } from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomRegisterCard from '../../../../shared/CustomRegisterCard';
import CustomInput from '../../../../shared/CustomInput';
import CustomModal from '../../../../shared/CustomModal';
import AlertModal from '../../../../shared/AlertModal/AlertModal';
import { getAllMgmtCompaniesApi } from '../../../../../modules/m_transactions/api';

const InvestorTypes = () => {
  const navigation = useNavigation();
  const [bgColor, setBgColor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [managementCompanies, setManagementCompanies] = useState([]);
  const [open, setOpen] = useState(false);
  const [SelectedData, setSelectedData] = useState({
    fundCode: '',
    fundName: '',
  });

  const [mgCompCode, setMgCompCode] = useState('');
  const [mgCompName, setMgCompName] = useState('');

  const [msgModal, setMsgModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
  useEffect(() => {
    GetManagementCompanies()
  }, []);

  const GetManagementCompanies = async () => {
    setIsLoading(true);
    const mgCompanies = await getAllMgmtCompaniesApi()
    if (mgCompanies.success) {
      setIsLoading(false)
      Object.entries(mgCompanies).forEach(entry => {
        const [key, value] = entry;
        if (key === 'data') {
          setManagementCompanies(value)

        }
      });
    }
    else {
      setIsLoading(false);
    }
  }

  const resetMe = (mgComapny: string) => {
    console.log('setManagementCompany', mgComapny)
    let backgrndColor = mgComapny === 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor)
    setMgCompName(mgComapny)
  }

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mgCode: '',
      mgCompany: '',
    },
    mode: 'onTouched',
  });


  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.auth?.register?.investorTypes}
      isBottomNav={true}
      bgColor={bgColor}
    >
      <>

        <CustomTitle
          title={languageTxt?.selectYourManangementCompany}
          titleColor={colorConstants?.drakGray}
          fontWeight={fontConstants?.fontWeight600}
          fontSize={fontConstants?.header}
          extraStyles={{
            textAlign: 'center',
            paddingTop: dimensionConstants?.paddingXXXLarge,
            paddingHorizontal: dimensionConstants?.paddingXXXLarge,
          }}
        />
        {/*Start dropdownlist */}
        {
          mgCompName !== "" ? null :
            <View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.mgCompany}
                    errorMsg={errors && errors?.mgCompany?.message}
                    placeHolder={languageTxt.managementCompany}
                    disabled={true}
                    value={value}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="format-list-bulleted-type"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                    rightIcon={
                      <MaterialCommunityIcons
                        name="arrow-down-drop-circle"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                    rightIconClick={() => {
                      setOpen(true);
                    }}
                  />
                )}
                name="mgCompany"
                rules={{
                  required: {
                    value: true,
                    message: languageTxt?.txtManagementCompanyError,
                  },
                }}
              />
            </View>
        }
        {/*Endt dropdownlist */}

        <View style={styles.imageView}>
          {
            mgCompName === 'RUSD Capital'
              ? <Image style={styles?.imageStyle} source={require('../../../../../assets/logo/logo.png')} />
              : <Image style={styles?.imageStyle} source={require('../../../../../assets/logo/logo2.png')} />
          }
        </View>

        {/*Start dropdownlist  */}
        <CustomModal
          open={open}
          onRequestClose={() => setOpen(false)}
          title={languageTxt?.managementCompany}
          body={
            <FlatList
              style={styles.flatListContainer}
              data={managementCompanies}
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
                <TouchableOpacity
                  style={styles.listContainer}
                  activeOpacity={dimensionConstants?.activeOpacity}
                  onPress={() => {
                    setSelectedData({ ...element?.item })
                    setValue('mgCompany', element?.item?.retName)
                    setMgCompCode(element?.item?.retCode)
                    setMgCompName(element?.item?.retName)

                    clearErrors();
                    setOpen(false);
                    resetMe(element?.item?.retName);
                  }}>
                  <CustomTitle title={`${element?.item?.retName}`} />
                </TouchableOpacity>
              )}
            />
          }
        />

        <AlertModal
          open={msgModal}
          title={alertTitle}
          description={alertDescription}
          onRequestClose={() => {
            setMsgModal(false);
            setAlertTitle('');
            setAlertDescription('');
            navigation.navigate(
              // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
              '',
            );
          }}
        />

        {/*End DropdownList*/}
        {mgCompName === "" ? null :
          <View>
            <CustomTitle
              title={languageTxt?.selectYourInvestmentType}
              titleColor={colorConstants?.drakGray}
              fontWeight={fontConstants?.fontWeight500}
              fontSize={fontConstants?.header}
              extraStyles={{
                textAlign: 'center',
                paddingTop: dimensionConstants?.paddingXXXLarge,
                paddingHorizontal: dimensionConstants?.paddingXXXLarge,
              }}
            />

            <View style={styles?.typeContainer}>
              <CustomRegisterCard
                title={`${languageTxt?.registerAsA} ${languageTxt?.corporateInvestorTitle}`}
                description={languageTxt?.corporateInvestorDetail}
                bgColor={bgColor}
                handleOnPress={() => {
                  navigation.navigate(
                    languageTxt?.reactStackKeys?.auth?.register?.corporateInvestor,
                  );
                }}
              />

              <CustomRegisterCard
                title={`${languageTxt?.registerAsA} ${languageTxt?.individualInvestorTitle}`}
                description={languageTxt?.individualInvestorDetail}
                bgColor={bgColor}
                handleOnPress={() => {
                  navigation.navigate(
                    languageTxt?.reactStackKeys?.auth?.register?.individualInvestor,
                  );
                }}
              />
            </View>
          </View>
        }
        {/* <View style={{ position: 'relative', alignItems: 'center', }} >
          <TouchableOpacity
            style={{
              marginTop: 440,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'pink',
              width: dimensionConstants.bottomNavSize,
              height: dimensionConstants.bottomNavSize,
              borderRadius: dimensionConstants?.bottomNavBorderRadius,
            }}
            activeOpacity={0.9}
          >
            <MaterialCommunityIcons name="home" style={{ fontSize: 30, color: colorConstants?.white, zIndex: -1,  }} />
          </TouchableOpacity>
        </View> */}


      </>
    </Skeleton>

  );
};

export default InvestorTypes;
