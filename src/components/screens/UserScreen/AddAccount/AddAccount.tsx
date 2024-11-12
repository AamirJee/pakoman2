import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { languageTxt } from '../../../../utils/constants/languageTxt';
import { fontConstants } from '../../../../utils/constants/fontConstants';
import { colorConstants } from '../../../../utils/constants/colorConstants';
import { useMapAccountApi } from '../../../../modules/mobile_integration/hooks';
import { dimensionConstants } from '../../../../utils/constants/dimensionConstants';
import { useAuthentication } from '../../../../utils/globalHooks';

import Skeleton from '../../../shared/Skeleton';
import CustomSnack from '../../../shared/CustomSnack';
import CustomTitle from '../../../shared/CustomTitle';
import CustomInput from '../../../shared/CustomInput';
import CustomButton from '../../../shared/CustomButton';
import ValidationMessage from '../../../shared/ValidationMessage';

const AddAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);

  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { data: authData }: any = useAuthentication();

  useEffect(() => {
    if (authData?.userProfile) 
      console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
    setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
    let backgrndColor = mngmntCompany == 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor)
    console.log('Background Color Add Account: ', bgColor)
  }, [bgColor]);

  const mapAccountMutation = useMapAccountApi();

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      cnic: '',
      userID: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const { title, cnic, userID } = data;
    const mutationArgs: any = {
      title,
      cnic,
      userID,
      onSuccessCb,
      onErrorCb,
    };

    mapAccountMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      if (data?.success) {
        setValue('title', '');
        setValue('cnic', '');
        setValue('userID', '');
        setErrorSnack(data?.message);
      } else {
        setErrorSnack(data?.message);
      }
    } catch (error) {
      setIsLoading(false);
      setFormError(languageTxt?.unexpectedError);
    }
  };

  const onErrorCb = async (error: any) => {
    setIsLoading(false);
    setFormError(error?.ValidationMessage);
  };

  return (
    <>
      <Skeleton
        isBack={false}
        isBottomNav={true}
        bgColor={bgColor}//{mngmntCompany !== 'RUSD Investment Bank' ? colorConstants.primaryB : colorConstants.primary}
        isLoading={isLoading}
        title={languageTxt?.reactStackKeys?.user?.addAccount}>
        <KeyboardAwareScrollView style={styles?.container}>
          <CustomTitle
            title={languageTxt?.accountDetails}
            titleColor={bgColor}//{mngmntCompany !== 'RUSD Investment Bank' ? colorConstants.primaryB : colorConstants.primary}
            //titleColor={colorConstants?.drakGray}
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

          <View style={styles?.formContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  error={errors && !!errors?.userID}
                  errorMsg={errors && errors?.userID?.message}
                  placeHolder={languageTxt?.accountNumber}
                  autoCapitalize="none"
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
              name="userID"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtAccountNumberError,
                },
              }}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  error={errors && !!errors?.title}
                  errorMsg={errors && errors?.title?.message}
                  placeHolder={languageTxt?.accountTitle}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                  leftIcon={
                    <MaterialCommunityIcons
                      name="text-account"
                      size={dimensionConstants?.iconXSmall}
                      color={colorConstants?.gray}
                    />
                  }
                />
              )}
              name="title"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtAccountTitleError,
                },
              }}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  error={errors && !!errors?.cnic}
                  errorMsg={errors && errors?.cnic?.message}
                  placeHolder={languageTxt?.accountCnic + ' (XXXXX-XXXXXXX-X)'}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  keyboardType={'numeric'}
                  value={value}
                  handleChange={(value: String) => onChange(value)}
                  leftIcon={
                    <MaterialCommunityIcons
                      name="card-account-details"
                      size={dimensionConstants?.iconXSmall}
                      color={colorConstants?.gray}
                    />
                  }
                />
              )}
              name="cnic"
              rules={{
                required: {
                  value: true,
                  message: languageTxt?.txtAccountCnicError,
                },
              }}
            />

            <CustomButton
              backgroundColor={bgColor}
              isDisabled={mapAccountMutation?.isLoading}
              buttonText={languageTxt?.submit}
              handleOnPress={handleSubmit(onSubmit)}
            />
          </View>
        </KeyboardAwareScrollView>
      </Skeleton>
      <CustomSnack isOpen={errorSnack} setOpen={() => setErrorSnack('')} />
    </>
  );
};

export default AddAccount;
