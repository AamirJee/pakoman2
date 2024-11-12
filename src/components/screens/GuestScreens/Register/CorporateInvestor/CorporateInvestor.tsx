import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {useSignUpCorporate} from '../../../../../modules/mobile_integration/hooks';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomSnack from '../../../../shared/CustomSnack';
import CustomInput from '../../../../shared/CustomInput';
import ValidationMessage from '../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../shared/CustomDoubleButton';

const CorporateInvestor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);

  const navigation = useNavigation();
  const signUpCorporateMutation = useSignUpCorporate();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userID: '',
      accCode: '',
      title: '',
      accountType: '',
      ntn: '',
      compRegNo: '',
      authPerName: '',
      authPerCNIC: '',
      email: '',
      regContact: '',
      regAddress: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const accountType = 'Corporate';
    const {
      userID,
      accCode,
      title,
      ntn,
      compRegNo,
      authPerName,
      authPerCNIC,
      email,
      regContact,
      regAddress,
    } = data;
    const mutationArgs: any = {
      userID,
      accCode,
      title,
      accountType,
      ntn,
      compRegNo,
      authPerName,
      authPerCNIC,
      email,
      regContact,
      regAddress,
      onSuccessCb,
      onErrorCb,
    };

    signUpCorporateMutation.mutate(mutationArgs);
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
        title={languageTxt?.reactStackKeys?.auth?.register?.corporateInvestor}
        isLoading={isLoading}
        isBottomNav={true}>
        <>
          <CustomTitle
            title={languageTxt?.servicesRequestFormForCorporateInvestors}
            titleColor={colorConstants?.drakGray}
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
            {/* txtLoginID */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.userID ? true : false}
                  errorMsg={errors.userID ? errors.userID.message : ''}
                  placeHolder={languageTxt?.txtUserName}
                  autoCapitalize="none"
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
            {/* txtAccRegCode */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.accCode ? true : false}
                  errorMsg={errors.accCode ? errors.accCode?.message : ''}
                  placeHolder={languageTxt?.txtAccRegCode}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="accCode"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtAccRegCodeError,
                },
              }}
            />
            {/* txtCompanyName */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.title ? true : false}
                  errorMsg={errors.title ? errors.title?.message : ''}
                  placeHolder={languageTxt?.txtCompanyName}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="title"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtCompanyNameError,
                },
              }}
            />
            {/* txtNTN */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.ntn ? true : false}
                  errorMsg={errors.ntn ? errors.ntn?.message : ''}
                  placeHolder={languageTxt?.txtNTN}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="ntn"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtNTNError,
                },
              }}
            />
            {/* txtCompIncorporationNumber */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.compRegNo ? true : false}
                  errorMsg={errors.compRegNo ? errors.compRegNo?.message : ''}
                  placeHolder={languageTxt?.txtCompIncorporationNumber}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="compRegNo"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtCompIncorporationNumberError,
                },
              }}
            />
            {/* txtAuthPersonName */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.authPerName ? true : false}
                  errorMsg={
                    errors.authPerName ? errors.authPerName?.message : ''
                  }
                  placeHolder={languageTxt?.txtAuthPersonName}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="authPerName"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtAuthPersonNameError,
                },
              }}
            />
            {/* txtAuthPersonCNIC */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.authPerCNIC ? true : false}
                  errorMsg={
                    errors.authPerCNIC ? errors.authPerCNIC?.message : ''
                  }
                  placeHolder={languageTxt?.txtAuthPersonCNIC}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="authPerCNIC"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtAuthPersonCNICError,
                },
              }}
            />
            {/* txtEmail */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.email ? true : false}
                  errorMsg={errors.email ? errors.email?.message : ''}
                  placeHolder={languageTxt?.txtEmail}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtEmailError,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: languageTxt.emailPatternError,
                },
              }}
            />
            {/* txtRegContact */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.regContact ? true : false}
                  errorMsg={errors.regContact ? errors.regContact?.message : ''}
                  placeHolder={languageTxt?.txtRegContact}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="regContact"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtRegContactError,
                },
              }}
            />
            {/* txtRegAddress */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.regAddress ? true : false}
                  errorMsg={errors.regAddress ? errors.regAddress?.message : ''}
                  placeHolder={languageTxt?.txtRegAddress}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="regAddress"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtRegAddressError,
                },
              }}
            />

            <CustomDoubleButton
              primaryButtonText={languageTxt?.submitRequest}
              secondaryButtonText={languageTxt?.clear}
              // isDisabledPrimary={signupMutation?.isLoading}
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

export default CorporateInvestor;
