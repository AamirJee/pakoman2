import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
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
  useRedemptionInfo,
  useSaveRedemptionTransaction,
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
  const navigation = useNavigation();
  const {data, refetch} = useRedemptionInfo();

  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [redeemableUnits, setredeemableUnits] = useState(0.0);
  const [redeemableAmount, setredeemableAmount] = useState(0.0);
  const [redeemableAmountLimit, setredeemableAmountLimit] = useState(0.0);
  const [redemptionLimitError, setRedemptionLimitError] = useState('');
  const [requestedUnits, setrequestedUnits] = useState();
  const [balanceUnits, setbalanceUnits] = useState();
  const [redemptionInformations, setredemptionInformations] = useState([]);
  const [redemptionStatus, setRedemptionStatus] = useState(languageTxt.byUnits);
  const [paymentType, setPaymentType] = useState(languageTxt.BankTransfer);
  const [otpRemainingTimeSec, setOtpRemainingTimeSec] = useState(0);
  const [msgModal, setMsgModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
  const [selectedData, setSelectedData] = useState({
    accountTitle: '',
    accountType: '',
    balanceUnits: '',
    bankAccountNo: '',
    bankBranchCode: '',
    bankCity: '',
    folioNumber: '',
    fundClassType: '',
    fundName: '',
    fundTypeName: '',
    holdingUnits: '',
    ibanNo: '',
    netAmount: '',
    redeemableAmount: '',
    redeemableUnits: '',
    requestedUnits: '',
    response: '',
    unitPrice: '',
  });

  const [formData, setFormData] = useState({
    fundName: '',
    fundUnitClass: '',
    fundUnitType: '',
    redeemUnits: '',
    redeemAmount: '',
    redeemBy: 'Unit',
    username: '',
  });
  const [otp, setotp] = useState('');
  const [transactionID, setTransactionID] = useState('');
  useEffect(() => {
    if (data)
      data
        .then((value: any) => {
          setIsLoading(false);
          value?.success && setredemptionInformations(value?.data);
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
      redeemUnits: '',
      redeemAmount: '',
      redeemBy: 'Unit',
      username: '',
    },
    mode: 'onTouched',
  });

  const onSubmitGenerateTpin = async (data: any) => {
    if (
      Number(redeemableUnits) > 0 &&
      Number(data?.redeemUnits) <= Number(redeemableUnits) &&
      redemptionStatus == languageTxt.byUnits
    ) {
      const userInfo = await getService(
        languageTxt?.reactAsyncStorageKeys?.userInfo,
      );
      const newUserInfo = userInfo && JSON.parse(userInfo);
      const accCode = await getAccCode();
      const tID = `OERN_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
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
    } else if (
      Number(redeemableAmount) > 0 &&
      Number(data?.redeemAmount) <= Number(redeemableAmountLimit) &&
      redemptionStatus == languageTxt.byAmount
    ) {
      const userInfo = await getService(
        languageTxt?.reactAsyncStorageKeys?.userInfo,
      );
      const newUserInfo = userInfo && JSON.parse(userInfo);
      const accCode = await getAccCode();
      const tID = `OERN_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
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
    } else if (
      Number(selectedData.redeemableUnits) > 0 &&
      redemptionStatus == languageTxt.entire
    ) {
      const userInfo = await getService(
        languageTxt?.reactAsyncStorageKeys?.userInfo,
      );
      const newUserInfo = userInfo && JSON.parse(userInfo);
      const accCode = await getAccCode();
      const tID = `OERN_${accCode}_${moment().format('MMDDyyyy_HHmmss.ms')}`;
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
    } else {
      setError('fundName', {
        message: 'Redeem units are greater than redeemable units',
      });
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

  const saveRedemptionTransactionMutation = useSaveRedemptionTransaction();
  const onFormSubmit = async () => {
    clearErrors();
    setIsLoading(true);
    setFormError(null);

    const username = await getUserName();
    const {fundName, fundUnitClass, fundUnitType, redeemBy} = formData;
    const redeemUnits =
      redemptionStatus == languageTxt.entire
        ? selectedData.redeemableUnits
        : formData?.redeemUnits || 0;
    const redeemAmount = formData?.redeemAmount ? formData?.redeemAmount : 0;
    const mutationArgs: any = {
      tranDate: moment().format(dateFormat.CALENDAR_FORMAT),
      tranTime: moment().format('HHmm'),
      fundName,
      fundUnitClass,
      fundUnitType,
      redeemUnits,
      redeemAmount,
      redeemBy,
      username,
      paymentType,
      onSuccessCb,
      onErrorCb,
    };
    saveRedemptionTransactionMutation.mutate(mutationArgs);
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
          languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption?.name
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
                    heading1={`${languageTxt.Redeemable} Unit`}
                    description1={`${numberWithCommas(
                      Number(redeemableUnits).toFixed(4),
                    )}`}
                    heading2={`${languageTxt.Redeemable} Amount`}
                    description2={`PKR ${numberWithCommas(
                      Number(redeemableAmount).toFixed(2),
                    )}`}
                    requestedUnits={`${numberWithCommas(
                      Number(requestedUnits).toFixed(4),
                    )}`}
                    balanceUnits={`${numberWithCommas(
                      Number(balanceUnits).toFixed(4),
                    )}`}
                  />
                </>
              )}
              <View style={styles.lineBreak}></View>
              {/* <CustomInput
                placeHolder={languageTxt.AddRequestFund}
                disabled={true}
                value={getValues().fundName}
                leftIcon={
                  <MaterialCommunityIcons
                    name="format-list-bulleted-type"
                    size={dimensionConstants?.iconXSmall}
                    color={colorConstants?.gray}
                  />
                }
              /> */}
              <RadioButton.Group
                onValueChange={value => {
                  setValue('redeemAmount', '');
                  setValue('redeemUnits', '');
                  setValue(
                    'redeemBy',
                    value === languageTxt.byUnits
                      ? 'Unit'
                      : value === languageTxt.entire
                      ? 'Entire'
                      : 'Amount',
                  );
                  setRedemptionLimitError(
                    value === languageTxt.byAmount
                      ? `You can Redeem upto 75% of your Balance which is equal to '${
                          redeemableAmountLimit
                            ? numberWithCommas(
                                Number(redeemableAmountLimit).toFixed(2),
                              )
                            : '0.00'
                        } (PKR)'`
                      : '',
                  );
                  setRedemptionStatus(value);
                  clearErrors();
                }}
                value={redemptionStatus}>
                <RadioButton.Item
                  color={colorConstants.primary}
                  label={languageTxt.byUnits}
                  value={languageTxt.byUnits}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors && !!errors?.redeemUnits}
                      errorMsg={errors && errors?.redeemUnits?.message}
                      placeHolder={'0.0000'}
                      autoCapitalize="none"
                      disabled={redemptionStatus != languageTxt.byUnits}
                      keyboardType={'numeric'}
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                      leftIcon={
                        <MaterialCommunityIcons
                          name="account"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.gray}
                        />
                      }
                    />
                  )}
                  name="redeemUnits"
                  rules={{
                    min: {
                      value: redemptionStatus == languageTxt.byUnits ? 1 : 0,
                      message: 'Unit must be greater than or equal 1',
                    },
                    required: {
                      value: redemptionStatus == languageTxt.byUnits,
                      message: languageTxt?.txtRedeemUnitsError,
                    },
                    pattern: {
                      value: /^\d+(\.\d{1,4})?$/,
                      message: 'Maximum 4 decimal places allowed.',
                    },
                  }}
                />

                <RadioButton.Item
                  color={colorConstants.primary}
                  label={languageTxt.byAmount}
                  value={languageTxt.byAmount}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors && !!errors?.redeemAmount}
                      errorMsg={errors && errors?.redeemAmount?.message}
                      placeHolder={'0.00'}
                      autoCapitalize="none"
                      disabled={redemptionStatus != languageTxt.byAmount}
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
                  name="redeemAmount"
                  rules={{
                    min: {
                      value: redemptionStatus == languageTxt.byAmount ? 1 : 0,
                      message: 'Amount must be greater than or equal 1',
                    },
                    required: {
                      value: redemptionStatus == languageTxt.byAmount,
                      message: languageTxt?.txtRedeemAmountError,
                    },
                    pattern: {
                      value: /^\d+(\.\d{1,2})?$/,
                      message: 'Maximum 2 decimal places allowed.',
                    },
                  }}
                />
                {redemptionLimitError && (
                  <ValidationMessage children={redemptionLimitError} />
                )}

                <RadioButton.Item
                  color={colorConstants.primary}
                  label={languageTxt.entire}
                  value={languageTxt.entire}
                />
              </RadioButton.Group>

              <View style={styles.paymentTypeBox}>
                <CustomTitle
                  title="Payment Type"
                  fontSize={fontConstants.xmiddle}
                  titleColor={colorConstants.black}
                  fontWeight={fontConstants.fontWeight500}
                  extraStyles={{
                    marginTop: dimensionConstants.paddingXSmall,
                    paddingLeft: dimensionConstants.paddingMiddle,
                  }}
                />
                <RadioButton.Group
                  onValueChange={value => {
                    setPaymentType(value);
                  }}
                  value={paymentType}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <RadioButton.Item
                      color={colorConstants.primary}
                      label={languageTxt.BankTransfer}
                      value={languageTxt.BankTransfer}
                      labelStyle={{
                        fontSize: 14,
                        width: '25%',
                      }}
                    />
                    <RadioButton.Item
                      color={colorConstants.primary}
                      label={languageTxt.Cheque}
                      value={languageTxt.Cheque}
                      labelStyle={{
                        fontSize: 14,
                        width: '25%',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <RadioButton.Item
                      color={colorConstants.primary}
                      label={languageTxt.DemandDraft}
                      value={languageTxt.DemandDraft}
                      labelStyle={{
                        fontSize: 14,
                        width: '25%',
                      }}
                    />
                  </View>
                </RadioButton.Group>
              </View>

              <CustomDoubleButton
                primaryButtonText={languageTxt?.addRequest}
                secondaryButtonText={languageTxt?.cancel}
                isDisabledPrimary={saveRedemptionTransactionMutation?.isLoading}
                handlePrimaryOnPress={handleSubmit(onSubmitGenerateTpin)}
                handleSecondaryOnPress={() =>
                  navigation.navigate(
                    // languageTxt?.reactStackKeys?.user?.eTransactions?.menus,
                    languageTxt?.reactStackKeys?.user?.eTransactions?.name,
                  )
                }
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
                title={`E-Redemption Info`}
                fontWeight={fontConstants.fontWeight500}
                extraStyles={{
                  paddingVertical: dimensionConstants.paddingSmall,
                }}
              />
              <CustomFundDetailCard
                title={selectedData.fundName}
                heading1={'Folio Number'}
                description1={selectedData.folioNumber}
                heading2={'Requested Date'}
                description2={new Date().toDateString()}
                heading3={'Transaction Type'}
                description3={
                  languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
                    ?.name
                }
                heading5={'Redemption Amount'}
                description5={`${numberWithCommas(
                  Number(formData.redeemAmount).toFixed(2),
                )} (PKR)`}
                heading6={'Redemption Unit'}
                description6={
                  redemptionStatus == languageTxt.entire
                    ? `${numberWithCommas(
                        Number(selectedData.redeemableUnits).toFixed(4),
                      )}`
                    : `${numberWithCommas(
                        Number(formData.redeemUnits).toFixed(4),
                      )}`
                }
                heading7={'Account Title'}
                description7={selectedData.accountTitle}
                heading8={'Account Number'}
                description8={selectedData.bankAccountNo}
                heading9={'Branch City'}
                description9={selectedData.bankCity}
                heading10={'Branch Name'}
                description10={selectedData.bankBranchCode}
                heading11={'Payment Type'}
                description11={paymentType}
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
              languageTxt?.reactStackKeys?.user?.eTransactions?.eRedemption
                ?.name
            }
            body={
              <FlatList
                style={styles.flatListContainer}
                data={redemptionInformations}
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
                      setValue('redeemAmount', '');
                      setValue('redeemUnits', '');
                      setValue('redeemBy', 'Unit');
                      setValue('username', element?.item?.accountTitle);
                      setredeemableAmount(
                        parseFloat(element?.item?.redeemableAmount) < 0
                          ? 0
                          : parseFloat(element?.item?.redeemableAmount),
                      );
                      setredeemableAmountLimit(
                        ((parseFloat(element?.item?.redeemableAmount) < 0
                          ? 0
                          : parseFloat(element?.item?.redeemableAmount)) /
                          100) *
                          75,
                      );
                      setredeemableUnits(
                        parseFloat(element?.item?.redeemableUnits) < 0
                          ? 0
                          : parseFloat(element?.item?.redeemableUnits),
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
