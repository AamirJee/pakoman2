import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';
import {
  useForgetPassword,
  useForgetUserName,
} from '../../../../modules/mobile_integration/hooks';

import Skeleton from '../../../shared/Skeleton';
import CustomTitle from '../../../shared/CustomTitle';
import CustomSnack from '../../../shared/CustomSnack';
import CustomInput from '../../../shared/CustomInput';
import ValidationMessage from '../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../shared/CustomDoubleButton';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);

  const navigation = useNavigation();
  const forgetPasswordMutation = useForgetPassword();
  const forgetUserNameMutation = useForgetUserName();

  const {
    control,
    clearErrors,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      cnic: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    if (data?.userName) {
      const mutationArgs: any = {
        userName: data?.userName,
        cnic: data?.cnic,
        onSuccessCb,
        onErrorCb,
      };
      forgetPasswordMutation.mutate(mutationArgs);
    } else {
      const mutationArgs: any = {
        email: data?.email,
        cnic: data?.cnic,
        onSuccessCb,
        onErrorCb,
      };
      forgetUserNameMutation.mutate(mutationArgs);
    }
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      setErrorSnack(data?.message);
      if (data?.success) {
        navigation.goBack();
      }
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };

  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setFormError(error?.message);
  };

  return (
    <>
      <Skeleton
        title={languageTxt?.reactStackKeys?.auth?.forgotPassword}
        isLoading={isLoading}
        isBottomNav={true}>
        <>
          <CustomTitle
            title={languageTxt?.forget_heading}
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
              title={languageTxt?.forget_description}
              fontSize={fontConstants?.middle}
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
            {/* txtLoginID */}
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.userName ? true : false}
                  errorMsg={errors.userName ? errors.userName.message : ''}
                  placeHolder={languageTxt?.txtUserName}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="userName"
              rules={{
                required: {
                  value: false,
                  message: languageTxt?.txtUserNameError,
                },
              }}
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.email ? true : false}
                  errorMsg={errors.email ? errors.email.message : ''}
                  placeHolder={languageTxt?.txtEmailAddress}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                />
              )}
              name="email"
              rules={{
                required: {
                  value: false,
                  message: languageTxt?.txtEmailAddressError,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: languageTxt.emailPatternError,
                },
              }}
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors.cnic ? true : false}
                  errorMsg={errors.cnic ? errors.cnic.message : ''}
                  placeHolder={languageTxt?.txtCNIC}
                  autoCapitalize="none"
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

            <CustomDoubleButton
              primaryButtonText={languageTxt?.submitRequest}
              secondaryButtonText={languageTxt?.clear}
              isDisabledPrimary={
                forgetPasswordMutation?.isLoading ||
                forgetUserNameMutation?.isLoading
              }
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

export default ForgotPassword;
