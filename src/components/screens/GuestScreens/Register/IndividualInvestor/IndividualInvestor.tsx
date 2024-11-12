import React, {useState} from 'react';
import {View} from 'react-native';
import moment from 'moment';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {useSignUp} from '../../../../../modules/mobile_integration/hooks';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';
import {PeriodBy} from '../../../../shared/CustomDatePicker/CustomDatePicker.interface';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomSnack from '../../../../shared/CustomSnack';
import CustomInput from '../../../../shared/CustomInput';
import ValidationMessage from '../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../shared/CustomDoubleButton';
import CustomDatePicker from '../../../../shared/CustomDatePicker';
import dateFormat from '../../../../../utils/constants/dateFormat';

const IndividualInvestor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [showModalDOB, setShowModalDOB] = useState(false);

  const navigation = useNavigation();
  const signupMutation = useSignUp();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    getValues,
    setValue,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      email: '',
      userID: '',
      cellNumber: '',
      accCode: '',
      cnic: '',
      dateofBirth: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const accountType = 'Individual';
    const {title, email, userID, cellNumber, accCode, cnic, dateofBirth} = data;
    const mutationArgs: any = {
      title,
      email,
      userID,
      cellNumber,
      accCode,
      cnic,
      dateofBirth,
      accountType,
      onSuccessCb,
      onErrorCb,
    };

    signupMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      if (data?.success) {
        reset();
        setErrorSnack(data?.message);
      } else {
        setErrorSnack(data?.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };

  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setFormError(errorMessage(error?.response?.data?.code));
  };

  const errorMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'UserInvaildError':
        return languageTxt?.invalidUsernameOrPassword;
      default:
        return languageTxt?.strings?.unexpectedError;
    }
  };

  return (
    <>
      <Skeleton
        title={languageTxt?.reactStackKeys?.auth?.register?.individualInvestor}
        isLoading={isLoading}
        isBottomNav={true}>
        <>
          <CustomTitle
            title={languageTxt?.onlineServicesRequest}
            titleColor={colorConstants?.drakGray}
            fontWeight={fontConstants?.fontWeight600}
            fontSize={fontConstants?.header}
            extraStyles={{
              textAlign: 'center',
              padding: dimensionConstants?.paddingXXXLarge,
              paddingBottom: dimensionConstants?.padding,
            }}
          />

          <View style={styles?.logoContainer}>
            <CustomTitle
              title={languageTxt?.investorWelcome}
              fontSize={fontConstants?.small}
              extraStyles={{
                textAlign: 'center',
              }}
            />
            <CustomTitle
              title={languageTxt?.investorWelcome2}
              fontSize={fontConstants?.small}
              extraStyles={{
                textAlign: 'center',
              }}
            />
            <CustomTitle
              title={languageTxt?.investorWelcome3}
              fontSize={fontConstants?.small}
              extraStyles={{
                textAlign: 'center',
              }}
            />
          </View>

          {formError && (
            <View style={styles?.formValidation}>
              <ValidationMessage children={formError} />
            </View>
          )}

          <View style={styles?.loginContainer}>
            {/* title */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.title ? true : false}
                  errorMsg={errors.title ? errors.title.message : ''}
                  placeHolder={languageTxt?.txtName}
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="title"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtNameError,
                },
              }}
            />
            {/* email */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.email ? true : false}
                  errorMsg={errors.email ? errors.email?.message : ''}
                  placeHolder={languageTxt?.txtRegEmail}
                  autoCapitalize="none"
                  keyboardType={'email-address'}
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtRegEmailError,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: languageTxt.emailPatternError,
                },
              }}
            />
            {/* userID */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.userID ? true : false}
                  errorMsg={errors.userID ? errors.userID?.message : ''}
                  placeHolder={languageTxt?.txtUserName}
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="userID"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtUserNameError,
                },
              }}
            />
            {/* cellNumber */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.cellNumber ? true : false}
                  errorMsg={errors.cellNumber ? errors.cellNumber?.message : ''}
                  placeHolder={languageTxt?.txtRegMobileNum}
                  keyboardType={'phone-pad'}
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="cellNumber"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtRegMobileNumError,
                },
              }}
            />
            {/* accCode */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.accCode ? true : false}
                  errorMsg={errors.accCode ? errors.accCode?.message : ''}
                  placeHolder={languageTxt?.txtRegNo}
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="accCode"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtRegNoError,
                },
              }}
            />
            {/* cnic */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.cnic ? true : false}
                  errorMsg={errors.cnic ? errors.cnic?.message : ''}
                  placeHolder={languageTxt?.txtCNIC}
                  keyboardType={'numeric'}
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="cnic"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtCNICError,
                },
              }}
            />
            {/* dateofBirth */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.dateofBirth ? true : false}
                  errorMsg={
                    errors.dateofBirth ? errors.dateofBirth?.message : ''
                  }
                  placeHolder={languageTxt?.txtDOB}
                  onBlur={onBlur}
                  disabled={true}
                  value={value}
                  rightIcon={
                    <MaterialCommunityIcons
                      name="calendar"
                      size={dimensionConstants?.iconSmall}
                      color={colorConstants?.primary}
                    />
                  }
                  rightIconClick={() => {
                    setShowModalDOB(true);
                  }}
                />
              )}
              name="dateofBirth"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtDOBError,
                },
              }}
            />

            <CustomDatePicker
              showDropDown={showModalDOB}
              setShowDropDown={setShowModalDOB}
              modalTitle={'Select Date of Birth'}
              data={
                getValues('dateofBirth')
                  ? {
                      startDate: moment(
                        getValues('dateofBirth'),
                        dateFormat.DOB_FORMAT,
                      ).format(dateFormat.CALENDAR_FORMAT),
                      endDate: moment(
                        getValues('dateofBirth'),
                        dateFormat.DD_MM_YYYYY,
                      ).format(dateFormat.CALENDAR_FORMAT),
                      period: PeriodBy.BY_DAY,
                    }
                  : {
                      startDate: '',
                      endDate: '',
                      period: PeriodBy.BY_DAY,
                    }
              }
              onChange={(date: any) => {
                const dateDOB = moment(
                  date?.startDate,
                  dateFormat.CALENDAR_FORMAT,
                ).format(dateFormat.DD_MM_YYYYY);
                setValue('dateofBirth', dateDOB);
              }}
            />

            <CustomDoubleButton
              primaryButtonText={languageTxt?.onlineServicesRequest}
              secondaryButtonText={languageTxt?.clear}
              isDisabledPrimary={signupMutation?.isLoading}
              handlePrimaryOnPress={handleSubmit(onSubmit)}
              handleSecondaryOnPress={() => {
                clearErrors();
                reset();
              }}
            />
          </View>
        </>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default IndividualInvestor;
