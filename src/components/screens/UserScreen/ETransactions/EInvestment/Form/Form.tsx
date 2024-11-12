import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {numberWithCommas} from '../../../../../../utils/function';
import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';
import {getService} from '../../../../../../config/asyncStorage/asynDataStore';
import {colorConstants} from '../../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';
import {
  getAccCode,
  getUserName,
} from '../../../../../../config/asyncStorage/acc_code';
import {
  generateTpinApi,
  verifyTpinApi,
} from '../../../../../../modules/m_transactions/api';
import {
  useInvestmentInfo,
  useSaveInvestmentTransaction,
} from '../../../../../../modules/m_transactions/hooks';

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

const Form = () => {
  const navigation = useNavigation();
  const {data, refetch} = useInvestmentInfo();

  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [accountCode, setAccountCode] = useState('');
  const [investmentInformations, setInvestmentInformations] = useState([]);
  const [minimunInvestmentAmount, setMinimunInvestmentAmount] = useState(0.0);
  const [minimunReInvestmentAmount, setMinimunReInvestmentAmount] =
    useState(0.0);
  const [requestedUnits, setrequestedUnits] = useState();
  const [balanceUnits, setbalanceUnits] = useState();
  const [otpRemainingTimeSec, setOtpRemainingTimeSec] = useState(0);
  const [msgModal, setMsgModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
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
  });
  const [formData, setFormData] = useState({
    fundName: '',
    fundUnitClass: '',
    fundUnitType: '',
    investAmount: '',
    investBy: 'Amount',
  });
  const [otp, setotp] = useState('');
  const [transactionID, setTransactionID] = useState('');

  useEffect(() => {
    if (data)
      data
        .then((value: any) => {
          setIsLoading(false);
          value?.success && setInvestmentInformations(value?.data);
        })
        .catch((e: any) => {
          setIsLoading(false);
        });
  }, [data]);

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
      fundName: '',
      fundUnitClass: '',
      fundUnitType: '',
      investAmount: '',
      investBy: 'Amount',
    },
    mode: 'onTouched',
  });

  const onSubmitGenerateTpin = async (data: any) => {
    if (balanceUnits == 0) {
      if (minimunInvestmentAmount >= data?.investAmount) {
        setError('fundName', {
          message:
            'Please select another fund because your minimum investment amount less than your current amount',
        });
      } else {
        const userInfo = await getService(
          languageTxt?.reactAsyncStorageKeys?.userInfo,
        );
        const newUserInfo = userInfo && JSON.parse(userInfo);
        const accCode = await getAccCode();
        setAccountCode(`${accCode}`);
        const tID = `OEIT_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
        setTransactionID(tID);
        setIsLoading(true);
        setFormData(data);

        const username = await getUserName();

        const {success, message} = await generateTpinApi(
          tID,
          username,
          newUserInfo?.['Email Address'],
        );

        setIsLoading(false);
        if (success) {
          setOtpRemainingTimeSec(180);
          setStep(1);
        } else {
          setFormError(message);
        }
      }
    } else {
      if (minimunReInvestmentAmount >= data?.investAmount) {
        setError('fundName', {
          message:
            'Please select another fund because your minimum reinvestment amount less than your current amount',
        });
      } else {
        const userInfo = await getService(
          languageTxt?.reactAsyncStorageKeys?.userInfo,
        );
        const newUserInfo = userInfo && JSON.parse(userInfo);
        const accCode = await getAccCode();
        setAccountCode(`${accCode}`);
        const tID = `OEIT_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
        setTransactionID(tID);
        setIsLoading(true);
        setFormData(data);

        const username = await getUserName();

        const {success, message} = await generateTpinApi(
          tID,
          username,
          newUserInfo?.['Email Address'],
        );

        setIsLoading(false);
        if (success) {
          setOtpRemainingTimeSec(180);
          setStep(1);
        } else {
          setFormError(message);
        }
      }
    }
  };

  const onSubmitVerifyTpin = async () => {
    setIsLoading(true);
    const username = await getUserName();
    const {success, message} = await verifyTpinApi(
      transactionID,
      username,
      otp,
    );
    setIsLoading(false);
    setErrorSnack(message);
    if (success) {
      setStep(2);
    }
  };

  const saveInvestmentTransactionMutation = useSaveInvestmentTransaction();
  const onFormSubmit = async () => {
    clearErrors();
    setIsLoading(true);
    setFormError(null);

    const {fundName, fundUnitClass, fundUnitType, investBy} = formData;
    const investAmount = formData?.investAmount ? formData?.investAmount : 0;
    const mutationArgs: any = {
      tranDate: moment().format(dateFormat.CALENDAR_FORMAT),
      tranTime: moment().format('HHmm'),
      fundName,
      fundUnitClass,
      fundUnitType,
      investAmount,
      investBy,
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
        title={
          languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment?.name
        }>
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
                render={({field: {onChange, onBlur, value}}) => (
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
                    description1={`PKR ${numberWithCommas(
                      Number(minimunInvestmentAmount).toFixed(2),
                    )}`}
                    heading2={`Min. ReInvesment. Amount`}
                    description2={`PKR ${numberWithCommas(
                      Number(minimunReInvestmentAmount).toFixed(2),
                    )}`}
                    heading3={`${languageTxt.reqUnits}`}
                    description3={`${numberWithCommas(
                      Number(requestedUnits).toFixed(4),
                    )}`}
                    heading4={`${languageTxt.balUnits}`}
                    description4={`${numberWithCommas(
                      Number(balanceUnits).toFixed(4),
                    )}`}
                  />
                </>
              )}
              <View style={styles.lineBreak}></View>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomInput
                    error={errors && !!errors?.investAmount}
                    errorMsg={errors && errors?.investAmount?.message}
                    placeHolder={'0.00'}
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

              <CustomDoubleButton
                primaryButtonText={languageTxt?.addRequest}
                secondaryButtonText={languageTxt?.cancel}
                isDisabledPrimary={saveInvestmentTransactionMutation?.isLoading}
                handlePrimaryOnPress={handleSubmit(onSubmitGenerateTpin)}
                handleSecondaryOnPress={() => {
                  navigation.navigate(
                    // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                    languageTxt?.reactStackKeys?.user?.eTransactions?.name,
                  );
                }}
              />
            </View>
          ) : step == 1 ? (
            <View style={[styles.container, {padding: 30}]}>
              <CustomTitle
                title={'Enter 4-digit Pin'}
                fontSize={fontConstants.large}
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
                extraStyles={{
                  paddingVertical: dimensionConstants.paddingSmall,
                }}
              />
              <CustomFundDetailCard
                title={selectedData.fundName}
                heading1={'Folio Number'}
                description1={accountCode}
                heading2={'Requested Date'}
                description2={new Date().toDateString()}
                heading3={'Transaction Type'}
                description3={
                  languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
                    ?.name
                }
                heading5={'Investment Amount'}
                description5={`${numberWithCommas(
                  Number(formData.investAmount).toFixed(2),
                )} (PKR)`}
                heading6={'e-Transaction Charges'}
                description6={`${numberWithCommas(Number(0).toFixed(2))}`}
                heading7={'Total Amount'}
                description7={`${numberWithCommas(
                  Number(formData.investAmount).toFixed(2),
                )} (PKR)`}
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
            title={
              languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
                ?.name
            }
            body={
              <FlatList
                style={styles.flatListContainer}
                data={investmentInformations}
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
                      setSelectedData({...element?.item});
                      setValue('fundName', element?.item?.fundName);
                      setValue('fundUnitClass', element?.item?.fundClassType);
                      setValue('fundUnitType', element?.item?.fundTypeName);
                      setValue('investAmount', '');
                      setValue('investBy', 'Amount');

                      setMinimunInvestmentAmount(
                        parseFloat(element?.item?.minimunInvestmentAmount) < 0
                          ? 0
                          : parseFloat(element?.item?.minimunInvestmentAmount),
                      );
                      setMinimunReInvestmentAmount(
                        parseFloat(element?.item?.minimunReInvestmentAmount) < 0
                          ? 0
                          : parseFloat(
                              element?.item?.minimunReInvestmentAmount,
                            ),
                      );
                      setrequestedUnits(element?.item?.requestedUnits);
                      setbalanceUnits(element?.item?.balanceUnits);

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
        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default Form;
