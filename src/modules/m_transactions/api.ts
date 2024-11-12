// import {M_TRANSACTIONS_API_KEY} from '@env';

import {mTransactions_instance} from '../../config/http';
import {languageTxt} from '../../utils/constants/languageTxt';
import {
  getService,
  storeService,
} from '../../config/asyncStorage/asynDataStore';
import {getAccCode, getUserName} from '../../config/asyncStorage/acc_code';

import {
  transformDataInfo,
  transformChartInfo,
  transformRedemptionInfo,
  transformConvertionsOfFunds,
  transformPendingFunds,
  transformUOSAlert,
  transformAllowedTransactionTypes,
  transformInvestmentInfo,
  transformInvestmentPendingFunds,
  transformGetServiceFee,
  transformGetAllMgmtCompanies,
} from './transformer';

const M_TRANSACTIONS_API_KEY = '5a64df56-rt45-yu41-8974-5f64ad56f4a5';

const getPageApi = async () => {
  //console.log('getPageApi')
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetPages',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetPages xmlns="http://www.sidathyder.com.pk/">\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
        </GetPages>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      return {
        success: true,
        data: '',
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getDashboardUserInfoApi = async (accCode: any) => {
  ///console.log('getDashboardUserInfoApi', accCode)
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/DashboardUserInfo',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <DashboardUserInfo xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
        </DashboardUserInfo>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'DashboardUserInfoResponse'
        ]?.[0]?.['DashboardUserInfoResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['Table']?.[0];
        
      newData = transformDataInfo(newData);
      storeService(languageTxt?.reactAsyncStorageKeys?.userInfo, newData);

      return {
        success: true,
        data: newData,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getDashboardChartInfoApi = async () => {
  const accCode = await getAccCode();
 
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/DashboardChartInfo',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <DashboardChartInfo xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
        </DashboardChartInfo>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'DashboardChartInfoResponse'
        ]?.[0]?.['DashboardChartInfoResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['Table'];

      newData = transformChartInfo(newData);
      return {
        success: true,
        data: newData,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getGenerateAccountStatmentApi = async (
  dateFrom: string,
  dateTo: string,
) => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/Generate_AccountStatment',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <Generate_AccountStatment xmlns="http://www.sidathyder.com.pk/">\
          <_accountCode>' +
      accCode +
      '</_accountCode>\
          <_dateFrom>' +
      dateFrom +
      '</_dateFrom>\
          <_dateTo>' +
      dateTo +
      '</_dateTo>\
        </Generate_AccountStatment>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'Generate_AccountStatmentResponse'
        ]?.[0]?.['Generate_AccountStatmentResult']?.[0];
      return {
        success: true,
        data: newData,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const sendAccountStatmentEmailApi = async (
  dateFrom: string,
  dateTo: string,
) => {
  const accCode = await getAccCode();
  const userName = await getUserName();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/Send_AccountStatmentEmail',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <Send_AccountStatmentEmail xmlns="http://www.sidathyder.com.pk/">\
          <_accountCode>' +
      accCode +
      '</_accountCode>\
          <_dateFrom>' +
      dateFrom +
      '</_dateFrom>\
          <_dateTo>' +
      dateTo +
      '</_dateTo>\
      <UserName>' +
      userName +
      '</UserName>\
        </Send_AccountStatmentEmail>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'Send_AccountStatmentEmailResponse'
        ]?.[0]?.['Send_AccountStatmentEmailResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '1') {
        success = true;
        message = 'Transaction has been submitted Successfully';
      } else if (resultCode == '101') {
        message = 'Email Address does not exist';
      } else if (resultCode == '102') {
        message = 'Invalid Email Address';
      } else if (resultCode == '103') {
        message = 'NO Data Found';
      } else {
        message =
          'Transaction not submitted Successfully. Please Coordinate to Investor Services department for further detail';
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

const getRedemptionInfoApi = async () => {
  const accCode = await getAccCode();
  const IsTrxFunds = 1;
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetRedemptionInfo',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetRedemptionInfo xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      <IsTrxFunds>' +
      IsTrxFunds +
      '</IsTrxFunds>\
      </GetRedemptionInfo>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetRedemptionInfoResponse'
        ]?.[0]?.['GetRedemptionInfoResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformRedemptionInfo(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getInvestmentInfoApi = async () => {  
  const accCode = await getAccCode();
  const IsTrxFunds = 1;
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/InvestmentInfo',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <InvestmentInfo xmlns="http://www.sidathyder.com.pk/">\
          <acc_code>' +
      accCode +
      '</acc_code>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      <IsTrxFunds>' +
      IsTrxFunds +
      '</IsTrxFunds>\
      </InvestmentInfo>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'InvestmentInfoResponse'
        ]?.[0]?.['InvestmentInfoResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformInvestmentInfo(newData || []);
     // newArray = transformConvertionsOfFunds(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const saveInvestmentTransactionApi = async (
  tranDate: string,
  tranTime: string,
  fundName: string,
  fundUnitClass: string,
  fundUnitType: string,
  investAmount: string,
  investBy: string,
  comments: string, 
  amountExistFund:string, 
) => {
  const accCode = await getAccCode();
  const userID = await getUserName();
  const rebate = 1;
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/SaveInvestmentTransaction',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <SaveInvestmentTransaction xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
          <TranDate>' +
      tranDate +
      '</TranDate>\
          <TranTime>' +
      tranTime +
      '</TranTime>\
          <FundName>' +
      fundName +
      '</FundName>\
          <FundUnitClass>' +
      fundUnitClass +
      '</FundUnitClass>\
          <FundUnitType>' +
      fundUnitType +
      '</FundUnitType>\
          <InvestAmount>' +
      investAmount +
      '</InvestAmount>\
          <InvestBy>' +
      investBy +
      '</InvestBy>\
          <Username>' +
      userID +
      '</Username>\
          <Rebate>' +
      rebate +
      '</Rebate>\
          <Comments>' +
      comments +
      '</Comments>\
      <AmountExistFund>' +
      amountExistFund +
      '</AmountExistFund>\
      </SaveInvestmentTransaction>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'SaveInvestmentTransactionResponse'
        ]?.[0]?.['SaveInvestmentTransactionResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '1') {
        success = true;
        message = 'Transaction has been submitted Successfully';
      } else if (resultCode == '501') {
        message = 'Alert not subscribed by investor';
      } else if (resultCode == '503') {
        message = 'CNIC expired';
      } else if (resultCode == '701') {
        message = 'Fund data not found';
      } else if (resultCode == '702') {
        message = 'No cut off time found';
      } else if (resultCode == '703') {
        message = 'No account found';
      } else if (resultCode == '704') {
        message = 'No distributor found';
      } else if (resultCode == '705') {
        message = ' No facilitator found';
      } else if (resultCode == '706') {
        message = 'No max balance limit define';
      } else if (resultCode == '707') {
        message = 'No current balance limit define';
      } else if (resultCode == '708') {
        message = 'No investor per day limit found';
      } else if (resultCode == '709') {
        message = 'No transaction count limit found';
      } else if (resultCode == '710') {
        message = 'No Instrument Details found';
      } else if (resultCode == '711') {
        message = 'No default instrument details found';
      } else if (resultCode == '712') {
        message = 'No mapped account found';
      } else if (resultCode == '713') {
        message = 'No bank account details found';
      } else if (resultCode == '714') {
        message = 'No bank branch details found';
      } else if (resultCode == '715') {
        message = 'No product account details found';
      } else {
        message =
          'Transaction not submitted Successfully. Please Coordinate to Investor Services department for further detail';
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

const getConvertionsOfFundsInApi = async () => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/Convertions_of_Funds_In',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <Convertions_of_Funds_In xmlns="http://www.sidathyder.com.pk/">\
          <Folio>' +
      accCode +
      '</Folio>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      </Convertions_of_Funds_In>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'Convertions_of_Funds_InResponse'
        ]?.[0]?.['Convertions_of_Funds_InResult']?.[0]?.[
          'diffgr:diffgram'
        ]?.[0]?.['NewDataSet']?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformConvertionsOfFunds(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getConvertionsOfFundsOutApi = async () => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/Convertions_of_Funds_Out',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <Convertions_of_Funds_Out xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      </Convertions_of_Funds_Out>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'Convertions_of_Funds_OutResponse'
        ]?.[0]?.['Convertions_of_Funds_OutResult']?.[0]?.[
          'diffgr:diffgram'
        ]?.[0]?.['NewDataSet']?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformConvertionsOfFunds(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const saveRedemptionTransactionApi = async (
  tranDate: string,
  tranTime: string,
  fundName: string,
  fundUnitClass: string,
  fundUnitType: string,
  redeemUnits: string,
  redeemAmount: string,
  redeemBy: string,
  username: string,
  paymentType: string,
) => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/SaveRedemptionTransaction',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <SaveRedemptionTransaction xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
          <TranDate>' +
      tranDate +
      '</TranDate>\
          <TranTime>' +
      tranTime +
      '</TranTime>\
          <FundName>' +
      fundName +
      '</FundName>\
          <FundUnitClass>' +
      fundUnitClass +
      '</FundUnitClass>\
          <FundUnitType>' +
      fundUnitType +
      '</FundUnitType>\
          <RedeemUnits>' +
      redeemUnits +
      '</RedeemUnits>\
          <RedeemAmount>' +
      redeemAmount +
      '</RedeemAmount>\
          <RedeemBy>' +
      redeemBy +
      '</RedeemBy>\
          <Username>' +
      username +
      '</Username>\
          <PaymentType>' +
      paymentType +
      '</PaymentType>\
      </SaveRedemptionTransaction>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'SaveRedemptionTransactionResponse'
        ]?.[0]?.['SaveRedemptionTransactionResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '1') {
        success = true;
        message = 'Transaction has been submitted Successfully';
      } else if (resultCode == '2') {
        message = 'No Fund user profile found';
      } else if (resultCode == '3') {
        message = 'Fund not found';
      } else if (resultCode == '4') {
        message = 'Investor Account Not Found.';
      } else if (resultCode == '5') {
        message = 'No SHMA Calendar Period found';
      } else if (resultCode == '6') {
        message = 'You can only Redeem up to 75% of your Balance';
      } else if (resultCode == '7') {
        message = 'Redeem Units Are Greater than Redeemable Units';
      } else if (resultCode == '401') {
        message = 'Investor not Register as Online Investor. (Mapped Account)';
      } else if (resultCode == '404') {
        message = 'Account not Found. (Main Account)';
      } else if (resultCode == '500') {
        message = 'Alert not created';
      } else if (resultCode == '501') {
        message = 'Alert not subscribed by investor';
      } else if (resultCode == '502') {
        message = 'Alert Template not found';
      } else if (resultCode == '503') {
        message = 'CNIC Expired';
      } else if (resultCode == '710') {
        message = 'No Instrument Details found';
      } else if (resultCode == '711') {
        message = 'No Default Instrument Details found';
      } else if (resultCode == '712') {
        message = 'No mapped account found';
      } else if (resultCode == '713') {
        message = 'No Bank Account Details Found';
      } else if (resultCode == '714') {
        message = 'No Bank Branch Details Found';
      } else {
        message =
          'Transaction not submitted Successfully. Please Coordinate to Investor Services department for further detail';
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

const saveConversionTransactionApi = async (
  tranDate: string,
  tranTime: string,
  fundNameOut: string,
  fundOutUnitClass: string,
  fundOutUnitType: string,
  fundNameIn: string,
  fundInUnitClass: string,
  fundInUnitType: string,
  conversionUnits: string,
  conversionAmount: string,
  isEntire: string,
  username: string,
) => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/SaveConversionTransaction',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <SaveConversionTransaction xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
          <TranDate>' +
      tranDate +
      '</TranDate>\
          <TranTime>' +
      tranTime +
      '</TranTime>\
          <FundNameIn>' +
      fundNameIn +
      '</FundNameIn>\
          <FundInUnitClass>' +
      fundInUnitClass +
      '</FundInUnitClass>\
          <FundInUnitType>' +
      fundInUnitType +
      '</FundInUnitType>\
          <FundNameOut>' +
      fundNameOut +
      '</FundNameOut>\
          <FundOutUnitClass>' +
      fundOutUnitClass +
      '</FundOutUnitClass>\
          <FundOutUnitType>' +
      fundOutUnitType +
      '</FundOutUnitType>\
           <ConversionUnits>' +
      conversionUnits +
      '</ConversionUnits>\
           <ConversionAmount>' +
      conversionAmount +
      '</ConversionAmount>\
           <isEntire>' +
      isEntire +
      '</isEntire>\
          <Username>' +
      username +
      '</Username>\
      </SaveConversionTransaction>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'SaveConversionTransactionResponse'
        ]?.[0]?.['SaveConversionTransactionResult']?.[0];
      let message = '';
      let success = false;
      if (resultCode == '1') {
        success = true;
        message = 'Transaction has been submitted Successfully';
      } else if (resultCode == '4') {
        message = 'Account Not Found';
      } else if (resultCode == '300') {
        message = 'Fund in not found';
      } else if (resultCode == '301') {
        message = 'Fund Out not found';
      } else if (resultCode == '5') {
        message = 'No SHMA Calendar Period found';
      } else if (resultCode == '6') {
        message = 'You can only Convert out up to 75% of your Balance';
      } else if (resultCode == '7') {
        message = 'Conversion Units Are Greater than Convertable Units';
      } else if (resultCode == '200') {
        message = 'No Fund in user profile found';
      } else if (resultCode == '201') {
        message = 'No Fund Out user profile found';
      } else if (resultCode == '401') {
        message = 'Investor not register as Online Investor. (Mapped Account)';
      } else if (resultCode == '404') {
        message = 'Account not found. (Main Account)';
      } else if (resultCode == '500') {
        message = 'Alert not created';
      } else if (resultCode == '501') {
        message = 'Alert not subscribed by investor';
      } else if (resultCode == '502') {
        message = 'Alert Template not found';
      } else if (resultCode == '503') {
        message = 'CNIC Expired';
      } else {
        message =
          'Transaction not submitted Successfully. Please Coordinate to Investor Services department for further detail';
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

const getPendingInvestmentApi = async () => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetPendingInvestment',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetPendingInvestment xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      </GetPendingInvestment>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetPendingInvestmentResponse'
        ]?.[0]?.['GetPendingInvestmentResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['DataResponse'];
      let newArray: any = [];
      newArray = transformInvestmentPendingFunds(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPendingRedemptionConversion = async () => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetPendingRedemptionConversion',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetPendingRedemptionConversion xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      </GetPendingRedemptionConversion>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetPendingRedemptionConversionResponse'
        ]?.[0]?.['GetPendingRedemptionConversionResult']?.[0]?.[
          'diffgr:diffgram'
        ]?.[0]?.['NewDataSet']?.[0]?.['DataResponse'];
      let newArray: any = [];
      newArray = transformPendingFunds(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const generateTpinApi = async (
  transactionID: string,
  userID: any,
  emailAddress: string,
) => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GenerateTpin',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GenerateTpin xmlns="http://www.sidathyder.com.pk/">\
        <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
          <_transactionID>' +
      transactionID +
      '</_transactionID>\
          <_accountCode>' +
      accCode +
      '</_accountCode>\
          <_userID>' +
      userID +
      '</_userID>\
          <_emailAddress>' +
      emailAddress +
      '</_emailAddress>\
        <_expiryHour>100</_expiryHour>\
        <_regenerate>false</_regenerate>\
      </GenerateTpin>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GenerateTpinResponse'
        ]?.[0]?.['GenerateTpinResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '0') {
        success = true;
        message = 'Tpin generated and email sent';
      } else if (resultCode == '-1') {
        message = 'Invalid Access Key';
      } else if (resultCode == '10') {
        message = 'Tpin regenerated and email sent';
      } else if (resultCode == '1') {
        message = 'Neither Tpin nor email generated';
      } else if (resultCode == '2') {
        message = 'Tpin generated and email not sent';
      } else if (resultCode == '20') {
        message = 'Tpin regenerated and email not sent';
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

const verifyTpinApi = async (
  transactionID: string,
  userID: any,
  tPin: string,
) => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/VerifyTpin',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <VerifyTpin xmlns="http://www.sidathyder.com.pk/">\
        <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
          <_transactionID>' +
      transactionID +
      '</_transactionID>\
          <_accountCode>' +
      accCode +
      '</_accountCode>\
          <_userID>' +
      userID +
      '</_userID>\
          <_tPin>' +
      tPin +
      '</_tPin>\
      </VerifyTpin>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'VerifyTpinResponse'
        ]?.[0]?.['VerifyTpinResult']?.[0];

      let message = '';
      let success = false;
      if (resultCode == '0') {
        success = true;
        message = 'You Otp has been verified';
      } else if (resultCode == '1') {
        message = 'Not Verified';
      } else if (resultCode == '-1') {
        message = 'Invalid Access Key';
      } else if (resultCode == '101') {
        message = 'T-Pin Expired';
      } else if (resultCode == '404') {
        message = 'No T-Pin Found';
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

const getUOSAlertApi = async () => {
  const accCode = await getAccCode();
  const userID = await getUserName();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetUOSAlert',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetUOSAlert xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
       <UserID>' +
      userID +
      '</UserID>\
      </GetUOSAlert>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetUOSAlertResponse'
        ]?.[0]?.['GetUOSAlertResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformUOSAlert(newData || []);
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};
const updateUOSAlertApi = async (
  investmentEmail: string,
  redemptionEmail: string,
  conversionEmail: string,
  investmentSMS: string,
  redemptionSMS: string,
  conversionSMS: string,
) => {
  const accCode = await getAccCode();
  const userID = await getUserName();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/UpdateUOSAlert',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <UpdateUOSAlert xmlns="http://www.sidathyder.com.pk/">\
        <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <UserID>' +
      userID +
      '</UserID>\
          <InvestmentEmail>' +
      investmentEmail +
      '</InvestmentEmail>\
           <RedemptionEmail>' +
      redemptionEmail +
      '</RedemptionEmail>\
           <ConversionEmail>' +
      conversionEmail +
      '</ConversionEmail>\
           <InvestmentSMS>' +
      investmentSMS +
      '</InvestmentSMS>\
           <RedemptionSMS>' +
      redemptionSMS +
      '</RedemptionSMS>\
           <ConversionSMS>' +
      conversionSMS +
      '</ConversionSMS>\
      </UpdateUOSAlert>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'UpdateUOSAlertResponse'
        ]?.[0]?.['UpdateUOSAlertResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['DataResponse']?.['0']?.['Response']?.['0'];

      let message = '';
      let success = false;
      if (resultCode == '1') {
        success = true;
        message = 'Update Alerts Success';
      } else if (resultCode == '3') {
        message = 'No Data Found';
      } else if (resultCode == '4') {
        message = 'Other Exception';
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

const getAllowedTransactionTypesApi = async () => {
  const userInfo = await getService(
    languageTxt?.reactAsyncStorageKeys?.userInfo,
  );
  const newUserInfo = userInfo && JSON.parse(userInfo);
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetAllowedTransactionTypes',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetAllowedTransactionTypes xmlns="http://www.sidathyder.com.pk/">\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
        </GetAllowedTransactionTypes>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetAllowedTransactionTypesResponse'
        ]?.[0]?.['GetAllowedTransactionTypesResult']?.[0]?.[
          'diffgr:diffgram'
        ]?.[0]?.['NewDataSet']?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformAllowedTransactionTypes(
        newData || [],
        newUserInfo?.['Account Type'],
      );
      return {
        success: true,
        data: newArray,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};


const getServiceFeeApi = async (  
  productID: string,
  requestedAmount:string,
) => {  
  //  productID='888963e6-8398-4840-937c-44da5e1423dc',
  //  requestedAmount='888963e6-8398-4840-937c-44da5e1423dc',
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetServiceFee',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetServiceFee xmlns="http://www.sidathyder.com.pk/">\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      <ProductCode>' +
      productID +
      '</ProductCode>\
      <RequestedAmount>' +
      requestedAmount +
      '</RequestedAmount>\
      </GetServiceFee>\
      </soap:Body>\
    </soap:Envelope>',
  })
  .then((data: any) => {
    //console.log('Result ', data)
    var newData =
      data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
        'GetServiceFeeResponse'
      ]?.[0]?.['GetServiceFeeResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
        'NewDataSet'
      ]?.[0]?.['DataResponse'];

    let newArray: [];
    newArray = transformGetServiceFee(newData || []);  
    return {
      success: true,
      data: newArray,
    };
  })
  .catch(err => {
    return {
      success: false,
      message: err?.message,
    };
  });
};

const getBackendLoadApi = async (
  productCode: any,  
) => {
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetBackendLoad',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetBackendLoad xmlns="http://www.sidathyder.com.pk/">\
        <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      <ProductCode>' +
      productCode +
      '</ProductCode>\
      </GetBackendLoad>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetBackendLoadResponse'
        ]?.[0]?.['GetBackendLoadResult']?.[0];
      let message = '';
      let success = false;
      if (resultCode == '0') {
        success = true;
        message = 'Backend load sent ';
      } else if (resultCode == '-1') {
        message = 'Invalid Access Key';
      } 
      else {
        message = resultCode;
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

 
const getAllMgmtCompaniesApi = async () => {  
  //console.log('getAllMgmtCompaniesApi Func', getAllMgmtCompaniesApi)
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/GetAllMgmtCompanies',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetAllMgmtCompanies xmlns="http://www.sidathyder.com.pk/">\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
      </GetAllMgmtCompanies>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetAllMgmtCompaniesResponse'
        ]?.[0]?.['GetAllMgmtCompaniesResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['DataResponse'];

      let newArray = [];
      newArray = transformGetAllMgmtCompanies(newData || []);
     // newArray = transformConvertionsOfFunds(newData || []);
      return {
        success: true,
        data: newArray,
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
  getPageApi,
  getDashboardUserInfoApi,
  getDashboardChartInfoApi,
  getGenerateAccountStatmentApi,
  getInvestmentInfoApi,
  saveInvestmentTransactionApi,
  getRedemptionInfoApi,
  saveRedemptionTransactionApi,
  getConvertionsOfFundsInApi,
  getConvertionsOfFundsOutApi,
  saveConversionTransactionApi,
  getPendingInvestmentApi,
  getPendingRedemptionConversion,
  generateTpinApi,
  verifyTpinApi,
  getUOSAlertApi,
  updateUOSAlertApi,
  getAllowedTransactionTypesApi,
  sendAccountStatmentEmailApi,
  getServiceFeeApi,
  getBackendLoadApi,
  getAllMgmtCompaniesApi,
};
