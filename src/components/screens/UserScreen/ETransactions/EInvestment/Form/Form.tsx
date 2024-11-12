import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useForm, Controller, set } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { numberWithCommas } from '../../../../../../utils/function';
import { languageTxt } from '../../../../../../utils/constants/languageTxt';
import { fontConstants } from '../../../../../../utils/constants/fontConstants';
import { getService } from '../../../../../../config/asyncStorage/asynDataStore';
import { colorConstants } from '../../../../../../utils/constants/colorConstants';
import { dimensionConstants } from '../../../../../../utils/constants/dimensionConstants';
import {
  getAccCode,
  getUserName,
} from '../../../../../../config/asyncStorage/acc_code';
import {
  generateTpinApi,
  verifyTpinApi,
  getServiceFeeApi,
} from '../../../../../../modules/m_transactions/api';
import {
  useInvestmentInfo,
  useSaveInvestmentTransaction,

} from '../../../../../../modules/m_transactions/hooks';
import { useAuthentication} from '../../../../../../utils/globalHooks';

import Skeleton from '../../../../../shared/Skeleton';
import CustomSnack from '../../../../../shared/CustomSnack';
import CustomTitle from '../../../../../shared/CustomTitle';
import CustomModal from '../../../../../shared/CustomModal';
import CustomInput from '../../../../../shared/CustomInput';
import CodeFieldOTP from '../../../../../shared/CodeFieldOTP';
import CustomFundCard from '../../../../../shared/CustomFundCard';
import AlertModal from '../../../../../shared/AlertModal/AlertModal';
import dateFormat from '../../../../../../utils/constants/dateFormat';
import ValidationMessage from '../../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../../shared/CustomDoubleButton';
import CustomFundDetailCard from '../../../../../shared/CustomFundDetailCard';
//import { Pattern } from 'react-native-svg';

const Form = () => {

  const navigation = useNavigation();
  
  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState(colorConstants.primary);
  const { data: authData }: any = useAuthentication();


  const { data, refetch } = useInvestmentInfo();
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [accountCode, setAccountCode] = useState('');

  const [serviceFee, setServiceFee] = useState([]);
  const [investmentInformations, setInvestmentInformations] = useState([]);
  const [prkfInvestmentInformations, setPrkfInvestmentInformations] = useState([]);
  const [nonPrkfInvestmentInformations, setNonPrkfInvestmentInformations] = useState([]);

  const [minimunInvestmentAmount, setMinimunInvestmentAmount] = useState(0.0);
  const [minimunReInvestmentAmount, setMinimunReInvestmentAmount] = useState(0.0);
  const [requestedUnits, setrequestedUnits] = useState();
  const [balanceUnits, setbalanceUnits] = useState();
  const [fee, setFee] = useState('');
  const [productCode, setProductCode] = useState('');
  const [otpRemainingTimeSec, setOtpRemainingTimeSec] = useState(0);

  const [msgModal, setMsgModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');

  const [msgModal2, setMsgModal2] = useState(false);
  const [alertTitle2, setAlertTitle2] = useState('');
  const [alertDescription2, setAlertDescription2] = useState('');
  
  useEffect(() => {
    if (authData?.userProfile)
      console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
    setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
    let backgrndColor = mngmntCompany == 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor)
    console.log('Background Color : ', bgColor)
  }, [bgColor]);



  const [selectedData, setSelectedData] = useState({
    fundCode: '',
    fundId: '',
    fundName: '',
    fundClassType: '',
    fundTypeName: '',
    minimunInvestmentAmount: '',
    minimunReInvestmentAmount: '',
    settlementAccount: '',
    balanceUnits: '',
    requestedUnits: '',
    /* subscriptionAmount: '',
     basdtionAmount: '',
     participationAmount: '',
     */
  });

  const [npSelectedData, setNpSelectedData] = useState({
    fundCode: '',
    fundId: '',
    fundName: '',
    npFundName: '',
    fundClassType: '',
  });

  const [formData, setFormData] = useState({
    fundCode: '',
    fundName: '',
    npFundName: '',
    fundUnitClass: '',
    fundUnitType: '',
    investAmount: '',
    investBy: 'Amount',
    subscriptionAmount: '',
    basdAmount: '',
    participationAmount: '',
    comments: '',
    frontendLoad: '',
    srvFee: fee,
    amountExistFund: '',
  });
  const [otp, setotp] = useState('');
  const [transactionID, setTransactionID] = useState('');

  useEffect(() => {
    fetchData()
    }, [data]);

    useEffect(() => {
      GetServiceFee()
    }, [fee]);


  const fetchData = async () => {   
    if (data)
      data.then((value: any) => {
        setIsLoading(false);
        value?.success && setInvestmentInformations(value?.data );
        //console.log('Get Data :- ', value?.data)
        const filterData = value?.data
        const prkfInvestData = filterData.filter((item: any) => item.isParkingFund === '1')
        setPrkfInvestmentInformations(prkfInvestData);
        // console.log('Prkf Investment Informations', prkfInvestmentInformations)
        const nonPrkfInvestData = filterData.filter((item: any) => item.isParkingFund === '0');
        setNonPrkfInvestmentInformations(nonPrkfInvestData);       
      })
      .catch((e: any) => {
        setIsLoading(false);
      });
  };

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
      fundCode: '',
      fundName: '',
      npFundName: '',
      fundUnitClass: '',
      fundUnitType: '',
      investAmount: '',
      investBy: 'Amount',
      subscriptionAmount: '',
      basdAmount: '',
      participationAmount: '',
      frontendLoad: '',
      srvFee: fee,
      comments: '',
      amountExistFund: '', 
    },
    mode: 'onTouched',
  });

  const onSubmitGenerateTpin = async (data: any) => {

    const sumAmount = data?.subscriptionAmount + data?.basdAmount;
    // const accCode = await getAccCode(); handdle from backend 
    // setAccountCode(`${accCode}`);
    // const tID = `MEIT_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
    // setTransactionID(tID);

    if (sumAmount > data?.participationAmount) {
      setError('fundName', {
        message:
          'Sum of “Amount based on Existing Fund” and ”New Participation Amount” must be equal to ”Subscription Amount for Investment',
      });
    }

    if (data?.participationAmount >= data?.investAmount) {
      setError('fundName', {
        message:
          '”New Participation Amount” must be equal to ”  Investment Amount ',
      });
    }
    if (data?.basdAmount >= Number(balanceUnits).toFixed(4)) {
      setError('fundName', {
        message:
          'Based Amount balance units ',
      });
    }
    if (balanceUnits == 0) {
      if (minimunInvestmentAmount >= data?.investAmount) {
        setError('fundName', {
          message:
            '!Please select another fund because your minimum investment amount less than your current amount',
        });
      }
      if (minimunInvestmentAmount > data?.subscriptionAmount) {
        setError('npFundName', {
          message:
            'Subscription amount less than your minimum investment amount',
        });
      }
    }
    setFormData(data);
    setStep(2);
/*
    if (balanceUnits == 0) {
      if (minimunInvestmentAmount >= data?.investAmount) {
        setError('fundName', {
          message:
            '!Please select another fund because your minimum investment amount less than your current amount',
        });
      }
      else {
        const userInfo = await getService(languageTxt?.reactAsyncStorageKeys?.userInfo,);
        const newUserInfo = userInfo && JSON.parse(userInfo);
        const accCode = await getAccCode();
        setAccountCode(`${accCode}`);
        const tID = `OEIT_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
        setTransactionID(tID);
        setIsLoading(true);
        setFormData(data);

        const username = await getUserName();
        const { success, message } = await generateTpinApi(tID, username, newUserInfo?.['Email Address'],);

        setIsLoading(false);
        if (success) {
          setOtpRemainingTimeSec(180);
          setStep(1);
        } else {
          setFormError(message);
        }
      }
    }
    else {
      if (minimunReInvestmentAmount >= data?.investAmount) {
        setError('fundName', {
          message:
            'Please select another fund because your minimum reinvestment amount less than your current amount',
        });
      }
      else {
        const userInfo = await getService(languageTxt?.reactAsyncStorageKeys?.userInfo,);
        const newUserInfo = userInfo && JSON.parse(userInfo);
        const accCode = await getAccCode();
        setAccountCode(`${accCode}`);
        const tID = `OEIT_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
        setTransactionID(tID);
        setIsLoading(true);
        setFormData(data);

        const username = await getUserName();
        const { success, message } = await generateTpinApi(tID, username, newUserInfo?.['Email Address'],);

        setIsLoading(false);
        if (success) {
          setOtpRemainingTimeSec(180);
          setStep(1);
        } else {
          ///onFormSubmit()
          setFormError(message);
        }
      }
    }
    */
  };

  const onSubmitVerifyTpin = async () => {
    setIsLoading(true);
    const username = await getUserName();
    const { success, message } = await verifyTpinApi(transactionID, username, otp,);
    setIsLoading(false);
    setErrorSnack(message);
    if (success) {
      setStep(2);
    }
  };

  const GetServiceFee = async () => {
    const investAmount = getValues('investAmount')
    setIsLoading(true);
    const dataFee = await getServiceFeeApi(productCode, investAmount,)
    if (dataFee.success) {
      setIsLoading(false)
      Object.entries(dataFee).forEach(entry => {
        const [key, value] = entry;
        if (key === 'data') {
          setServiceFee(value)
          let tsfAmounr = serviceFee.map((item) => item['tsfAmount']);
          setFee(tsfAmounr[0])
          setValue('srvFee', fee.substring(0,8))        
        }
      });
    }
    else {
      setIsLoading(false);
    }
  }

  const saveInvestmentTransactionMutation = useSaveInvestmentTransaction();
  const onFormSubmit = async () => {
    clearErrors();
    setIsLoading(true);
    setFormError(null);
    const { fundName, npFundName, fundUnitClass, fundUnitType, investBy, comments, amountExistFund } = formData;
    const investAmount = formData?.investAmount ? formData?.investAmount : 0;

    const subscriptionAmount = formData?.subscriptionAmount ? formData?.subscriptionAmount : 0;
    const basdAmount = formData?.basdAmount ? formData?.basdAmount : 0;
    const participationAmount = formData?.participationAmount ? formData?.participationAmount : 0;
    const frontendLoad = formData?.frontendLoad ? formData?.frontendLoad : 0;
    const serviceFee = formData?.srvFee ? formData?.srvFee : 0;

    const fund = 'Subscription Fund Selection: ' + npFundName
    const subscrAmount = 'Subscription Amount for Investment: ' + subscriptionAmount
    const basedAmount = 'Amount based on Existing Fund: ' + basdAmount
    const nParticipAmount = 'New Participant Amount:	' + participationAmount
    const frontendLoadtxt = 'Applicable Frontend Load %: ' + frontendLoad
    const faceValue = 'Service Fee : ' + serviceFee
    const test = `${fund}\n${subscrAmount}\n${basedAmount}\n${nParticipAmount}\n${frontendLoadtxt}\n${faceValue}\n`

    const mutationArgs: any = {
      tranDate: moment().format(dateFormat.CALENDAR_FORMAT),
      tranTime: moment().format('HHmm'),
      fundName,
      fundUnitClass,
      fundUnitType,
      investAmount,
      investBy,
      comments: test,
      amountExistFund: '0',
      onSuccessCb,
      onErrorCb,
    };
    saveInvestmentTransactionMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      if (data.success) {
        refetch();
        setMsgModal(true);
        setAlertTitle(languageTxt.submittedMsg);
        setAlertDescription(data?.message);
      } else {
        setMsgModal(true);
        setAlertTitle(languageTxt.error_title);
        setAlertDescription(data?.message);
      }
    } catch (error) {
      setIsLoading(false);
      setMsgModal(true);
      setAlertTitle(languageTxt.error_title);
      setAlertDescription(languageTxt.an_unexpected_error);
    }
  };

  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setMsgModal(true);
    setAlertTitle(languageTxt.error_title);
    setAlertDescription(languageTxt.an_unexpected_error);
  };

  return (
    <>
      <Skeleton
        isBack={true}
        backClickEventStatus={true}
        bgColor= {bgColor}
        backClickEvent={() => {
          if (step == 1) {
            setStep(0);
          } else if (step == 2) {
            setStep(0);
          } else {
            navigation.goBack();
          }
        }}
        isBottomNav={true}
        isLoading={isLoading}
        title={languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.name}>
        <>
          {step == 0 ? (
            <View style={styles.container}>
              {formError && (
                <View style={styles?.formValidation}>
                  <ValidationMessage children={formError} />
                </View>
              )}

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.fundName}
                    errorMsg={errors && errors?.fundName?.message}
                    placeHolder={languageTxt.FundName}
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
                name="fundName"
                rules={{
                  required: {
                    value: true,
                    message: languageTxt?.txtFundsError,
                  },
                  
                }}
              />
              {getValues().fundName && (
                <>
                  <View style={styles.lineBreak}></View>
                  <CustomFundCard
                    title={getValues().fundName}
                    heading1={`Min. Invesment. Amount`}
                    description1={`${numberWithCommas(
                      Number(minimunInvestmentAmount).toFixed(2),
                    )}`}
                    heading2={`Min. ReInvesment. Amount`}
                    description2={`${numberWithCommas(
                      Number(minimunReInvestmentAmount).toFixed(2),
                    )}`}
                    
                    heading3=''
                    description3=''

                    heading4={`${languageTxt.existingFundAvailable}`}
                    description4={`${numberWithCommas(
                      Number(balanceUnits).toFixed(4),
                    )}`}
                  />
                   <View style={styles.lineBreak}></View>
                </>
              )}

              <View style={styles.lineBreak}></View>
              <CustomTitle
                title={languageTxt?.requestedAmount}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXSmall
                }}
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.investAmount}
                    errorMsg={errors && errors?.investAmount?.message}
                    placeHolder={'0.00'}
                    autoCapitalize="none"
                    keyboardType={'numeric'}
                    onBlur={GetServiceFee}
                    value={value}
                    handleChange={(value: String) => onChange(value)}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cash"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                  />
                )}
                name="investAmount"
                rules={{
                  min: {
                    value: 1,
                    message: 'Amount must be greater than or equal 1',
                  },
                  required: {
                    value: true,
                    message: languageTxt?.txtInvestmentAmountError,
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: 'Maximum 2 decimal places allowed.',
                  },
                }}
              />


              {/*Start dropdownlist */}
              <CustomTitle
                title={languageTxt?.nonParkingFund}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXSmall
                }}
              />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.npFundName}
                    errorMsg={errors && errors?.npFundName?.message}
                    placeHolder={languageTxt.FundName}
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
                      setOpen2(true);
                    }}
                  />
                )}
                name="npFundName"
                rules={{
                  required: {
                    value: true,
                    message: languageTxt?.txtFundsError,
                  },
                }}
              />
              {getValues().npFundName && (
                <>
                  <View style={styles.lineBreak}></View>


                </>
              )}

              <View style={styles.lineBreak}></View>
              {/*Endt dropdownlist */}


              {/*Start Input Textbox(s) */}

              {/*Aamir  may09*/}

              <CustomTitle
                title={languageTxt?.subscriptionAmount}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXSmall
                }}
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.subscriptionAmount}
                    errorMsg={errors && errors?.subscriptionAmount?.message}
                    placeHolder={'0.0000'}
                    autoCapitalize="none"

                    keyboardType={'numeric'}
                    onBlur={onBlur}
                    value={value}
                    handleChange={(value: String) => onChange(value)}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cash"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                  />
                )}
                name="subscriptionAmount"
                rules={{
                  min: {
                    value: 1,
                    message: 'Subscription Amount must be greater than or equal 1',
                  },
                  required: {
                    value: true,
                    message: languageTxt?.txtSubscriptionAmountError,
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,4})?$/,
                    message: 'Maximum 4 decimal places allowed.',
                  },
                }}
              />

              <CustomTitle
                title={languageTxt?.basdAmount}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXXSmall,
                }}
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.basdAmount}
                    errorMsg={errors && errors?.basdAmount?.message}
                    placeHolder={'0.0000'}
                    autoCapitalize="none"

                    keyboardType={'numeric'}
                    onBlur={onBlur}
                    value={value}
                    handleChange={(value: String) => onChange(value)}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cash"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                  />
                )}
                name="basdAmount"
                rules={{
                  min: {
                    value: 1,
                    message: 'Unit must be greater than or equal 1',
                  },
                  required: {
                    value: true,
                    message: languageTxt?.txtBasdAmountError,
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,4})?$/,
                    message: 'Maximum 4 decimal places allowed.',
                  },
                }}
              />

              <CustomTitle
                title={languageTxt?.participationAmount}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXSmall
                }}
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.participationAmount}
                    errorMsg={errors && errors?.participationAmount?.message}
                    placeHolder={'0.0000'}
                    autoCapitalize="none"

                    keyboardType={'numeric'}
                    onBlur={onBlur}
                    value={value}
                    handleChange={(value: String) => onChange(value)}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cash"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                  />
                )}
                name="participationAmount"
                rules={{
                  min: {
                    value: 1,
                    message: 'Unit must be greater than or equal 1',
                  },
                  required: {
                    value: true,
                    message: languageTxt?.txtParticipationAmountError,
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,4})?$/,
                    message: 'Maximum 4 decimal places allowed.',
                  },
                }}
              />

              <CustomTitle
                title={languageTxt?.frontendLoad}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXSmall
                }}
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.frontendLoad}
                    errorMsg={errors && errors?.frontendLoad?.message}
                    placeHolder={'0.0000'}
                    autoCapitalize="none"

                    keyboardType={'numeric'}
                    onBlur={onBlur}
                    value={value}
                    handleChange={(value: String) => onChange(value)}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cash"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                  />
                )}
                name="frontendLoad"
                rules={{
                  min: {
                    value: 1,
                    message: 'Frontend load must be greater than or equal 1',
                  },
                  required: {
                    value: true,
                    message: languageTxt?.txtFrontendLoadError,
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,4})?$/,
                    message: 'Maximum 4 decimal places allowed.',
                  },
                }}
              />


              <CustomTitle
                title={languageTxt?.serviceFee}
                titleColor={colorConstants?.drakGray}
                fontWeight={fontConstants?.fontWeight600}
                fontSize={fontConstants?.middle}
                extraStyles={{
                  textAlign: 'left',
                  padding: dimensionConstants?.paddingXXXSmall,
                  paddingBottom: dimensionConstants?.paddingXXSmall
                }}
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    error={errors && !!errors?.srvFee}
                    errorMsg={errors && errors?.srvFee?.message}
                    placeHolder={'0.0000'}
                    autoCapitalize="none"
                    disabled={true}
                    keyboardType={'numeric'}
                    onBlur={onBlur}
                    value={fee}
                    handleChange={(value: String) => onChange(value)}
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cash"
                        size={dimensionConstants?.iconXSmall}
                        color={colorConstants?.gray}
                      />
                    }
                  />
                )}
                name="srvFee"
                rules={{
                  min: {
                    value: 1,
                    message: 'Service fee must be greater than or equal 1',
                  },
                  required: {
                    value: true,
                    message: languageTxt?.txtParticipationAmountError,
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,4})?$/,
                    message: 'Maximum 4 decimal places allowed.',
                  },
                }}
              />
              {/*End */}

              <CustomDoubleButton
                primaryButtonText={languageTxt?.addRequest}
                secondaryButtonText={languageTxt?.cancel}
                isDisabledPrimary={saveInvestmentTransactionMutation?.isLoading}
                handlePrimaryOnPress={handleSubmit(onSubmitGenerateTpin)}
                handleSecondaryOnPress={() => {
                  navigation.navigate(
                    // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                    languageTxt?.reactStackKeys?.user?.eTransactions?.name as never,
                  );
                }}
              />
            </View>
          ) : step == 1 ? (
            <View style={[styles.container, { padding: 30 }]}>
              <CustomTitle
                title={'Enter 4-digit Pin'}
                fontSize={fontConstants.header}
                extraStyles={{ paddingVertical: 20 }}
              />
              <CodeFieldOTP
                onChangeText={(otp: any) => { setotp(otp); }}
                value={otp}
                cellCount={4}
                requestNewCode={() => onSubmitGenerateTpin(formData)}
                otpRemainingTimeSec={otpRemainingTimeSec}
                setOtpRemainingTimeSec={setOtpRemainingTimeSec}
              />
              <View style={styles.lineBreak}></View>
              <CustomDoubleButton
                primaryButtonText={languageTxt?.verifyOTP}
                secondaryButtonText={languageTxt?.cancel}
                handlePrimaryOnPress={onSubmitVerifyTpin}
                handleSecondaryOnPress={() => {
                  navigation.navigate(
                    // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                    languageTxt?.reactStackKeys?.user?.eTransactions?.name,
                  );
                }}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <CustomTitle
                fontSize={fontConstants.title}
                title={`E-Invesment Info`}
                fontWeight={fontConstants.fontWeight500}
                extraStyles={{ paddingVertical: dimensionConstants.paddingSmall, }}
              />
              <CustomFundDetailCard
                title={selectedData.fundName}
                heading1={'Folio Number'}
                description1={accountCode}
                heading2={'Requested Date'}
                description2={new Date().toDateString()}
                heading3={'Transaction Type'}
                description3={languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.name}
                heading5={'Investment Amount'}
                description5={`${numberWithCommas(Number(formData.investAmount).toFixed(2),)} `}
                heading6={'e-Transaction Charges'}
                description6={`${numberWithCommas(Number(0).toFixed(2))}`}
                heading7={'Total Amount'}
                description7={`${numberWithCommas(Number(formData.investAmount).toFixed(2),)} `}
              />
              <CustomDoubleButton
                primaryButtonText={languageTxt?.submitRequest}
                secondaryButtonText={languageTxt?.cancel}
                handlePrimaryOnPress={onFormSubmit}
                handleSecondaryOnPress={() => {
                  navigation.navigate(
                    // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                    languageTxt?.reactStackKeys?.user?.eTransactions?.name,
                  );
                }}
              />
            </View>
          )}

          <CustomModal
            open={open}
            onRequestClose={() => setOpen(false)}
            title={languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.name}
            body={
              <FlatList
                style={styles.flatListContainer}
                data={prkfInvestmentInformations}
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
                      setSelectedData({ ...element?.item });
                      setValue('fundName', element?.item?.fundName);
                      setValue('fundCode', element?.item?.fundCode)
                      setValue('fundUnitClass', element?.item?.fundClassType);
                      setValue('fundUnitType', element?.item?.fundTypeName);
                      setValue('investAmount', '');
                      setValue('investBy', 'Amount');
                      setValue('amountExistFund',element?.item?.balanceUnits)

                      setMinimunInvestmentAmount(parseFloat(element?.item?.minimunInvestmentAmount),);
                      setMinimunReInvestmentAmount(parseFloat(element?.item?.minimunReInvestmentAmount),);
                      setrequestedUnits(element?.item?.requestedUnits);
                      setbalanceUnits(element?.item?.balanceUnits);
                      setProductCode(element?.item?.fundCode);

                      clearErrors();
                      setOpen(false);
                    }}>
                    <CustomTitle title={`${element?.item?.fundName}`} />
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
                languageTxt?.reactStackKeys?.user?.eTransactions?.name,
              );
            }}
          />
          {/*Start CustomModal none parking fund  */}
          <CustomModal
            open={open2}
            onRequestClose={() => setOpen2(false)}
            title={languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.name}
            body={
              <FlatList
                style={styles.flatListContainer}
                data={nonPrkfInvestmentInformations}
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
                      setNpSelectedData({ ...element?.item });

                      setValue('npFundName', element?.item?.fundName);
                      /*
                      setValue('fundUnitClass', element?.item?.fundClassType);
                      setValue('fundUnitType', element?.item?.fundTypeName);
                      setValue('investAmount', '');
                      setValue('investBy', 'Amount');

                      setMinimunInvestmentAmount(parseFloat(element?.item?.minimunInvestmentAmount),);
                      setMinimunReInvestmentAmount(parseFloat(element?.item?.minimunReInvestmentAmount),);
                      setrequestedUnits(element?.item?.requestedUnits);
                      setbalanceUnits(element?.item?.balanceUnits);
                      */

                      clearErrors();
                      setOpen2(false);
                    }}>
                    <CustomTitle title={`${element?.item?.fundName}`} />
                  </TouchableOpacity>
                )}
              />
            }
          />
          <AlertModal
            open={msgModal2}
            title={alertTitle2}
            description={alertDescription2}
            onRequestClose={() => {
              setMsgModal2(false);
              setAlertTitle2('');
              setAlertDescription2('');
              navigation.navigate(
                // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                languageTxt?.reactStackKeys?.user?.eTransactions?.name,
              );
            }}
          />
          {/*End Start CustomModal none parking fund*/}


        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default Form;
