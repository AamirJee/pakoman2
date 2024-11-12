import axios from 'axios';

//import {MOBILE_INTEGRATION_API_URL, M_TRANSACTIONS_API_URL} from '@env';

var parseString = require('react-native-xml2js').parseString;

//const MOBILE_INTEGRATION_API_URL = 'http://192.168.10.251:84';
//const M_TRANSACTIONS_API_URL = 'http://192.168.10.251:86';
//const MOBILE_INTEGRATION_API_URL = 'http://128.1.22.251:8099';
//const M_TRANSACTIONS_API_URL = 'http://128.1.22.251:8098';

export const mobile_integration_instance = axios.create({
  //baseURL: `${MOBILE_INTEGRATION_API_URL}/MobileIntegration.asmx`,
  //baseURL: `http://125.209.120.190:84/SecurityShell_Services/MobileIntegration.asmx`,
  //baseURL: `http://128.1.22.66/SS_Services/MobileIntegration.asmx`,
    baseURL: `http://128.1.22.251:8098/MobileIntegration.asmx`,
    //baseURL:'http://128.1.22.66/OnlineTransaction_MobileAPI_POAMC/mTransactions.asmx'

});
// Add a request interceptor
mobile_integration_instance.interceptors.request.use(
  async (config: any) => {
    config.headers['Content-Type'] = 'text/xml; charset=utf-8';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
// Add a response interceptor
mobile_integration_instance.interceptors.response.use(
  function (response) {
    let newResponse = {};
    parseString(response?.data, function (err: any, result: any) {
      newResponse = result;
    });
    return newResponse;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const mTransactions_instance = axios.create({
  // baseURL: `${M_TRANSACTIONS_API_URL}/mTransactions.asmx`,
  ///baseURL: `http://125.209.120.190:86/mTransactions.asmx`,
    //baseURL: `http://128.1.22.66/OnlineTransaction_MobileAPI_POAMC/mTransactions.asmx`,
    //baseURL: `http://128.1.22.66/SecurityShell_Services/MobileIntegration.asmx`,
    //baseURL: `http://128.1.22.66/OnlineTransaction_MobileAPI_POAMC/mTransactions.asmx`,
    //baseURL: `http://128.1.22.66/OnlineTransaction_MobileAPI_POAMC/mTransactions.asmx`,
    baseURL: `http://128.1.22.251:8099/mTransactions.asmx`,
    //baseURL: `http://128.1.22.251:8098/MobileIntegration.asmx`,
    //  baseURL:'http://128.1.22.66/OnlineTransaction_MobileAPI_POAMC/mTransactions.asmx'


    
});
// Add a request interceptor
mTransactions_instance.interceptors.request.use(
  async (config: any) => {
    config.headers['Content-Type'] = 'text/xml; charset=utf-8';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
// Add a response interceptor
mTransactions_instance.interceptors.response.use(
  function (response) {
    let newResponse = {};
    parseString(response?.data, function (err: any, result: any) {
      newResponse = result;
    });
    return newResponse;
  },
  function (error) {
    return Promise.reject(error);
  },
);
