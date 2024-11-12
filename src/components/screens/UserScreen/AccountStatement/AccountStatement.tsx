import React, {useState,useEffect} from 'react';
import {Alert, PermissionsAndroid, Platform, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';
import { useAuthentication} from '../../../../utils/globalHooks';
import {
  useGenerateAccountStatment,
  useSendAccountStatmentEmail,
} from '../../../../modules/m_transactions/hooks';
import {PeriodBy} from '../../../shared/CustomDatePicker/CustomDatePicker.interface';

import Skeleton from '../../../shared/Skeleton';
import CustomTitle from '../../../shared/CustomTitle';
import CustomInput from '../../../shared/CustomInput';
import CustomSnack from '../../../shared/CustomSnack';
import CustomModal from '../../../shared/CustomModal';
import CustomButton from '../../../shared/CustomButton';
import AlertModal from '../../../shared/AlertModal/AlertModal';
import dateFormat from '../../../../utils/constants/dateFormat';
import CustomDatePicker from '../../../shared/CustomDatePicker';
import ValidationMessage from '../../../shared/ValidationMessage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountStatement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [showDropDownStartDate, setShowDropDownStartDate] = useState(false);
  const [showDropDownEndDate, setShowDropDownEndDate] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    startDate: moment().subtract(7, 'd').format(dateFormat.CALENDAR_FORMAT),
    endDate: moment().format(dateFormat.CALENDAR_FORMAT),
    period: PeriodBy.BY_WEEK,
  });
  const [apiResponse, setApiResponse] = useState();

  const navigation = useNavigation();
  const generateAccountStatmentMutation = useGenerateAccountStatment();
  
  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { data: authData }: any = useAuthentication();

  useEffect(() => {
    if (authData?.userProfile) 
      console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
    setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
    let backgrndColor = mngmntCompany == 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor)
    console.log('Background Color Account Statement : ', bgColor)
  }, [bgColor]);


  const {
    control,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      dateFrom: data?.startDate,
      dateTo: data?.endDate,
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const {dateFrom, dateTo} = data;
    const mutationArgs: any = {
      dateFrom,
      dateTo,
      onSuccessCb,
      onErrorCb,
    };

    generateAccountStatmentMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setOpen(true);
      setIsLoading(false);
      setErrorSnack('');
      setApiResponse(data?.data);
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };
  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setFormError(languageTxt?.strings?.unexpectedError);
  };

  const [msgModal, setMsgModal] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
  const sendAccountStatmentEmailMutation = useSendAccountStatmentEmail();
  const {
    control: controlEmail,
    setError: setErrorEmail,
    setValue: setValueEmail,
    clearErrors: clearErrorsEmail,
    handleSubmit: handleSubmitEmail,
    formState: {errors: errorsEmail},
    reset: resetEmail,
  } = useForm({
    defaultValues: {
      dateFrom: data?.startDate,
      dateTo: data?.endDate,
    },
    mode: 'onTouched',
  });

  const onSubmitEmail = async (data: any) => {
    setIsLoading(true);
    const {dateFrom, dateTo} = data;
    const mutationArgs: any = {
      dateFrom,
      dateTo,
      onSuccessCb: onSuccessCbEmail,
      onErrorCb: onErrorCbEmail,
    };

    sendAccountStatmentEmailMutation.mutate(mutationArgs);
  };
  const onSuccessCbEmail = async (data: any) => {
    try {
      setIsLoading(false);
      if (data.success) {
        setMsgModal(true);
        setAlertTitle(languageTxt.emailMsg);
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
  const onErrorCbEmail = async (error: any) => {
    setIsLoading(false);
    setMsgModal(true);
    setAlertTitle(languageTxt.error_title);
    setAlertDescription(languageTxt.an_unexpected_error);
  };
  return (
    <>
      <Skeleton
        title={languageTxt?.reactStackKeys?.user?.accountStatement?.name}
        isLoading={isLoading}
        bgColor={bgColor}
        isBottomNav={true}
        isBack={false}>
        <>
          <CustomTitle
            title={`${languageTxt?.reactStackKeys?.user?.accountStatement?.name} Request`}
            titleColor= {bgColor}//{colorConstants?.drakGray}
            fontWeight={fontConstants?.fontWeight600}
            fontSize={fontConstants?.header}
            extraStyles={{
              textAlign: 'center',
              padding: dimensionConstants?.paddingXXXLarge,
              paddingBottom: dimensionConstants?.padding,
            }}
          />

          {formError && (
            <View style={styles?.formValidation}>
              <ValidationMessage children={formError} />
            </View>
          )}

          <View style={styles?.loginContainer}>
            {/* txtStartDate */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.dateFrom ? true : false}
                  errorMsg={errors.dateFrom ? errors.dateFrom?.message : ''}
                  placeHolder={languageTxt?.txtStartDate}
                  disabled={true}
                  onBlur={onBlur}
                  value={value}
                  rightIcon={
                    <MaterialCommunityIcons
                      name="calendar"
                      size={dimensionConstants?.iconSmall}
                      color={colorConstants?.primary}
                    />
                  }
                  rightIconClick={() => {
                    setShowDropDownStartDate(true);
                  }}
                />
              )}
              name="dateFrom"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtStartDateError,
                },
              }}
            />

            {/* txtEndDate */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.dateTo ? true : false}
                  errorMsg={errors.dateTo ? errors.dateTo?.message : ''}
                  placeHolder={languageTxt?.txtEndDate}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  disabled={true}
                  rightIcon={
                    <MaterialCommunityIcons
                      name="calendar"
                      size={dimensionConstants?.iconSmall}
                      color={colorConstants?.primary}
                    />
                  }
                  rightIconClick={() => {
                    setShowDropDownEndDate(true);
                  }}
                />
              )}
              name="dateTo"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtEndDateError,
                },
              }}
            />

            <CustomDatePicker
              showDropDown={showDropDownStartDate}
              setShowDropDown={setShowDropDownStartDate}
              modalTitle={'Select Start Date'}
              data={data}
              onChange={(date: any) => {
                if (
                  moment(data?.endDate, dateFormat.CALENDAR_FORMAT) >
                  moment(date?.startDate, dateFormat.CALENDAR_FORMAT)
                ) {
                  setData({...data, startDate: date?.startDate});
                } else {
                  setValue('dateTo', date?.endDate);
                  setData({
                    ...data,
                    startDate: date?.startDate,
                    endDate: date?.endDate,
                  });
                }
                setValue('dateFrom', date?.startDate);
              }}
            />

            <CustomDatePicker
              showDropDown={showDropDownEndDate}
              setShowDropDown={setShowDropDownEndDate}
              modalTitle={'Select End Date'}
              data={data}
              minDate={data?.startDate}
              onChange={(date: any) => {
                if (
                  moment(data?.startDate, dateFormat.CALENDAR_FORMAT) <
                  moment(date?.endDate, dateFormat.CALENDAR_FORMAT)
                ) {
                  setData({...data, endDate: date?.endDate});
                } else {
                  setValue('dateFrom', date?.startDate);
                  setData({
                    ...data,
                    startDate: date?.startDate,
                    endDate: date?.endDate,
                  });
                }
                setValue('dateTo', date?.endDate);
              }}
            />
            <CustomButton
              backgroundColor={bgColor}
              buttonText={languageTxt?.generateReport}
              isDisabled={generateAccountStatmentMutation?.isLoading}
              handleOnPress={handleSubmit(onSubmit)}
            />
          </View>

          <CustomModal
            open={open}
            bottom={true}
            onRequestClose={() => setOpen(false)}
            title={'PDF Actions'}
            body={
              <View style={styles?.buttonContainer}>
                <CustomButton
                  backgroundColor={colorConstants?.transparent}
                  textColor={colorConstants?.drakGray}
                  extraStyles={styles?.extraStyles}
                  fontSize={fontConstants?.xsmall}
                  icon={
                    <MaterialCommunityIcons
                      name="arrow-down-bold"
                      style={styles?.icon}
                      size={dimensionConstants?.iconLarge}
                      color={colorConstants?.primary}
                    />
                  }
                  buttonText={'Send to registered Email'}
                  handleOnPress={() => {
                    setOpen(false);
                    onSubmitEmail({
                      dateFrom: data?.startDate,
                      dateTo: data?.endDate,
                    });
                  }}
                />
                <CustomButton
                  backgroundColor={colorConstants?.transparent}
                  textColor={colorConstants?.drakGray}
                  extraStyles={styles?.extraStyles}
                  fontSize={fontConstants?.xsmall}
                  icon={
                    <MaterialCommunityIcons
                      name="view-gallery"
                      style={styles?.icon}
                      size={dimensionConstants?.iconLarge}
                      color={colorConstants?.primary}
                    />
                  }
                  buttonText={'View'}
                  handleOnPress={() => {
                    navigation.navigate(
                      languageTxt?.reactStackKeys?.user?.accountStatement?.name,
                      {
                        screen:
                          languageTxt?.reactStackKeys?.user?.accountStatement
                            ?.pdf,
                        params: {data: apiResponse},
                      },
                    );
                    setOpen(false);
                  }}
                />
              </View>
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
            }}
          />
        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default AccountStatement;
