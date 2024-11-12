import React, {useState} from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import StepIndicator from 'react-native-step-indicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../utils/constants/fontConstants';
import {colorConstants} from '../../../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../../../utils/constants/dimensionConstants';
import {PeriodBy} from '../../../../shared/CustomDatePicker/CustomDatePicker.interface';

import Skeleton from '../../../../shared/Skeleton';
import CustomTitle from '../../../../shared/CustomTitle';
import CustomSnack from '../../../../shared/CustomSnack';
import CustomInput from '../../../../shared/CustomInput';
import CustomDropdown from '../../../../shared/CustomDropdown';
import ValidationMessage from '../../../../shared/ValidationMessage';
import CustomDoubleButton from '../../../../shared/CustomDoubleButton';
import dateFormat from '../../../../../utils/constants/dateFormat';
import CustomDatePicker from '../../../../shared/CustomDatePicker';

const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const iconConfig = {
    name: 'account',
    color:
      stepStatus === 'current'
        ? colorConstants?.white
        : stepStatus === 'finished'
        ? colorConstants?.white
        : colorConstants?.lightGray,
    size: dimensionConstants?.iconXSmall,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'account';
      break;
    }
    case 1: {
      iconConfig.name = 'briefcase-variant';
      break;
    }
    case 2: {
      iconConfig.name = 'bank';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

const indicatorStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 40,

  stepStrokeWidth: 2,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  separatorStrokeFinishedWidth: 2,

  labelSize: fontConstants?.small,
  labelColor: colorConstants?.gray,
  currentStepLabelColor: colorConstants?.gray,

  stepStrokeCurrentColor: colorConstants?.primary,
  stepIndicatorCurrentColor: colorConstants?.primary,

  separatorFinishedColor: colorConstants?.primary,
  separatorUnFinishedColor: colorConstants?.xlightGray,

  stepStrokeFinishedColor: colorConstants?.primary,
  stepStrokeUnFinishedColor: colorConstants?.xlightGray,

  stepIndicatorFinishedColor: colorConstants?.primary,
  stepIndicatorUnFinishedColor: colorConstants?.xlightGray,

  stepIndicatorLabelFinishedColor: colorConstants?.primary,
  stepIndicatorLabelUnFinishedColor: colorConstants?.xlightGray,
};

const SahulatSarmayakari = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSnack, setErrorSnack] = useState('');
  const [formError, setFormError] = useState(null);
  const [showModalDOB, setShowModalDOB] = useState(false);

  const navigation = useNavigation();
  // const signupMutation = useSignUp();

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
      txtName: '',
      txtRegEmail: '',
      txtCNIC: '',
      txtCNICIssueDate: '',
      ddlGender: '',
      txtCNICExpiryDate: '',
      txtLoginID: '',
      txtDOB: '',
      ddlOccupation: '',
      ddlSourceOfIncome: '',
      txtSpouse: '',
      txtRegMobileNum: '',
      txtAddress: '',
      ddlCity: '',
      ddlCountry: '',
      txtNationality: '',
      txtBankAccountNum: '',
      ddlBank: '',
      txtIBAN_Number: '',
      ddlAdvisor: '',
      txtKnow: '',
      // FileUpload1: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    clearErrors();
    setFormError(null);

    const mutationArgs = {
      data,
      onSuccessCb,
      onErrorCb,
    };
    // signupMutation.mutate(mutationArgs);
  };

  const onSuccessCb = async (data: any) => {
    try {
      setIsLoading(false);
      setErrorSnack('');
      // navigation.replace(theme?.strings?.otpScreen);
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

  const [gender, setGender] = useState('');
  const genderList = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
  ];
  const [occupation, setOccupation] = useState('');
  const occupationList = [
    {value: 'INHERITAED', label: 'INHERITAED'},
    {value: 'Public Sector Service', label: 'Public Sector Service'},
    {value: 'Other', label: 'Other'},
    {value: 'Pvt. Sector Servic', label: 'Pvt. Sector Servic'},
    {value: 'SALARY', label: 'SALARY'},
    {value: 'REMMITANCE', label: 'REMMITANCE'},
    {value: 'Govt. Service', label: 'Govt. Service'},
    {value: 'RETIRED', label: 'RETIRED'},
    {value: 'SELF-OWNED BUSINESS', label: 'SELF-OWNED BUSINESS'},
    {value: 'BUSINESS', label: 'BUSINESS'},
    {value: 'PENSION', label: 'PENSION'},
    {value: 'STOCK INVESTMENTS', label: 'STOCK INVESTMENTS'},
    {value: 'SAVINGS', label: 'SAVINGS'},
    {value: 'House Wife', label: 'House Wife'},
    {value: 'Lawyer', label: 'Lawyer'},
  ];
  const [sourceOfIncome, setSourceOfIncome] = useState('');
  const sourceOfIncomeList = [
    {value: 'RETIRED', label: 'RETIRED'},
    {value: 'Private Service', label: 'Private Service'},
    {value: 'Housewife', label: 'Housewife'},
    {value: 'Business Person', label: 'Business Person'},
    {value: 'Saving', label: 'Saving'},
    {value: 'Others', label: 'Others'},
    {value: 'Govt. Employees', label: 'Govt. Employees'},
    {value: 'Professional', label: 'Professional'},
    {value: 'Salary Person', label: 'Salary Person'},
  ];
  const [city, setCity] = useState('');
  const cityList = [
    {value: 1, label: 'Sadnoti'},
    {value: 2, label: 'Gujranwala'},
    {value: 3, label: 'Jalalpur'},
    {value: 4, label: 'Lahore'},
    {value: 5, label: 'Gujrat'},
    {value: 6, label: 'Mildlands'},
    {value: 7, label: 'Abbottabad'},
    {value: 8, label: 'Muzaffarabad'},
    {value: 9, label: 'Naushero Feroze'},
    {value: 10, label: 'TARBELA'},
    {value: 11, label: 'Kuwait'},
    {value: 12, label: 'Chitral'},
    {value: 13, label: 'Sahiwal'},
    {value: 14, label: 'MANSHERA'},
    {value: 15, label: 'Tulamba'},
    {value: 16, label: 'Quetta'},
    {value: 17, label: 'Sheikhupura'},
    {value: 18, label: 'Rajan Pur'},
    {value: 19, label: 'Chakwal'},
    {value: 20, label: 'Gazorabad'},
    {value: 21, label: 'Jhang'},
    {value: 22, label: 'Laki Marwat'},
    {value: 23, label: 'Sialkot'},
    {value: 25, label: 'Taunsa Sharif'},
    {value: 26, label: 'Dera Ismail Khan'},
    {value: 27, label: 'Mirpur'},
    {value: 28, label: 'Tando Alah Yar'},
    {value: 29, label: 'Mianwali'},
    {value: 30, label: 'Sanghar'},
    {value: 31, label: 'Okara'},
    {value: 32, label: 'Kohat'},
    {value: 33, label: 'Bahawalpur'},
    {value: 34, label: 'Multan'},
    {value: 35, label: 'Muzaffar Garh'},
    {value: 36, label: 'Mardan'},
    {value: 37, label: 'Tando Muhammad Khan'},
    {value: 38, label: 'Thatta'},
    {value: 39, label: 'Sukkur'},
    {value: 40, label: 'TANK'},
    {value: 41, label: 'Rawalpindi'},
    {value: 42, label: 'Haripur'},
    {value: 43, label: 'Swabi'},
    {value: 44, label: 'Padidan'},
    {value: 46, label: 'Islamabad'},
    {value: 47, label: 'Karachi'},
    {value: 48, label: 'Textila'},
    {value: 49, label: 'Swat'},
    {value: 50, label: 'Jhelum'},
    {value: 51, label: 'VEHARI'},
    {value: 52, label: 'Azad Kashmir'},
    {value: 53, label: 'KHUSHAB'},
    {value: 54, label: 'ABDUL HAKIM'},
    {value: 55, label: 'Hyderabad'},
    {value: 56, label: 'Gilgit'},
    {value: 57, label: 'Wah Cantt'},
    {value: 58, label: 'KOTLI'},
    {value: 59, label: 'NAROWAL'},
    {value: 60, label: 'Faisalabad'},
    {value: 61, label: 'Khanewal'},
    {value: 62, label: 'Abbottbad'},
    {value: 63, label: 'Badin'},
    {value: 64, label: 'Nowshera'},
    {value: 65, label: 'Sargodha'},
    {value: 66, label: 'Peshawar'},
    {value: 67, label: 'Taxila'},
    {value: 68, label: 'Chaklala'},
    {value: 69, label: 'Rahimyarkhan'},
    {value: 70, label: 'Larkana'},
    {value: 71, label: 'Khar Bajaur'},
    {value: 72, label: 'Mandi Bahauddin'},
    {value: 73, label: 'Gujar Khan'},
    {value: 74, label: 'ZHOB'},
    {value: 75, label: 'Kasur'},
    {value: 76, label: 'Dera Ghazi Khan'},
    {value: 77, label: 'Attock'},
    {value: 78, label: 'Lodhran'},
    {value: 79, label: 'Karachi'},
    {value: 80, label: 'Hyderabad'},
    {value: 81, label: 'Islamabad'},
    {value: 82, label: 'Lahore'},
    {value: 83, label: 'Multan'},
    {value: 84, label: 'Gujranwala'},
    {value: 85, label: 'Faisalabad'},
    {value: 86, label: 'Bahawalpur'},
    {value: 87, label: 'Rawalpindi'},
    {value: 88, label: 'Sargodha'},
    {value: 89, label: 'Sialkot'},
    {value: 90, label: 'Sukkur'},
    {value: 91, label: 'Nawabshah'},
    {value: 92, label: 'Peshawar'},
    {value: 93, label: 'Mardan'},
    {value: 94, label: 'Mingora'},
    {value: 95, label: 'Kohat'},
    {value: 96, label: 'Quetta'},
    {value: 97, label: 'Turbat'},
    {value: 98, label: 'Khuzdar'},
    {value: 99, label: 'Hub'},
    {value: 100, label: 'Muzaffarabad'},
    {value: 101, label: 'Mirpur'},
    {value: 102, label: 'Rawalakot'},
    {value: 103, label: 'Kel'},
    {value: 104, label: 'Sharda'},
    {value: 105, label: 'Kotli'},
    {value: 106, label: 'Keran'},
    {value: 107, label: 'Kasur'},
    {value: 108, label: 'MIANCHANU'},
    {value: 109, label: 'Gujrat'},
    {value: 110, label: 'Tunsa Sharif'},
    {value: 111, label: 'Sahiwal'},
    {value: 112, label: 'Abbottabad'},
    {value: 113, label: 'Gujjar Khan'},
    {value: 114, label: 'Chakwal'},
    {value: 115, label: 'Hassanabdal'},
    {value: 116, label: 'Pano Aqil'},
    {value: 117, label: 'Khanewal'},
    {value: 119, label: 'Jhelum'},
    {value: 120, label: 'Dera Ghazi Khan'},
    {value: 121, label: 'Jacobabad'},
    {value: 122, label: 'JAMSHORO'},
    {value: 123, label: 'Khushab'},
  ];
  const [country, setCountry] = useState('');
  const countryList = [{value: 2, label: 'Pakistan'}];
  const [bank, setBank] = useState('');
  const bankList = [
    {value: 1, label: 'Meezan Bank Limited'},
    {value: 2, label: 'FIRST WOMEN BANK'},
    {value: 3, label: 'AL BARAKA ISLAMIC BANK'},
    {value: 4, label: 'MCB ISLAMIC BANKING'},
    {value: 5, label: 'Bank Al Habib Limited'},
    {value: 6, label: 'Saudi Pak Commercial Bank Limited'},
    {value: 7, label: 'Standard Chartered Bank Pakistan Limited-SADIQ'},
    {value: 8, label: 'Bank Alfalah Limited'},
    {value: 9, label: 'BARCLAYS BANK Pakistan Limited'},
    {value: 10, label: 'ABN-AMRO Bank Limited'},
    {value: 11, label: 'Summit Bank Limited'},
    {value: 12, label: 'NRSPMFBL'},
    {value: 13, label: 'BANK ISLAMI PAKISTAN LIMITED'},
    {value: 14, label: 'Habib Metropolitan Bank Limited'},
    {value: 15, label: 'Faysal Bank Limited'},
    {value: 16, label: 'Askari Bank Limited'},
    {value: 17, label: 'NATIONAL BANK OF PAKISTAN'},
    {value: 18, label: 'SILK BANK LIMITED'},
    {value: 19, label: 'ZARAI TARAQIATI BANK LIMITED'},
    {value: 20, label: 'Prime Commercial Bank Limited'},
    {value: 21, label: 'United Bank Limited'},
    {value: 22, label: 'NIB Bank Limited'},
    {value: 23, label: 'MyBank Limited'},
    {value: 24, label: 'AMERICAN EXPRESS BANK LIMITED'},
    {value: 25, label: 'Habib Bank Limited'},
    {value: 26, label: 'UNION BANK '},
    {value: 27, label: 'Standard Chartered Bank Pakistan Limited'},
    {value: 28, label: 'SBL'},
    {value: 29, label: 'NA'},
    {value: 30, label: 'KASB Bank Limited'},
    {value: 31, label: 'City Bank'},
    {value: 32, label: 'Samba Bank Limited'},
    {value: 33, label: 'HSBC'},
    {value: 34, label: 'Burj Bank Limited'},
    {value: 35, label: 'Allied Bank Limited'},
    {value: 36, label: 'PICIC Commercial Bank Limited'},
    {value: 37, label: 'FINCA Microfinance Bank Ltd'},
    {value: 38, label: 'The Bank of Punjab'},
    {value: 39, label: 'ATLAS BANK LTD.'},
    {value: 40, label: 'ROYAL BANK OF SCOTLAND'},
    {value: 41, label: 'THE BANK OF KHYBER'},
    {value: 42, label: 'TAMEER MICRO FINANCE BANK LIMITED'},
    {value: 43, label: 'CITIB'},
    {value: 44, label: 'Crescent Commercial Bank Limited'},
    {value: 45, label: 'JS Bank Limited'},
    {value: 46, label: 'Dubai Islamic Bank Pakistan Limited'},
    {value: 47, label: 'Soneri Bank Limited'},
    {value: 48, label: 'SME Bank Limited'},
    {value: 49, label: 'MCB Bank Limited'},
    {value: 50, label: 'TETB'},
    {value: 51, label: 'kHUSHALI BANK LIMITED'},
    {value: 52, label: 'THE FIRST MICROFINANCE BANK LIMITED'},
    {value: 53, label: 'SINDH BANK LIMITED'},
    {value: 54, label: 'ZARAI TARAQIATI BANK LIMITED (ISLAMIC BANKING)'},
    {value: 55, label: 'U MICROFINANCE BANK LIMITED'},
    {value: 56, label: 'HABIB BANK LIMITED (ISLAMIC BANKING)'},
    {value: 57, label: 'SUMMIT BANK LIMITED (ISLAMIC BANKING)'},
  ];
  const [advisor, setAdvisor] = useState('');
  const advisorList = [
    {
      value: '082f73d2-1205-485a-9074-ade67173df2d',
      label: 'BMA Capital Limited',
    },
    {value: '0d3d2157-544b-4eef-8149-c19764fbcf8d', label: 'ZAIN RAZA HAIDER'},
    {value: '0dad7785-fea0-4a4c-a85c-a05b8d2785ea', label: 'MEHRAN ELAHI'},
    {value: '0f382448-cf36-4fde-a87e-6e2abacf7425', label: 'Ihsan Razzaq'},
    {value: '126f5100-d193-476a-9d1f-a807a6d2b1d3', label: 'Yasmeen Rizvi'},
    {value: '14376b5a-a2c1-4237-a3c5-c064045b6776', label: 'SADAF KAZMI'},
    {value: '19d560bd-df4d-4e47-99a9-ba1913f89ad2', label: 'Waqar Ahmed'},
    {
      value: '1ec8b2ee-8436-420f-bfea-77bd7bf397b3',
      label: 'Metro Securities Pvt Limited',
    },
    {value: '2da09289-ddaf-487e-ad23-f5f4c41933a4', label: 'Sohaib Ali'},
    {
      value: '57b621da-5678-417d-bcd5-05147120a1f1',
      label: 'Chaudhry Muhammad Haris',
    },
    {value: '583c7a4a-8f15-4ef5-9c38-c2b162e0c9b7', label: 'Invest Link'},
    {value: '58b6ed0f-0502-4bf9-a131-7b9e54b7eb4f', label: 'FAISAL RAZA'},
    {value: '61469b7a-92b6-42b4-b9e4-e03d7b1bbc24', label: 'Fund Shop'},
    {
      value: '61bd052b-5ede-4c27-898c-1ee68ba9238c',
      label: 'Pak Oman Asset Management Company Limited',
    },
    {
      value: '61da7fca-2453-4c4d-8075-32271760eb87',
      label: 'MUHAMMAD TAHIR USMAN',
    },
    {value: '67102ab0-5940-4af3-9b3b-ac53472d4c04', label: 'Sumaira Shokat'},
    {value: '6d004681-7139-45a7-8d79-a49b27176754', label: 'MUHAMMAD USMAN'},
    {
      value: '6d4aa1c5-78e0-43f2-aa56-2a9bc125af75',
      label: 'SHAHAB UDDIN GHIAS',
    },
    {
      value: '737b55c3-aefe-4afe-8d9e-501a0ee265fa',
      label: 'Faiza Rasheed Awan',
    },
    {value: '73f96294-ecad-4ebf-a612-acd57a17828e', label: 'Junaid Khan'},
    {
      value: '764cf404-76a6-467a-9145-a0eacfb7008e',
      label: 'Muhammad Faraz Khan',
    },
    {value: '8644ecd4-f592-4a03-9bb2-05f655b75011', label: 'Head Office'},
    {value: '88a1d82b-b44c-4482-a13f-c0f98ec165ca', label: 'ZOHRA BATOOL'},
    {
      value: '9485edc8-e5af-4ce3-8807-57b85cf136b4',
      label: 'Waqar Shahzad Raza',
    },
    {value: '9bffd198-b80b-40c3-aa5c-f6dfb5807d2c', label: 'Rizwan Rehmat'},
    {value: '9defda91-7435-4356-abc8-96b7c6f51fbf', label: 'Arsalan Mallick'},
    {value: '9fd62ddc-1443-4ec5-b379-f0b06221a474', label: 'Faisal Huq'},
    {value: 'a1cb5e30-4a85-4dd6-922e-7e34a3aa9b32', label: 'Zohaib Hassan'},
    {value: 'a31459d5-06eb-4d13-b453-fc1d9aa9c43e', label: 'Syed Mounis Ahmed'},
    {value: 'b2b69f32-a9cd-4285-8ffa-95d93568681c', label: 'FAHIM ULLAH'},
    {
      value: 'b39251ec-1e02-463b-af7d-5882e7368bb8',
      label: 'SYED SAJJAD HAIDER ABIDI',
    },
    {value: 'c215fb99-29c4-4883-a59d-3673f4271e75', label: 'SOBIA ZAFAR'},
    {value: 'ca3886f2-e77a-4243-9083-0e6708e01b1a', label: 'Investomate'},
    {value: 'd4b50b3d-9e13-4d42-a67a-02a43380c972', label: 'MUHAMMAD ASAD'},
    {value: 'd7647e41-f193-42dd-975c-4579cf84664a', label: 'SHAHZAD ALI'},
    {value: 'e6d50562-1844-470c-8791-66075cb5adc4', label: 'MANSOOR IQBAL'},
    {value: 'f0aeb41e-fe88-4f78-8770-7938d86ee259', label: 'ASIF AWAN'},
    {value: 'f7fb0dfb-89a5-4396-a136-b7ebe2cd7519', label: 'Mohsin Raza'},
    {
      value: 'fc7ee932-b683-4595-b8d5-78a0fd45e3f7',
      label: 'MUHAMMAD IRFAN KHAWAJA',
    },
    {value: 'fdbea651-8718-4dd6-a7f1-65cd98ccc29a', label: 'Zia ul Hassan'},
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Skeleton
        title={languageTxt?.reactStackKeys?.auth?.register?.sahulatSarmayakari}
        isLoading={isLoading}
        isBottomNav={true}>
        <>
          <CustomTitle
            title={languageTxt?.sahulatSarmayakariAccountCap}
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
              title={languageTxt?.sahulatSarmayakariAccountInfo}
              fontSize={fontConstants?.middle}
              extraStyles={{
                textAlign: 'center',
              }}
            />
          </View>

          <StepIndicator
            stepCount={3}
            customStyles={indicatorStyles}
            currentPosition={currentPage}
            onPress={setCurrentPage}
            renderStepIndicator={params => (
              <MaterialCommunityIcons {...getStepIndicatorIconConfig(params)} />
            )}
            labels={['Personal', 'Professional', 'Account']}
          />

          {formError && (
            <View style={styles?.formValidation}>
              <ValidationMessage children={formError} />
            </View>
          )}

          <View style={styles?.loginContainer}>
            {currentPage == 0 ? (
              <>
                {/* txtNamePerCNIC */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtName ? true : false}
                      errorMsg={errors.txtName ? errors.txtName.message : ''}
                      placeHolder={languageTxt?.txtNamePerCNIC}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtName"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtNamePerCNICError,
                    },
                  }}
                />
                {/* txtRegEmail */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtRegEmail ? true : false}
                      errorMsg={
                        errors.txtRegEmail ? errors.txtRegEmail?.message : ''
                      }
                      placeHolder={languageTxt?.txtRegEmail}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtRegEmail"
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
                {/* txtCNIC */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtCNIC ? true : false}
                      errorMsg={errors.txtCNIC ? errors.txtCNIC?.message : ''}
                      placeHolder={languageTxt?.txtCNIC}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtCNIC"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtCNICError,
                    },
                  }}
                />
                {/* txtCNICIssueDate */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtCNICIssueDate ? true : false}
                      errorMsg={
                        errors.txtCNICIssueDate
                          ? errors.txtCNICIssueDate?.message
                          : ''
                      }
                      placeHolder={languageTxt?.txtCNICIssueDate}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtCNICIssueDate"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtCNICIssueDateError,
                    },
                  }}
                />
                {/* ddlGender */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={gender}
                      placeHolder={languageTxt?.ddlGender}
                      dropDownList={genderList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setGender(item?.label);
                      }}
                      errorMsg={
                        errors?.ddlGender ? errors?.ddlGender.message : ''
                      }
                      error={errors?.ddlGender ? true : false}
                    />
                  )}
                  name="ddlGender"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlGenderError,
                    },
                  }}
                />
                {/* txtCNICExpiryDate */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtCNICExpiryDate ? true : false}
                      errorMsg={
                        errors.txtCNICExpiryDate
                          ? errors.txtCNICExpiryDate?.message
                          : ''
                      }
                      placeHolder={languageTxt?.txtCNICExpiryDate}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtCNICExpiryDate"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtCNICExpiryDateError,
                    },
                  }}
                />
              </>
            ) : currentPage == 1 ? (
              <>
                {/* txtLoginID */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtLoginID ? true : false}
                      errorMsg={
                        errors.txtLoginID ? errors.txtLoginID?.message : ''
                      }
                      placeHolder={languageTxt?.txtUserName}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtLoginID"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtUserNameError,
                    },
                  }}
                />
                {/* txtDOB */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtDOB ? true : false}
                      errorMsg={errors.txtDOB ? errors.txtDOB?.message : ''}
                      placeHolder={languageTxt?.txtDOB}
                      autoCapitalize="none"
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
                  name="txtDOB"
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
                    getValues('txtDOB')
                      ? {
                          startDate: moment(
                            getValues('txtDOB'),
                            dateFormat.DOB_FORMAT,
                          ).format(dateFormat.CALENDAR_FORMAT),
                          endDate: moment(
                            getValues('txtDOB'),
                            dateFormat.DOB_FORMAT,
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
                    ).format(dateFormat.DOB_FORMAT);
                    setValue('txtDOB', dateDOB);
                  }}
                />
                {/* ddlOccupation */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={occupation}
                      placeHolder={languageTxt?.ddlOccupation}
                      dropDownList={occupationList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setOccupation(item?.label);
                      }}
                      errorMsg={
                        errors?.ddlOccupation
                          ? errors?.ddlOccupation.message
                          : ''
                      }
                      error={errors?.ddlOccupation ? true : false}
                    />
                  )}
                  name="ddlOccupation"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlOccupationError,
                    },
                  }}
                />
                {/* ddlSourceOfIncome */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={sourceOfIncome}
                      placeHolder={languageTxt?.ddlSourceOfIncome}
                      dropDownList={sourceOfIncomeList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setSourceOfIncome(item?.label);
                      }}
                      errorMsg={
                        errors?.ddlSourceOfIncome
                          ? errors?.ddlSourceOfIncome.message
                          : ''
                      }
                      error={errors?.ddlSourceOfIncome ? true : false}
                    />
                  )}
                  name="ddlSourceOfIncome"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlSourceOfIncomeError,
                    },
                  }}
                />
                {/* txtSpouse */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtSpouse ? true : false}
                      errorMsg={
                        errors.txtSpouse ? errors.txtSpouse?.message : ''
                      }
                      placeHolder={languageTxt?.txtSpouse}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtSpouse"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtSpouseError,
                    },
                  }}
                />
                {/* txtRegMobileNum */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtRegMobileNum ? true : false}
                      errorMsg={
                        errors.txtRegMobileNum
                          ? errors.txtRegMobileNum?.message
                          : ''
                      }
                      placeHolder={languageTxt?.txtRegMobileNum}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtRegMobileNum"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtRegMobileNumError,
                    },
                  }}
                />
                {/* txtAddress */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtAddress ? true : false}
                      errorMsg={
                        errors.txtAddress ? errors.txtAddress?.message : ''
                      }
                      placeHolder={languageTxt?.txtAddress}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtAddress"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtAddressError,
                    },
                  }}
                />
                {/* ddlCity */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={city}
                      placeHolder={languageTxt?.ddlCity}
                      dropDownList={cityList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setCity(item?.label);
                      }}
                      errorMsg={errors?.ddlCity ? errors?.ddlCity.message : ''}
                      error={errors?.ddlCity ? true : false}
                    />
                  )}
                  name="ddlCity"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlCityError,
                    },
                  }}
                />
                {/* ddlCountry */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={country}
                      placeHolder={languageTxt?.ddlCountry}
                      dropDownList={countryList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setCountry(item?.label);
                      }}
                      errorMsg={
                        errors?.ddlCountry ? errors?.ddlCountry.message : ''
                      }
                      error={errors?.ddlCountry ? true : false}
                    />
                  )}
                  name="ddlCountry"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlCountryError,
                    },
                  }}
                />
                {/* txtNationality */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtNationality ? true : false}
                      errorMsg={
                        errors.txtNationality
                          ? errors.txtNationality?.message
                          : ''
                      }
                      placeHolder={languageTxt?.txtNationality}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtNationality"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtNationalityError,
                    },
                  }}
                />
                {/* txtBankAccountNum */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtBankAccountNum ? true : false}
                      errorMsg={
                        errors.txtBankAccountNum
                          ? errors.txtBankAccountNum?.message
                          : ''
                      }
                      placeHolder={languageTxt?.txtBankAccountNum}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtBankAccountNum"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtBankAccountNumError,
                    },
                  }}
                />
              </>
            ) : (
              <>
                {/* ddlBank */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={bank}
                      placeHolder={languageTxt?.ddlBank}
                      dropDownList={bankList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setBank(item?.label);
                      }}
                      errorMsg={errors?.ddlBank ? errors?.ddlBank.message : ''}
                      error={errors?.ddlBank ? true : false}
                    />
                  )}
                  name="ddlBank"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlBankError,
                    },
                  }}
                />
                {/* txtIBAN_Number */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtIBAN_Number ? true : false}
                      errorMsg={
                        errors.txtIBAN_Number
                          ? errors.txtIBAN_Number?.message
                          : ''
                      }
                      placeHolder={languageTxt?.txtIBAN_Number}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtIBAN_Number"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtIBAN_NumberError,
                    },
                  }}
                />
                {/* ddlAdvisor */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomDropdown
                      value={advisor}
                      placeHolder={languageTxt?.ddlAdvisor}
                      dropDownList={advisorList}
                      handleChange={onChange}
                      handleChangeObject={(item: any) => {
                        setAdvisor(item?.label);
                      }}
                      errorMsg={
                        errors?.ddlAdvisor ? errors?.ddlAdvisor.message : ''
                      }
                      error={errors?.ddlAdvisor ? true : false}
                    />
                  )}
                  name="ddlAdvisor"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.ddlAdvisorError,
                    },
                  }}
                />
                {/* txtKnow */}
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <CustomInput
                      error={errors.txtKnow ? true : false}
                      errorMsg={errors.txtKnow ? errors.txtKnow?.message : ''}
                      placeHolder={languageTxt?.txtKnow}
                      autoCapitalize="none"
                      onBlur={onBlur}
                      value={value}
                      handleChange={(value: String) => onChange(value)}
                    />
                  )}
                  name="txtKnow"
                  rules={{
                    required: {
                      value: true,
                      message: languageTxt?.txtKnowError,
                    },
                  }}
                />
              </>
            )}

            <CustomDoubleButton
              primaryButtonText={
                currentPage == 2
                  ? languageTxt?.onlineServicesRequest
                  : languageTxt?.next
              }
              secondaryButtonText={languageTxt?.clear}
              // isDisabledPrimary={signupMutation?.isLoading}
              handlePrimaryOnPress={
                currentPage == 2
                  ? handleSubmit(onSubmit)
                  : () => {
                      setCurrentPage(currentPage + 1);
                    }
              }
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

export default SahulatSarmayakari;
