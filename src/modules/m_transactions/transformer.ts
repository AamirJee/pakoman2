function transformDataInfo(data: any) {
  //console.log(data)
  return {
    'Account Title': data['ACC_TITLE']?.[0],
    'Account Status': data['ACC_STATUS']?.[0],
    'Email Address': data['ACC_EMAILADDRESS']?.[0],
    'Account Opening Date': data['ACC_OPENINGDATE']?.[0],
    'Cell Number': data['ACC_SMSCELLNUMBER']?.[0],
    'Account Type': data['ACC_ACCOUNTTYPE']?.[0],
    'CNIC Expiry': data['ACC_CNICEXPIRYDATE']?.[0],
    'Account Risk Level': data['ACC_RISKLEVEL']?.[0],
    'Account Zakat Status': data['ACC_ZAKATSTATUS']?.[0],
    'Bank Name': data['BankName']?.[0],
    'Account No': data['AccountNo']?.[0],
    'CLASS TYPE' : data['CLASS_TYPE']?.[0],
    'MNGMNT COMPANY': data['MNGMNT_COMPANY']?.[0],
  };
}

function transformInvestmentInfo(data: any) {
   return (
    data &&
    data.map((item: any) => {
      console.log('DATA ITEM ',item)
      return {
        balanceUnits: item?.BalanceUnits?.[0],
        fundClassType: item?.Class_Type?.[0]
          ? item?.Class_Type?.[0]
          : item?.Fund_Class_Type?.[0] || '',
        convertableAmount: item?.convertableAmount?.[0] || '',
        convertableUnits: item?.convertableUnits?.[0] || '',
        fundCode: item?.Fund_Code?.[0] || '',
        fundID: item?.Fund_ID?.[0] || '',
        fundName: item?.List_Of_Funds?.[0]
          ? item?.List_Of_Funds?.[0]
          : item?.Fund_Name?.[0] || '',
        minimunInvestmentAmount: item?.Minimum_Investment_Amount?.[0]
          ? item?.Minimum_Investment_Amount?.[0]
          : item?.Minimun_Investment_Amount?.[0] || '',
        minimunReInvestmentAmount: item?.['Minimun_Re-Investment_Amount']?.[0]
          ? item?.['Minimun_Re-Investment_Amount']?.[0]
          : item?.Minimum_ReInvestment_Amount?.[0] || '',
        requestedUnits: item?.Requested_Units?.[0] || '',
        settlementAccount: item?.Settlement_Account?.[0] || '',
        fundTypeName: item?.Unit_Type?.[0]
          ? item?.Unit_Type?.[0]
          : item?.Fund_Type_Name?.[0] || '',
        isParkingFund: item?.IsParkingFund?.[0]  
    

      };
    })
  );
  /*
  return {
    'Account Title': data['ACC_TITLE']?.[0],
    'Account Status': data['ACC_STATUS']?.[0],
    'Email Address': data['ACC_EMAILADDRESS']?.[0],
    'Account Opening Date': data['ACC_OPENINGDATE']?.[0],
    'Cell Number': data['ACC_SMSCELLNUMBER']?.[0],
    'Account Type': data['ACC_ACCOUNTTYPE']?.[0],
    'CNIC Expiry': data['ACC_CNICEXPIRYDATE']?.[0],
    'Account Risk Level': data['ACC_RISKLEVEL']?.[0],
    'Account Zakat Status': data['ACC_ZAKATSTATUS']?.[0],
    'Bank Name': data['BankName']?.[0],
    'Account No': data['AccountNo']?.[0],
  };
  */

}


function transformChartInfo(data: any) {
  const colorCode = [
    'rgba(194, 146, 60, 1)',
    'rgba(101, 69, 6, 1)',
    'rgba(175, 137, 20, 1)',
    'rgba(160, 88, 18, 1)',
    'rgba(163, 118, 29, 1)',
    'rgba(187, 155, 56, 1)',
    'rgba(213, 155, 40, 1)',
    'rgba(118, 103, 0, 1)',
    'rgba(34, 23, 2, 1)',
    'rgba(64, 50, 23, 1)',
  ];
  return (
    data &&
    data.map((info: any, key: number) => {
      const json = {
        name: info?.PRD_NAME?.[0],
        population: parseInt(info?.NetAmount?.[0]),
        percentages: parseFloat(info?.HoldingPercentage?.[0]),
        unit: info?.Units?.[0],
        nav: info?.NAV?.[0],
        color: colorCode[key],
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      };
      return json;
    })
  );
}

function transformRedemptionInfo(data: any) {
  return (
    data &&
    data.map((item: any) => {
      return {
        accountTitle: item?.Account_Title?.[0] || '',
        accountType: item?.Account_Type?.[0] || '',
        balanceUnits: item?.Balance_Units?.[0] || '',
        bankAccountNo: item?.Bank_Account_No?.[0] || '',
        bankBranchCode: item?.Bank_Branch_Code?.[0] || '',
        bankCity: item?.Bank_City?.[0] || '',
        folioNumber: item?.Folio_Number?.[0] || '',
        fundClassType: item?.Fund_Class_Type?.[0] || '',
        fundName: item?.Fund_Name?.[0] || '',
        fundTypeName: item?.Fund_Type_Name?.[0] || '',
        holdingUnits: item?.Holding_Units?.[0] || '',
        ibanNo: item?.IBAN_No?.[0] || '',
        netAmount: item?.Net_Amount?.[0] || '',
        redeemableAmount: item?.Redeemable_Amount?.[0] || '',
        redeemableUnits: item?.Redeemable_Units?.[0] || '',
        requestedUnits: item?.Requested_Units?.[0] || '',
        response: item?.Response?.[0] || '',
        unitPrice: item?.Unit_Price?.[0] || '',
        productCode: item?.Product_Code?.[0] || '',
         
      };
    })
  );
}

function transformGetServiceFee(data: any) {
 return (
    data &&
    data.map((item: any) => {
      //console.log('ITEM ', item)
      return {
        tgsCode: item?.TGS_CODE?.[0]  || '',
        tgsId: item?.TGS_ID?.[0]  || '',
        //tsfAmount: item?.TSF_AMOUNT?.[0].substring(0,8) || '',
        tsfAmount: Number(item?.TSF_AMOUNT?.[0]).toFixed(4) || '',
        tsfAmountFrom: item?.TSF_AMOUNTFROM?.[0] || '',
        tsfAmountTo: item?.TSF_AMOUNTTO?.[0]  || '',
        tsfCommissioneeId: item?.TSF_COMMISSIONEEID?.[0] || '',        
      };
    })
  );
  
}

function transformGetAllMgmtCompanies(data: any) {
  return (
     data &&
     data.map((item: any) => {
       //console.log('ITEM ', item)
       return {        
         retCode: item?.RET_CODE?.[0]  || '',
         retName: item?.RET_NAME?.[0]  || '',
       };
     })
   );
   
 }

function transformBackendLoad(data: any) {
  return (
     data &&
     data.map((item: any) => {
       //console.log('ITEM ', item)
       return {
         tsfAmount: item?.TSF_AMOUNT?.[0].substring(0,8) || '',         
       };
     })
   );
   
 }



function transformConvertionsOfFunds(data: any) {
  return (
    data &&
    data.map((item: any) => {
      //console.log('DATA ITEM ',item)
      return {
        balanceUnits: item?.Balance_Units?.[0] || '',
        fundClassType: item?.Class_Type?.[0]
          ? item?.Class_Type?.[0]
          : item?.Fund_Class_Type?.[0] || '',
        convertableAmount: item?.Convertable_Amount?.[0] || '',
        convertableUnits: item?.Convertable_Units?.[0] || '',
        fundCode: item?.Fund_Code?.[0] || '',
        fundID: item?.Fund_ID?.[0] || '',
        fundName: item?.List_Of_Funds?.[0]
          ? item?.List_Of_Funds?.[0]
          : item?.Fund_Name?.[0] || '',
        minimunInvestmentAmount: item?.Minimum_Investment_Amount?.[0]
          ? item?.Minimum_Investment_Amount?.[0]
          : item?.Minimun_Investment_Amount?.[0] || '',
        minimunReInvestmentAmount: item?.['Minimun_Re-Investment_Amount']?.[0]
          ? item?.['Minimun_Re-Investment_Amount']?.[0]
          : item?.Minimum_ReInvestment_Amount?.[0] || '',
        requestedUnits: item?.Requested_Units?.[0] || '',
        settlementAccount: item?.Settlement_Account?.[0] || '',
        fundTypeName: item?.Unit_Type?.[0]
          ? item?.Unit_Type?.[0]
          : item?.Fund_Type_Name?.[0] || '',
        isParkingFund: item?.IsParkingFund?.[0]  
    

      };
    })
  );
}

function transformPendingFunds(data: any) {
  return (
    data &&
    data.map((item: any) => {
      return {
        amount: item?.Amount?.[0] || '0',
        from: item?.From?.[0] || '',
        response: item?.Response?.[0] || '',
        to: item?.To?.[0] || '',
        transactionDate: item?.Transaction_Date?.[0] || '',
        transactionType: item?.Transaction_Type?.[0] || '',
        units: item?.Units?.[0] || '0',
      };
    })
  );
}

function transformInvestmentPendingFunds(data: any) {
  return (
    data &&
    data.map((item: any) => {
      return {
        amount: item?.Amount?.[0] || '0',
        from: item?.From?.[0] || '',
        response: item?.Response?.[0] || '',
        to: item?.To?.[0] || '',
        transactionDate: item?.Transaction_Date?.[0] || '',
        transactionType: item?.Transaction_Type?.[0] || '',
        units: item?.Units?.[0] || '0',
      };
    })
  );
}

function transformUOSAlert(data: any) {
  return (
    data &&
    data.map((item: any) => {
      return {
        id: item?.ALERTCODE?.[0] || '',
        name: item?.ALERTS?.[0] || '',
        status: item?.SMS?.[0]
          ? Number(item?.SMS?.[0])
          : item?.EMAIL?.[0]
          ? Number(item?.EMAIL?.[0])
          : null,

        type: item?.EMAIL?.[0] ? 'email' : 'sms',
      };
    })
  );
}

function transformAllowedTransactionTypes(data: any, accountType: string) {
  let array: any = {};
  data &&
    data.map((item: any) => {
      const nameArray = item?.TransactionName?.[0].split('_');
      if (nameArray?.[0] == 'Corp' && accountType == 'Corporate') {
        if (nameArray[1] == 'Investment') {
          array = {...array, Investment: item?.TransactionValue?.[0] || ''};
        } else if (nameArray[1] == 'Redemption') {
          array = {...array, Redemption: item?.TransactionValue?.[0] || ''};
        } else if (nameArray[1] == 'Conversion') {
          array = {...array, Conversion: item?.TransactionValue?.[0] || ''};
        }
      } else if (nameArray?.[0] == 'Ind' && accountType != 'Corporate') {
        if (nameArray[1] == 'Investment') {
          array = {...array, Investment: item?.TransactionValue?.[0] || ''};
        } else if (nameArray[1] == 'Redemption') {
          array = {...array, Redemption: item?.TransactionValue?.[0] || ''};
        } else if (nameArray[1] == 'Conversion') {
          array = {...array, Conversion: item?.TransactionValue?.[0] || ''};
        }
      }
    });

  return array;
}

export {
  transformDataInfo,
  transformChartInfo,
  transformRedemptionInfo,
  transformConvertionsOfFunds,
  transformPendingFunds,
  transformInvestmentPendingFunds,
  transformUOSAlert,
  transformAllowedTransactionTypes,
  transformInvestmentInfo,
  transformGetServiceFee,
  transformGetAllMgmtCompanies,
};
