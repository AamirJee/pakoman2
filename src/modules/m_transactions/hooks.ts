import {useMutation, useQuery, useQueryClient} from 'react-query';

import {languageTxt} from '../../utils/constants/languageTxt';
import {
  getDashboardChartInfoApi,
  getGenerateAccountStatmentApi,
  getRedemptionInfoApi,
  getConvertionsOfFundsInApi,
  getConvertionsOfFundsOutApi,
  saveRedemptionTransactionApi,
  saveConversionTransactionApi,
  getPendingInvestmentApi,
  getPendingRedemptionConversion,
  generateTpinApi,
  verifyTpinApi,
  getUOSAlertApi,
  getAllowedTransactionTypesApi,
  getInvestmentInfoApi,
  saveInvestmentTransactionApi,
  sendAccountStatmentEmailApi,
  getServiceFeeApi,
  getAllMgmtCompaniesApi,
} from './api';

const useDashboardChartInfo = (initialData: any = undefined) => {
  
  return useQuery(
    languageTxt?.reactQueryKeys?.dashboard?.chartInfo,
    () => getDashboardChartInfoApi,
    {
      select: data => data,
      initialData,
    },
  );
};

const useGenerateAccountStatment = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults(
    languageTxt?.reactQueryKeys?.generateAccountStatment,
    {
      mutationFn: ({dateFrom, dateTo}) =>
        getGenerateAccountStatmentApi(dateFrom, dateTo),
      onMutate: async variables => {
        const {onSuccessCb, onErrorCb} = variables;
        return {onSuccessCb, onErrorCb};
      },
      onSuccess: (result, variables, context) => {
        if (context.onSuccessCb) {
          context.onSuccessCb(result);
        }
      },
      onError: (error, variables, context) => {
        if (context.onErrorCb) {
          context.onErrorCb(error);
        }
      },
    },
  );

  return useMutation(languageTxt?.reactQueryKeys?.generateAccountStatment);
};

const useSendAccountStatmentEmail = () => {
  const queryClient = useQueryClient();
  
  queryClient.setMutationDefaults(
    languageTxt?.reactQueryKeys?.sendAccountStatmentEmail,
    {
      mutationFn: ({dateFrom, dateTo}) =>
        sendAccountStatmentEmailApi(dateFrom, dateTo),
      onMutate: async variables => {
        const {onSuccessCb, onErrorCb} = variables;
        return {onSuccessCb, onErrorCb};
      },
      onSuccess: (result, variables, context) => {
        if (context.onSuccessCb) {
          context.onSuccessCb(result);
        }
      },
      onError: (error, variables, context) => {
        if (context.onErrorCb) {
          context.onErrorCb(error);
        }
      },    
    },
    
  );

  return useMutation(languageTxt?.reactQueryKeys?.sendAccountStatmentEmail);
};

const useRedemptionInfo = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.eTransactions?.redemptionInfo,
    () => getRedemptionInfoApi,
    {
      select: data => data,
      initialData,
    },
  );
};

const useInvestmentInfo = (initialData: any = undefined) => {
  //console.log('useInvestmentInfo')
  return useQuery( 
    languageTxt?.reactQueryKeys?.eTransactions?.investmentInfo,
    () => getInvestmentInfoApi,
    {
      select: data => data,
      initialData,
    },
  );
};

const useConvertionsOfFundsIn = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.eTransactions?.convertionsOfFundsIn,
    () => getConvertionsOfFundsInApi,
    {
      select: data => data,
      initialData,
    },
  );
};
const useConvertionsOfFundsOut = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.eTransactions?.convertionsOfFundsOut,
    () => getConvertionsOfFundsOutApi,
    {
      select: data => data,
      initialData,
    },
  );
};

const useSaveRedemptionTransaction = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('saveRedemptionTransaction', {
    mutationFn: ({
      tranDate,
      tranTime,
      fundName,
      fundUnitClass,
      fundUnitType,
      redeemUnits,
      redeemAmount,
      redeemBy,
      username,
      paymentType,
    }) =>
      saveRedemptionTransactionApi(
        tranDate,
        tranTime,
        fundName,
        fundUnitClass,
        fundUnitType,
        redeemUnits,
        redeemAmount,
        redeemBy,
        username,
        paymentType,
      ),
    onMutate: async variables => {
      const {onSuccessCb, onErrorCb} = variables;
      return {onSuccessCb, onErrorCb};
    },
    onSuccess: (result, variables, context) => {
      if (context.onSuccessCb) {
        context.onSuccessCb(result);
      }
    },
    onError: (error, variables, context) => {
      if (context.onErrorCb) {
        context.onErrorCb(error);
      }
    },
  });

  return useMutation('saveRedemptionTransaction');
};

const useSaveInvestmentTransaction = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('saveInvestmentTransaction', {
    mutationFn: ({
      tranDate,
      tranTime,
      fundName,
      fundUnitClass,
      fundUnitType,
      investAmount,
      investBy,
      comments,
      amountExistFund, 
    }) =>
      saveInvestmentTransactionApi(
        tranDate,
        tranTime,
        fundName,
        fundUnitClass,
        fundUnitType,
        investAmount,
        investBy,
        comments,
        amountExistFund, 
      ),
    onMutate: async variables => {
      const {onSuccessCb, onErrorCb} = variables;
      return {onSuccessCb, onErrorCb};
    },
    onSuccess: (result, variables, context) => {
      if (context.onSuccessCb) {
        context.onSuccessCb(result);
      }
    },
    onError: (error, variables, context) => {
      if (context.onErrorCb) {
        context.onErrorCb(error);
      }
    },
  });

  return useMutation('saveInvestmentTransaction');
};

const useSaveConversionTransaction = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('saveConversionTransaction', {
    mutationFn: ({
      tranDate,
      tranTime,
      fundNameOut,
      fundOutUnitClass,
      fundOutUnitType,
      fundNameIn,
      fundInUnitClass,
      fundInUnitType,
      conversionUnits,
      conversionAmount,
      isEntire,
      username,
    }) =>
      saveConversionTransactionApi(
        tranDate,
        tranTime,
        fundNameOut,
        fundOutUnitClass,
        fundOutUnitType,
        fundNameIn,
        fundInUnitClass,
        fundInUnitType,
        conversionUnits,
        conversionAmount,
        isEntire,
        username,
      ),
    onMutate: async variables => {
      const {onSuccessCb, onErrorCb} = variables;
      return {onSuccessCb, onErrorCb};
    },
    onSuccess: (result, variables, context) => {
      if (context.onSuccessCb) {
        context.onSuccessCb(result);
      }
    },
    onError: (error, variables, context) => {
      if (context.onErrorCb) {
        context.onErrorCb(error);
      }
    },
  });

  return useMutation('saveConversionTransaction');
};

const usePendingInvestment = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.eTransactions?.pendingInvestment,
    () => getPendingInvestmentApi,
    {
      select: data => data,
      initialData,
    },
  );
};

const usePendingRedemptionConversion = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.eTransactions?.pendingRedemptionConversion,
    () => getPendingRedemptionConversion,
    {
      select: data => data,
      initialData,
    },
  );
};

const useGenerateTpin = () => {
  const queryClient = useQueryClient();
  queryClient.setMutationDefaults('generateTpin', {
    mutationFn: ({transactionID, userID, emailAddress}) =>
      generateTpinApi(transactionID, userID, emailAddress),
    onMutate: async variables => {
      const {onSuccessCb, onErrorCb} = variables;
      return {onSuccessCb, onErrorCb};
    },
    onSuccess: (result, variables, context) => {
      if (context.onSuccessCb) {
        context.onSuccessCb(result);
      }
    },
    onError: (error, variables, context) => {
      if (context.onErrorCb) {
        context.onErrorCb(error);
      }
    },
  });
  return useMutation('generateTpin');
};

const useVerifyTpin = () => {
  const queryClient = useQueryClient();
  queryClient.setMutationDefaults('verifyTpin', {
    mutationFn: ({transactionID, userID, tPin}) =>
      verifyTpinApi(transactionID, userID, tPin),
    onMutate: async variables => {
      const {onSuccessCb, onErrorCb} = variables;
      return {onSuccessCb, onErrorCb};
    },
    onSuccess: (result, variables, context) => {
      if (context.onSuccessCb) {
        context.onSuccessCb(result);
      }
    },
    onError: (error, variables, context) => {
      if (context.onErrorCb) {
        context.onErrorCb(error);
      }
    },
  });
  return useMutation('verifyTpin');
};

const useGetUOSAlert = (initialData: any = undefined) => {
  return useQuery(
    languageTxt?.reactQueryKeys?.alerts?.getUOSAlert,
    () => getUOSAlertApi,
    {
      select: data => data,
      initialData,
    },
  );
};

const useGetAllowedTransactionTypes = (initialData: any = undefined) => {

  return useQuery(
    languageTxt?.reactQueryKeys?.allowedTransactionTypes,
    () => getAllowedTransactionTypesApi,
    {
      select: data => data,
      initialData,
    },
  );
};


const useGetServiceFee = () => {
  const queryClient = useQueryClient();
  
  queryClient.setMutationDefaults('getServiceFee', {
    mutationFn: ({productID, requestedAmount}) =>
    getServiceFeeApi(productID, requestedAmount),
    onMutate: async variables => {
      const {onSuccessCb, onErrorCb} = variables;
      return {onSuccessCb, onErrorCb};
    },
    onSuccess: (result, variables, context) => {
      if (context.onSuccessCb) {
        context.onSuccessCb(result);
      }
    },
    onError: (error, variables, context) => {
      if (context.onErrorCb) {
        context.onErrorCb(error);
      }
    },
  });
  return useMutation('getServiceFee');
};


const useManagementComanies = (initialData: any = undefined) => {
  //console.log('useManagementComanies',  languageTxt?.reactQueryKeys?.allowedTransactionTypes,)
  return useQuery( 
    'useManagementComanies',
    //languageTxt?.reactQueryKeys?.register?.managementCompanies,
    () => getAllMgmtCompaniesApi,
    {
      select: data => data,
      initialData,
    },
  );
};



export {
  useDashboardChartInfo,
  useGenerateAccountStatment,
  useInvestmentInfo,
  useSaveInvestmentTransaction,
  useRedemptionInfo,
  useConvertionsOfFundsIn,
  useConvertionsOfFundsOut,
  useSaveRedemptionTransaction,
  useSaveConversionTransaction,
  usePendingInvestment,
  usePendingRedemptionConversion,
  useGenerateTpin,
  useVerifyTpin,
  useGetUOSAlert,
  useGetAllowedTransactionTypes,
  useSendAccountStatmentEmail,
  useGetServiceFee,
  useManagementComanies,
};
