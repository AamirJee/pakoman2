import {useMutation, useQuery, useQueryClient} from 'react-query';
import {languageTxt} from '../../utils/constants/languageTxt';
import {
  forgetUserNameApi,
  forgetPasswordApi,
  getMappedAccountApi,
  loginApi,
  mapAccountApi,
  signUpApi,
  signUpCorporateApi,
} from './api';

const useLogin = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('login', {
    mutationFn: ({username, password}) => loginApi(username, password),
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

  return useMutation('login');
};

const useSignUp = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('signUp', {
    mutationFn: ({
      title,
      email,
      userID,
      cellNumber,
      accCode,
      cnic,
      dateofBirth,
      accountType,
    }) =>
      signUpApi(
        title,
        email,
        userID,
        cellNumber,
        accCode,
        cnic,
        dateofBirth,
        accountType,
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

  return useMutation('signUp');
};

const useSignUpCorporate = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('signUpCorporate', {
    mutationFn: ({
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
    }) =>
      signUpCorporateApi(
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

  return useMutation('signUpCorporate');
};

const useForgetUserName = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('forgetUserName', {
    mutationFn: ({email, cnic}) => forgetUserNameApi(email, cnic),
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

  return useMutation('forgetUserName');
};

const useForgetPassword = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('forgetPassword', {
    mutationFn: ({userName, cnic}) => forgetPasswordApi(userName, cnic),
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

  return useMutation('forgetPassword');
};

const useMappedAccountApi = (
  username: string,
  initialData: any = undefined,
) => {
  return useQuery(
    [languageTxt?.reactQueryKeys?.dashboard?.mappedAccount, username],
    () => getMappedAccountApi(username),
    {
      select: data => data,
      initialData,
    },
  );
};

const useMapAccountApi = () => {
  const queryClient = useQueryClient();

  queryClient.setMutationDefaults('mapAccount', {
    mutationFn: ({title, cnic, userID}) => mapAccountApi(title, cnic, userID),
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

  return useMutation('mapAccount');
};

export {
  useLogin,
  useSignUp,
  useMappedAccountApi,
  useMapAccountApi,
  useForgetUserName,
  useForgetPassword,
  useSignUpCorporate,
};
