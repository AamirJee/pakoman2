// import {MOBILE_INTEGRATION_API_KEY} from '@env';
import {mobile_integration_instance} from '../../config/http';
import {
  getAccCode,
  getUserName,
  storeAccCode,
  storeUserName,
} from '../../config/asyncStorage/acc_code';
import {getDashboardUserInfoApi} from '../m_transactions/api';

const MOBILE_INTEGRATION_API_KEY = '8b5844dc-d2bd-4d37-9227-51b334a936cc';
const loginApi = async (username: string, password: string) => {
  storeUserName(username);
  var newPassword = password.split('');

  let passwordElement = '';
  newPassword.forEach((element: string, key: number) => {
    passwordElement = `${passwordElement} <char>${password.charCodeAt(
      key,
    )}</char>`;
  });
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/SignIn',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <SignIn xmlns="http://tempuri.org/">\
                <Username>' +
      username +
      '</Username>\
                <pwd>' +
      passwordElement +
      '</pwd>\
                <indices><int>0</int></indices>\
                <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
              </SignIn>\
            </soap:Body>\
          </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignInResponse']?.[0]?.[
          'SignInResult'
        ]?.[0];

      let message = '';
      let success = false;
      if (resultCode == '-1') {
        message = 'Invalid Key';
      } else if (resultCode == '0') {
        message = 'Invaild Username or Password';
      } else if (resultCode == '1') {
        success = true;
        message = 'Successful Login';
      } else if (resultCode == '2') {
        message = 'Inactive User';
      } else if (resultCode == '3') {
        success = true;
        message = 'Change Password';
      } else if (resultCode == '4') {
        message =
          'Account locked for making too many unsuccessful login attempts';
      } else if (resultCode == '5') {
        message = 'Password expired';
      } else if (resultCode == '7') {
        message = 'CNIC expired';
      } else {
        message = 'Request Failed.';
      }
      let accCode = '';
      let userProfile = {};

      if (success) {
        const getAccCode: any = await getMappedAccountApi(username);
        if (getAccCode?.success) {
          accCode = getAccCode?.accCode;
          const data: any = await getDashboardUserInfoApi(getAccCode?.accCode);
          if (data.success) {
            userProfile = data?.data;
          }
        }
      }

      return {
        code: resultCode,
        accCode: accCode,
        userProfile: userProfile,
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const signUpApi = async (
  title: string,
  email: string,
  userID: string,
  cellNumber: string,
  accCode: string,
  cnic: string,
  dateofBirth: string,
  accountType: string,
) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/SignUp',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
          <soap:Body>\
            <SignUp xmlns="http://tempuri.org/">\
                <accCode>' +
      accCode +
      '</accCode>\
                <UserID>' +
      userID +
      '</UserID>\
                <Title>' +
      title +
      '</Title>\
                <AccountType>' +
      accountType +
      '</AccountType>\
                <CNIC>' +
      cnic +
      '</CNIC>\
                <Email>' +
      email +
      '</Email>\
                <CellNumber>' +
      cellNumber +
      '</CellNumber>\
                <DateofBirth>' +
      dateofBirth +
      '</DateofBirth>\
                <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
                <Message>CheckMobileSide</Message>\
            </SignUp>\
          </soap:Body>\
        </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignUpResponse']?.[0]?.[
          'SignUpResult'
        ]?.[0]?.['diffgr:diffgram']?.[0]?.['DocumentElement']?.[0]?.[
          'dtSignUp'
        ]?.[0]?.['Return_Code']?.[0];

      let success = false;
      let message = '';
      if (resultCode == '-10') {
        message = 'Invalid Registration Number.';
      } else if (resultCode == '0') {
        success = true;
        message = 'Request Sent Successfull.';
      } else if (resultCode == '2') {
        message = 'You have already submitted a request which is under process';
      } else if (resultCode == '4') {
        message =
          'Account Title does not match with the detail provided to the AMC.';
      } else if (resultCode == '5') {
        message =
          'Email Address does not match with the detail provided to the AMC.';
      } else if (resultCode == '6') {
        message =
          'Mobile Number does not match with the detail provided to the AMC.';
      } else if (resultCode == '8') {
        message =
          'CNIC Number does not match with the detail provided to the AMC.';
      } else if (resultCode == '9') {
        message = 'DOB does not match with the detail provided to the AMC';
      } else if (resultCode == '50') {
        message = 'Object reference not set to an instance of an object.';
      } else {
        message = 'Request Failed.';
      }

      return {
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const signUpCorporateApi = async (
  userID: string,
  accCode: string,
  title: string,
  accountType: string,
  ntn: string,
  compRegNo: string,
  authPerName: string,
  authPerCNIC: string,
  email: string,
  regContact: string,
  regAddress: string,
) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/SignUp_Corporate',
    },
    data:
      '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
        <soap:Body>\
          <SignUp_Corporate xmlns="http://tempuri.org/">\
            <accCode>' +
      accCode +
      '</accCode>\
            <UserID>' +
      userID +
      '</UserID>\
            <Title>' +
      title +
      '</Title>\
            <AccountType>' +
      accountType +
      '</AccountType>\
            <NTN>' +
      ntn +
      '</NTN>\
            <CompRegNo>' +
      compRegNo +
      '</CompRegNo>\
            <AuthPerName>' +
      authPerName +
      '</AuthPerName>\
            <AuthPerCNIC>' +
      authPerCNIC +
      '</AuthPerCNIC>\
            <Email>' +
      email +
      '</Email>\
            <regContact>' +
      regContact +
      '</regContact>\
            <regAddress>' +
      regAddress +
      '</regAddress>\
            <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
          </SignUp_Corporate>\
        </soap:Body>\
      </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'SignUp_CorporateResponse'
        ]?.[0]?.['SignUp_CorporateResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'DocumentElement'
        ]?.[0]?.['dtSignUp']?.[0]?.['Return_Code']?.[0];

      let success = false;
      let message = '';

      if (resultCode == '-10') {
        message = 'Account Code Does not exist.';
      } else if (resultCode == '-1') {
        message = 'Invalid Key';
      } else if (resultCode == '0') {
        success = true;
        message = 'Request Sent Successfull.';
      } else if (resultCode == '1') {
        message = 'User is Already Created with this Registration No';
      } else if (resultCode == '2') {
        message =
          'You have already submitted a request which is under process.';
      } else if (resultCode == '3') {
        message = 'Account Already Exist - UOS USER';
      } else if (resultCode == '4') {
        message =
          'Account Title does not match with the detail provided to the AMC.';
      } else if (resultCode == '5') {
        message =
          'Email Address does not match with the detail provided to the AMC.';
      } else if (resultCode == '6') {
        message =
          'Mobile Number does not match with the detail provided to the AMC.';
      } else if (resultCode == '7') {
        message =
          'Account Code does not match with the detail provided to the AMC.';
      } else if (resultCode == '8') {
        message =
          'Auth Person CNIC does not match with the detail provided to the AMC.';
      } else if (resultCode == '81') {
        message = 'NTN does not match with the detail provided to the AMC.';
      } else if (resultCode == '82') {
        message =
          'Comp Reg No. does not match with the detail provided to the AMC.';
      } else if (resultCode == '83') {
        message =
          'Auth Person Name does not match with the detail provided to the AMC.';
      } else if (resultCode == '404') {
        message = 'Data not inserted in DB';
      } else if (resultCode == '405') {
        message = 'Invalid UserName';
      } else if (resultCode == '50') {
        message = 'For unknown errors (Exceptions)';
      } else {
        message = 'Request Failed.';
      }

      return {
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getMappedAccountApi = async (username: string) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/GetMappedAccount',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetMappedAccount xmlns="http://tempuri.org/">\
          <Username>' +
      username +
      '</Username>\
          <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
        </GetMappedAccount>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetMappedAccountResponse'
        ]?.[0]?.['GetMappedAccountResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'DocumentElement'
        ]?.[0]?.['MAPPED_ACCOUNT'];

      let accCode = '';
      newData &&
        newData.map(async (item: any) => {
          accCode = item?.ACC_CODE?.[0];
          storeAccCode(item?.ACC_CODE?.[0]);
        });

      return {
        success: true,
        accCode: accCode,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const mapAccountApi = async (title: string, cnic: string, accCode: string) => {
  const userID = await getUserName();
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/MapAccount',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <MapAccount xmlns="http://tempuri.org/">\
          <accCode>' +
      accCode +
      '</accCode>\
          <Title>' +
      title +
      '</Title>\
          <CNIC>' +
      cnic +
      '</CNIC>\
          <UserID>' +
      userID +
      '</UserID>\
          <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
        </MapAccount>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'MapAccountResponse'
        ]?.[0]?.['MapAccountResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == -1) {
        message = 'Invalid Key';
      } else if (resultCode == 0) {
        message = 'Account not inserted';
      } else if (resultCode == 1) {
        success = true;
        message = 'Request Sent Successfull.';
      } else if (resultCode == 2) {
        message = 'Account information not matched.';
      } else if (resultCode == 3) {
        message = 'User already mapped.';
      } else if (resultCode == 4) {
        message = 'Other exception';
      } else {
        message = 'Invaild values';
      }

      return {
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const forgetUserNameApi = async (email: string, cnic: string) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/ForgetUserName',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <ForgetUserName xmlns="http://tempuri.org/">\
                <email>' +
      email +
      '</email>\
                <CNIC>' +
      cnic +
      '</CNIC>\
                <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
              </ForgetUserName>\
            </soap:Body>\
          </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'ForgetUserNameResponse'
        ]?.[0]?.['ForgetUserNameResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '-1') {
        message = 'Invalid Key';
      } else if (resultCode == '1') {
        success = true;
        message = 'Email sent to registered email.';
      } else if (resultCode == '0') {
        message = 'Other exception';
      } else {
        message = 'Request Failed.';
      }

      return {
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const forgetPasswordApi = async (userName: string, cnic: string) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/ForgetPassword',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <ForgetPassword xmlns="http://tempuri.org/">\
                <userName>' +
      userName +
      '</userName>\
                <CNIC>' +
      cnic +
      '</CNIC>\
                <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
              </ForgetPassword>\
            </soap:Body>\
          </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'ForgetPasswordResponse'
        ]?.[0]?.['ForgetPasswordResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '-1') {
        message = 'Invalid Key';
      } else if (resultCode == '1') {
        success = true;
        message = 'Email sent to registered email.';
      } else if (resultCode == '0') {
        message = 'Other exception';
      } else {
        message = 'Request Failed.';
      }

      return {
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const changePasswordApi = async (oldPassword: string, newPassword: string) => {
  const userName = await getUserName();
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/ChangePassword',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <ChangePassword xmlns="http://tempuri.org/">\
                <UserName>' +
      userName +
      '</UserName>\
                <NewPassword>' +
      newPassword +
      '</NewPassword>\
        <OldPassword>' +
      oldPassword +
      '</OldPassword>\
                <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
              </ChangePassword>\
            </soap:Body>\
          </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'ChangePasswordResponse'
        ]?.[0]?.['ChangePasswordResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '-1') {
        message = 'Invalid Key';
      } else if (resultCode == '1') {
        success = true;
        message = 'Password successfully change.';
      } else if (resultCode == '2') {
        message = 'User not found';
      } else if (resultCode == '3') {
        message = 'Incorrect User Name/Old Password';
      } else if (resultCode == '4') {
        message = 'New password (not as per policy)';
      } else if (resultCode == '5') {
        message = 'You can not repeat your last seven password';
      } else if (resultCode == '6') {
        message = 'Exception (unknown error)';
      } else {
        message = 'Request Failed.';
      }

      return {
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

export {
  signUpApi,
  loginApi,
  getMappedAccountApi,
  mapAccountApi,
  forgetUserNameApi,
  forgetPasswordApi,
  changePasswordApi,
  signUpCorporateApi,
};
