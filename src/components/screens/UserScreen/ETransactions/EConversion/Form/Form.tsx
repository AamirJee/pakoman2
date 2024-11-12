import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Tab} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';
import {numberWithCommas} from '../../../../../../utils/function';
import {getService} from '../../../../../../config/asyncStorage/asynDataStore';
import {
  getAccCode,
  getUserName,
} from '../../../../../../config/asyncStorage/acc_code';
import {
  generateTpinApi,
  verifyTpinApi,
} from '../../../../../../modules/m_transactions/api';
import {
  useConvertionsOfFundsIn,
  useConvertionsOfFundsOut,
  useSaveConversionTransaction,
} from '../../../../../../modules/m_transactions/hooks';

import Skeleton from '../../../../../shared/Skeleton';
import CustomSnack from '../../../../../shared/CustomSnack';
import CustomTitle from '../../../../../shared/CustomTitle';
import CustomModal from '../../../../../shared/CustomModal';
import CustomInput from '../../../../../shared/CustomInput';
import CodeFieldOTP from '../../../../../shared/CodeFieldOTP';
import CustomFundCard from '../../../../../shared/CustomFundCard';
import dateFormat from '../../../../../../utils/constants/dateFormat';
import ValidationMessage from '../../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../../shared/CustomDoubleButton';
import CustomFundDetailCard from '../../../../../shared/CustomFundDetailCard';
import AlertModal from '../../../../../shared/AlertModal/AlertModal';

const Form = () => {
  const {data: convertionsOfFundsInData, refetch: refetchConvertionsOfFundsIn} = useConvertionsOfFundsIn();
  const {data: convertionsOfFundsOutData,refetch: refetchConvertionsOfFundsOut,} = useConvertionsOfFundsOut();

  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFundsIn, setIsLoadingFundsIn] = useState(true);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [convertionsOfFundsIn, setConvertionsOfFundsIn] = useState([]);
  const [convertionsOfFundsOut, setConvertionsOfFundsOut] = useState([]);
  const [conversionInStatus, setConversionInStatus] = useState('0');
  const [conversionInOpen, setConversionInOpen] = useState(false);
  const [conversionOutOpen, setConversionOutOpen] = useState(false);

  const [convertableUnits, setconvertableUnits] = useState(0.0);
  const [convertableAmount, setconvertableAmount] = useState(0.0);
  const [requestedUnits, setrequestedUnits] = useState(0.0);
  const [balanceUnits, setbalanceUnits] = useState(0.0);
  const [minimunInvestmentAmount, setminimunInvestmentAmount] = useState(0.0);
  const [minimunReInvestmentAmount, setminimunReInvestmentAmount] = useState(0.0);

  const [convertableUnitsIn, setconvertableUnitsIn] = useState(0.0);
  const [convertableAmountIn, setconvertableAmountIn] = useState(0.0);
  const [requestedUnitsIn, setrequestedUnitsIn] = useState(0.0);
  const [balanceUnitsIn, setbalanceUnitsIn] = useState(0.0);
  const [minimunInvestmentAmountIn, setminimunInvestmentAmountIn] = useState(0.0);
  const [minimunReInvestmentAmountIn, setminimunReInvestmentAmountIn] = useState(0.0);
  const [convertableAmountError, setConvertableAmountError] = useState('');

  const [otpRemainingTimeSec, setOtpRemainingTimeSec] = useState(0);

  const [formData, setFormData] = useState({
    fundNameOut: '',
    fundOutUnitClass: '',
    fundOutUnitType: '',
    fundNameIn: '',
    fundInUnitClass: '',
    fundInUnitType: '',
    conversionUnits: '0',
    conversionAmount: '',
    allConversionAmount: '0',
    isEntire: '0',
    username: '',
  });
  
  const [otp, setotp] = useState('');
  const [transactionID, setTransactionID] = useState('');
  const [accountCode, setAccountCode] = useState('');
  const [FundsOut, setFundsOut] = useState('');
  const [msgModal, setMsgModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');

  useEffect(() => {
    if (convertionsOfFundsInData)
      convertionsOfFundsInData
        .then((value: any) => {
          setIsLoadingFundsIn(false);
          let array: any = [];
          value?.data?.map((val: any) => val?.fundName != FundsOut && array.push(val),);
          setConvertionsOfFundsIn(array);
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [convertionsOfFundsInData, FundsOut]);

  useEffect(() => {
    if (convertionsOfFundsOutData)
      convertionsOfFundsOutData
        .then((value: any) => {
          setIsLoading(false);
          value?.success && setConvertionsOfFundsOut(value?.data);
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [convertionsOfFundsOutData]);

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fundNameOut: '',
      fundOutUnitClass: '',
      fundOutUnitType: '',
      fundNameIn: '',
      fundInUnitClass: '',
      fundInUnitType: '',
      conversionUnits: '0',
      conversionAmount: '',
      allConversionAmount: '0',
      isEntire: '0',
      username: '',
    },
    mode: 'onTouched',
  });

  const onSubmitGenerateTpin = async (data: any) => {
    if (Number(getValues().conversionAmount || 0) >= Number(minimunInvestmentAmountIn) && getValues().isEntire == '0' ) 
    {
      const userInfo = await getService(languageTxt?.reactAsyncStorageKeys?.userInfo,);
      const newUserInfo = userInfo && JSON.parse(userInfo);
      const accCode = await getAccCode();

      setAccountCode(`${accCode}`);
      const tID = `OECN_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
      setTransactionID(tID);
      setIsLoading(true);
      setFormData(data);

      const username = await getUserName();
      const {success, message} = await generateTpinApi(tID, username, newUserInfo?.['Email Address'], );

      setIsLoading(false);
      if (success) {
        setOtpRemainingTimeSec(180);
        setStep(1);
      } else {
        setFormError(message);
      }
    } else {
      if (getValues().isEntire == '1') {
        const userInfo = await getService(
          languageTxt?.reactAsyncStorageKeys?.userInfo,
        );
        const newUserInfo = userInfo && JSON.parse(userInfo);
        const accCode = await getAccCode();
        const tID = `OECN_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
        setTransactionID(tID);
        setIsLoading(true);
        setFormData(data);

        const username = await getUserName();

        const {success, message} = await generateTpinApi(tID, username, newUserInfo?.['Email Address'],);

        setIsLoading(false);
        if (success) {
          setOtpRemainingTimeSec(180);
          setStep(1);
        } else {
          setFormError(message);
        }
      } else {
        setError('conversionAmount', {message: languageTxt.conversionAmountError,});
        setConvertableAmountError(languageTxt.conversionAmountError);
      }
    }
  };

  const onSubmitVerifyTpin = async () => {
    setIsLoading(true);
    const username = await getUserName();
    const {success, message} = await verifyTpinApi(transactionID, username, otp,);
    setIsLoading(false);
    setErrorSnack(message);
    if (success) {
      setIndex(2);
    }
  };

  const saveConversionTransactionMutation = useSaveConversionTransaction();
  const onFormSubmit = async () => {
    setConversionInOpen(false);
    setConversionOutOpen(false);
    clearErrors();
    setIsLoading(true);
    setFormError(null);

    const username = await getUserName();
    const {
      fundNameOut,
      fundOutUnitClass,
      fundOutUnitType,
      fundNameIn,
      fundInUnitClass,
      fundInUnitType,
      conversionUnits,
      conversionAmount,
      allConversionAmount,
      isEntire,
    } = formData;

    const mutationArgs: any = {
      tranDate: moment().format(dateFormat.CALENDAR_FORMAT),
      tranTime: moment().format('HHmm'),
      fundNameOut,
      fundOutUnitClass,
      fundOutUnitType,
      fundNameIn,
      fundInUnitClass,
      fundInUnitType,
      conversionUnits,
      conversionAmount:
        Number(conversionAmount ? conversionAmount : 0) > 0
          ? conversionAmount
          : allConversionAmount,
      isEntire,
      username,
      onSuccessCb,
      onErrorCb,
    };
    saveConversionTransactionMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      if (data.success) {
        refetchConvertionsOfFundsIn();
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
        backClickEvent={() => {
          if (index != 0 && step == 0) {
            setConvertableAmountError('');
            clearErrors();
            setIndex(0);
          } else if (index == 1 && step == 1) {
            setStep(0);
          } else if (index == 2) {
            setStep(0);
            setIndex(1);
          } else {
            navigation.goBack();
          }
        }}
        isBottomNav={true}
        isLoading={isLoading || isLoadingFundsIn}
        title={languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion?.name}>
        <>
          <View style={styles.container}>
            <Tab value={index} disableIndicator>
              <Tab.Item
                title={languageTxt.conversionOut}
                containerStyle={styles.containerTab}
                TouchableComponent={TouchableOpacity}
                buttonStyle={[ styles.buttonStyle, index === 0 ? styles.tabActive : {}, ]}
                titleStyle={[ styles.tabTittle, index === 0 ? styles.tabTittleActive : {}, ]}
              />
              <Tab.Item
                title={languageTxt.conversionIn}
                containerStyle={styles.containerTab}
                TouchableComponent={TouchableOpacity}
                buttonStyle={[ styles.buttonStyle, index === 1 || index === 2 ? styles.tabActive : {}, ]}
                titleStyle={[styles.tabTittle, index === 1 || index === 2 ? styles.tabTittleActive : {},]}
              />
            </Tab>
            {index === 0 ? (
              <>
                {formError && (
                  <View style={styles?.formValidation}>
                    <ValidationMessage children={formError} />
                  </View>
                )}

                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors && !!errors?.fundNameOut}
                      errorMsg={errors && errors?.fundNameOut?.message}
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
                        setConversionOutOpen(true);
                      }}
                    />
                  )}
                  name="fundNameOut"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtFundsError,
                    },
                  }}
                />

                {getValues().fundNameOut && (
                  <>
                    <View style={styles.lineBreak}></View>
                    <CustomFundCard
                      title={getValues().fundNameOut}
                      heading1={`${languageTxt.conversions} Unit`}
                      description1={`${numberWithCommas(
                        Number(convertableUnits).toFixed(4),
                      )}`}
                      heading2={`${languageTxt.conversions} Amount`}
                      description2={`${numberWithCommas(
                        Number(convertableAmount).toFixed(2),
                      )}`}
                      requestedUnits={`${numberWithCommas(
                        Number(requestedUnits ? requestedUnits : 0).toFixed(4),
                      )}`}
                      balanceUnits={`${numberWithCommas(
                        Number(balanceUnits ? balanceUnits : 0).toFixed(4),
                      )}`}
                      // minimunInvestmentAmount={minimunInvestmentAmount}
                      // minimunReInvestmentAmount={minimunReInvestmentAmount}
                    />
                  </>
                )}

                <RadioButton.Group
                  onValueChange={value => {
                    setValue('isEntire', value);
                    setValue('conversionAmount', '');
                    setConversionInStatus(value);
                    clearErrors();
                  }}
                  value={conversionInStatus}>
                  <RadioButton.Item
                    color={colorConstants.primary}
                    label={languageTxt.byAmount}
                    value={'0'}
                  />

                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <CustomInput
                        error={errors && !!errors?.conversionAmount}
                        errorMsg={errors && errors?.conversionAmount?.message}
                        placeHolder={'0.00'}
                        autoCapitalize="none"
                        disabled={conversionInStatus != '0'}
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
                    name="conversionAmount"
                    rules={{
                      required: {
                        value: conversionInStatus == '0',
                        message: languageTxt?.txtConversionAmountError,
                      },
                      min: 1,
                    }}
                  />
                  <RadioButton.Item
                    color={colorConstants.primary}
                    label={languageTxt.entire}
                    value={'1'}
                  />
                </RadioButton.Group>

                <CustomDoubleButton
                  primaryButtonText={languageTxt?.addRequest}
                  secondaryButtonText={languageTxt?.cancel}
                  handlePrimaryOnPress={() => {
                    if (
                      !getValues().conversionAmount &&
                      conversionInStatus == '0'
                    ) {
                      setError('conversionAmount', {
                        message: languageTxt?.txtConversionAmountError,
                      });
                    }
                    if (getValues().fundNameOut) {
                      if (Number(convertableAmount) > 0) {
                        if (conversionInStatus == '0') {
                          if (
                            !getValues().conversionAmount &&
                            conversionInStatus == '0'
                          ) {
                            setError('conversionAmount', {
                              message: languageTxt?.txtConversionAmountError,
                            });
                          } else {
                            if (Number(getValues().conversionAmount) > 0) {
                              const conversionAmount =
                                getValues().conversionAmount.split('.');
                              if (
                                conversionAmount?.length > 1 &&
                                conversionAmount[1]?.length > 2
                              ) {
                                setError('conversionAmount', {
                                  message: 'Maximum 2 decimal places allowed.',
                                });
                              } else {
                                setIndex(1);
                              }
                            } else {
                              setError('conversionAmount', {
                                message:
                                  'Amount must be greater than or equal 1 ',
                              });
                            }
                          }
                        } else {
                          setIndex(1);
                          setValue('conversionAmount', '');
                        }
                      } else {
                        setError('fundNameOut', {
                          message:
                            'Conversion amount is greater than convertable amount',
                        });
                      }
                    } else {
                      setError('fundNameOut', {
                        message: languageTxt.txtFundsError,
                      });
                    }
                  }}
                  handleSecondaryOnPress={() =>
                    navigation.navigate =(
                      // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                      languageTxt?.reactStackKeys?.user?.eTransactions?.name
                    )
                  }
                />
              </>
            ) : index === 1 ? (
              <>
                {step == 0 ? (
                  <>
                    {formError && (
                      <View style={styles?.formValidation}>
                        <ValidationMessage children={formError} />
                      </View>
                    )}

                    <Controller
                      control={control}
                      render={({field: {onChange, onBlur, value}}) => (
                        <CustomInput
                          error={errors && !!errors?.fundNameIn}
                          errorMsg={errors && errors?.fundNameIn?.message}
                          placeHolder={languageTxt.FundName}
                          disabled={true}
                          value={getValues().fundNameIn}
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
                            setConversionInOpen(true);
                          }}
                        />
                      )}
                      name="fundNameIn"
                      rules={{
                        required: {
                          value: true,
                          message: languageTxt?.txtFundsError,
                        },
                      }}
                    />

                    {getValues().fundNameIn && (
                      <>
                        <View style={styles.lineBreak}></View>
                        <CustomFundCard
                          title={getValues().fundNameIn}
                          heading1={`${languageTxt.conversions} Unit`}
                          description1={`${numberWithCommas(
                            Number(convertableUnitsIn).toFixed(4),
                          )}`}
                          heading2={`${languageTxt.conversions} Amount`}
                          description2={`${numberWithCommas(
                            Number(convertableAmountIn).toFixed(2),
                          )}`}
                          requestedUnits={`${numberWithCommas(
                            Number(requestedUnitsIn).toFixed(4),
                          )}`}
                          balanceUnits={`${numberWithCommas(
                            Number(balanceUnitsIn).toFixed(4),
                          )}`}
                          minimunInvestmentAmount={`${numberWithCommas(
                            Number(minimunInvestmentAmountIn).toFixed(2),
                          )}`}
                          minimunReInvestmentAmount={`${numberWithCommas(
                            Number(minimunReInvestmentAmountIn).toFixed(2),
                          )}`}
                        />
                      </>
                    )}

                    <CustomInput
                      error={convertableAmountError != ''}
                      errorMsg={convertableAmountError}
                      placeHolder={languageTxt.byAmount}
                      disabled={true}
                      value={
                        Number(getValues().conversionAmount) > 0
                          ? getValues().conversionAmount
                          : getValues().allConversionAmount
                      }
                      leftIcon={
                        <MaterialCommunityIcons
                          name="cash"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.gray}
                        />
                      }
                    />

                    <CustomDoubleButton
                      primaryButtonText={languageTxt?.sendRequest}
                      secondaryButtonText={languageTxt?.cancel}
                      handlePrimaryOnPress={handleSubmit(onSubmitGenerateTpin)}
                      handleSecondaryOnPress={() => {
                        setConvertableAmountError('');
                        clearErrors();
                        navigation.navigate=(
                          // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                          languageTxt?.reactStackKeys?.user?.eTransactions
                            ?.name
                        );
                      }}
                    />
                  </>
                ) : (
                  <View style={[styles.container, {padding: 30}]}>
                    <CustomTitle
                      title={'Enter 4-digit Pin'}
                      fontSize={fontConstants.header}
                      extraStyles={{paddingVertical: 20}}
                    />
                    <CodeFieldOTP
                      onChangeText={(otp: any) => {
                        setotp(otp);
                      }}
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
                        navigation.navigate = (
                          // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                          languageTxt?.reactStackKeys?.user?.eTransactions
                            ?.name
                        );
                      }}
                    />
                  </View>
                )}
              </>
            ) : (
              <>
                <CustomFundDetailCard
                  title={'E-CONVERSION INFO'}
                  heading1={'Folio Number'}
                  description1={accountCode}
                  heading2={'Requested Date'}
                  description2={new Date().toDateString()}
                  heading3={'Transaction Type'}
                  description3={
                    languageTxt?.reactStackKeys?.user?.eTransactions
                      ?.eConversion?.name
                  }
                  heading5={'Convert From'}
                  description5={formData.fundNameOut}
                  heading6={'Convert To'}
                  description6={formData.fundNameIn}
                  heading7={`Conversion Unit`}
                  description7={`${numberWithCommas(
                    Number(
                      formData.conversionUnits ? formData.conversionUnits : 0,
                    ).toFixed(4),
                  )}`}
                  heading8={`Conversion Amount`}
                  description8={`${numberWithCommas(
                    Number(
                      formData.conversionAmount ? formData.conversionAmount : 0,
                    ) > 0
                      ? Number(formData.conversionAmount).toFixed(2)
                      : Number(formData.allConversionAmount).toFixed(2),
                  )}`}
                />

                <CustomDoubleButton
                  primaryButtonText={languageTxt?.submitRequest}
                  secondaryButtonText={languageTxt?.cancel}
                  handlePrimaryOnPress={onFormSubmit}
                  handleSecondaryOnPress={() => {
                    navigation.navigate =(
                      // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                      languageTxt?.reactStackKeys?.user?.eTransactions?.name
                    );
                  }}
                />
              </>
            )}
          </View>

          <CustomModal
            open={conversionOutOpen}
            onRequestClose={() => setConversionOutOpen(false)}
            title={languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion?.name}
            body={
              <FlatList
                style={styles.flatListContainer}
                data={convertionsOfFundsOut}
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
                      setFundsOut(element?.item?.fundName);
                      setValue('fundNameOut', element?.item?.fundName);
                      setValue('fundOutUnitClass', element?.item?.fundClassType, );
                      setValue('fundOutUnitType', element?.item?.fundTypeName);
                      setValue('conversionAmount', '');
                      setValue('allConversionAmount', element?.item?.convertableAmount,);
                      setconvertableAmount(parseFloat(element?.item?.convertableAmount),);
                      setconvertableUnits(parseFloat(element?.item?.convertableUnits),);
                      setrequestedUnits(element?.item?.requestedUnits);
                      setbalanceUnits(element?.item?.balanceUnits);
                      setminimunInvestmentAmount(element?.item?.minimunInvestmentAmount,);
                      setminimunReInvestmentAmount(element?.item?.minimunReInvestmentAmount,);
                      clearErrors();
                      setConversionOutOpen(false);
                    }}>
                    <CustomTitle title={`${element?.item?.fundName}`} />
                  </TouchableOpacity>
                )}
              />
            }
          />

          <CustomModal
            open={conversionInOpen}
            onRequestClose={() => setConversionInOpen(false)}
            title={languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion?.name}
            body={
              <FlatList
                style={styles.flatListContainer}
                data={convertionsOfFundsIn}
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
                      setValue('fundNameIn', element?.item?.fundName);
                      setValue('fundInUnitClass', element?.item?.fundClassType);
                      setValue('fundInUnitType', element?.item?.fundTypeName);

                      setconvertableAmountIn(parseFloat(element?.item?.convertableAmount),);
                      setconvertableUnitsIn(parseFloat(element?.item?.convertableUnits),);
                      setrequestedUnitsIn(element?.item?.requestedUnits);
                      setbalanceUnitsIn(element?.item?.balanceUnits);
                      setminimunInvestmentAmountIn(element?.item?.minimunInvestmentAmount,);
                      setminimunReInvestmentAmountIn(element?.item?.minimunReInvestmentAmount,);
                      clearErrors();
                      setConversionInOpen(false);
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
              navigation.navigate =(
                // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                languageTxt?.reactStackKeys?.user?.eTransactions?.name
              );
            }}
          />
        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default Form;
