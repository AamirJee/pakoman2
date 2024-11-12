function transformDataInfo(data: any) {
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
      };
    })
  );
}

function transformInvestmentInfo(data: any) {
  return (
    data &&
    data.map((item: any) => {
      return {
        fundCode: item?.Fund_Code?.[0] || '',
        fundId: item?.Fund_ID?.[0] || '',
        fundName: item?.List_Of_Funds?.[0] || '',
        fundClassType: item?.Class_Type?.[0] || '',
        fundTypeName: item?.Unit_Type?.[0] || '',
        minimunInvestmentAmount: item?.Minimun_Investment_Amount?.[0] || '',
        minimunReInvestmentAmount:
          item?.['Minimun_Re-Investment_Amount']?.[0] || '',
        settlementAccount: item?.Settlement_Account?.[0] || '',
        balanceUnits: item?.BalanceUnits?.[0] || '',
        requestedUnits: item?.RequestedUnits?.[0] || '',
      };
    })
  );
}

function transformConvertionsOfFunds(data: any) {
  return (
    data &&
    data.map((item: any) => {
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

function transformPoliciesInfo(data: any) {
  return (
    data &&
    data.map((info: any, key: number) => {
      const json = {
        name: info?.POLICY_NAME?.[0],
        url: info?.POLICY_URL?.[0],
      };
      return json;
    })
  );
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
  transformPoliciesInfo,
};
