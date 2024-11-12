import React, {useState} from 'react';
import {View} from 'react-native';
import {useQueryClient} from 'react-query';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../utils/constants/languageTxt';
import {getAccPassword} from '../../../../config/asyncStorage/acc_code';
import {fontConstants} from '../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../utils/constants/colorConstants';
import {changePasswordApi} from '../../../../modules/mobile_integration/api';
import {asyncLogoutService} from '../../../../config/asyncStorage/asynDataStore';
import {dimensionConstants} from '../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../shared/Skeleton';
import CustomTitle from '../../../shared/CustomTitle';
import CustomSnack from '../../../shared/CustomSnack';
import CustomInput from '../../../shared/CustomInput';
import ValidationMessage from '../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../shared/CustomDoubleButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChangePassword = ({route}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);

  const [oldPasswordStatus, setOldPasswordStatus] = useState(true);
  const [newPasswordStatus, setNewPasswordStatus] = useState(true);
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(true);

  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const {data} = route.params;
  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    const password = await getAccPassword();
    if (data?.oldPassword === password) {
      if (data?.newPassword == data?.confirmPassword) {
        setIsLoading(true);
        clearErrors();
        setFormError(null);

        const result = await changePasswordApi(
          data?.oldPassword,
          data?.newPassword,
        );
        onSuccessCb(result);
      } else {
        setError('confirmPassword', {
          message: 'Confirm Password did not match',
        });
      }
    } else {
      setError('oldPassword', {message: 'Old Password did not match'});
    }
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      setErrorSnack(data?.message);
      if (data?.success) {
        await asyncLogoutService(languageTxt, queryClient);
        navigation.navigate(languageTxt?.reactStackKeys?.guest?.name);
      }
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };

  return (
    <>
      <Skeleton
        title={languageTxt?.reactStackKeys?.auth?.changePassword}
        isLoading={isLoading}
        isBottomNav={data != languageTxt.forgotPasswordKey}>
        <>
          <CustomTitle
            title={languageTxt?.changeYourPassword}
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
              title={languageTxt?.changeYourPasswordDescription}
              fontSize={fontConstants?.middle}
            />
          </View>

          {formError && (
            <View style={styles?.formValidation}>
              <ValidationMessage children={formError} />
            </View>
          )}

          <View style={styles?.loginContainer}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors && !!errors?.oldPassword}
                  errorMsg={
                    errors &&
                    errors?.oldPassword &&
                    errors?.oldPassword?.message
                  }
                  autoCapitalize="none"
                  placeHolder={languageTxt?.txtOldPassword}
                  value={value}
                  onBlur={onBlur}
                  handleChange={(value: String) => onChange(value)}
                  secureTextEntry={oldPasswordStatus}
                  leftIcon={
                    <MaterialCommunityIcons
                      name="lock"
                      size={dimensionConstants?.iconXSmall}
                      color={colorConstants?.gray}
                    />
                  }
                  rightIcon={
                    <>
                      {oldPasswordStatus ? (
                        <MaterialCommunityIcons
                          name="eye-off"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.lightGray}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="eye"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.gray}
                        />
                      )}
                    </>
                  }
                  rightIconClick={() =>
                    setOldPasswordStatus(!oldPasswordStatus)
                  }
                  blurOnSubmit={true}
                />
              )}
              name="oldPassword"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtOldPasswordError,
                },
              }}
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors && !!errors?.newPassword}
                  errorMsg={
                    errors &&
                    errors?.newPassword &&
                    errors?.newPassword?.message
                  }
                  autoCapitalize="none"
                  placeHolder={languageTxt?.txtNewPassword}
                  value={value}
                  onBlur={onBlur}
                  handleChange={(value: String) => onChange(value)}
                  secureTextEntry={newPasswordStatus}
                  leftIcon={
                    <MaterialCommunityIcons
                      name="lock"
                      size={dimensionConstants?.iconXSmall}
                      color={colorConstants?.gray}
                    />
                  }
                  rightIcon={
                    <>
                      {newPasswordStatus ? (
                        <MaterialCommunityIcons
                          name="eye-off"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.lightGray}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="eye"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.gray}
                        />
                      )}
                    </>
                  }
                  rightIconClick={() =>
                    setNewPasswordStatus(!newPasswordStatus)
                  }
                  blurOnSubmit={true}
                />
              )}
              name="newPassword"
              rules={{
                minLength: {
                  value: 8,
                  message: `${languageTxt?.txtNewPassword} ${languageTxt?.['must contain minimum 8 characters']}`,
                },
                maxLength: {
                  value: 8,
                  message: `${languageTxt?.txtNewPassword} ${languageTxt?.['maximum length 8 characters']}`,
                },
                required: {
                  value: true,
                  message: languageTxt?.txtNewPasswordError,
                },
              }}
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  error={errors && !!errors?.confirmPassword}
                  errorMsg={
                    errors &&
                    errors?.confirmPassword &&
                    errors?.confirmPassword?.message
                  }
                  autoCapitalize="none"
                  placeHolder={languageTxt?.txtConfirmPassword}
                  value={value}
                  onBlur={onBlur}
                  handleChange={(value: String) => onChange(value)}
                  secureTextEntry={confirmPasswordStatus}
                  leftIcon={
                    <MaterialCommunityIcons
                      name="lock"
                      size={dimensionConstants?.iconXSmall}
                      color={colorConstants?.gray}
                    />
                  }
                  rightIcon={
                    <>
                      {confirmPasswordStatus ? (
                        <MaterialCommunityIcons
                          name="eye-off"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.lightGray}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="eye"
                          size={dimensionConstants?.iconXSmall}
                          color={colorConstants?.gray}
                        />
                      )}
                    </>
                  }
                  rightIconClick={() =>
                    setConfirmPasswordStatus(!confirmPasswordStatus)
                  }
                  blurOnSubmit={true}
                />
              )}
              name="confirmPassword"
              rules={{
                minLength: {
                  value: 8,
                  message: `${languageTxt?.txtConfirmPassword} ${languageTxt?.['must contain minimum 8 characters']}`,
                },
                maxLength: {
                  value: 8,
                  message: `${languageTxt?.txtConfirmPassword} ${languageTxt?.['maximum length 8 characters']}`,
                },
                required: {
                  value: true,
                  message: languageTxt?.txtConfirmPasswordError,
                },
              }}
            />

            <CustomDoubleButton
              primaryButtonText={languageTxt?.submitRequest}
              secondaryButtonText={languageTxt?.clear}
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

export default ChangePassword;
