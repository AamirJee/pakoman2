import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryClient} from 'react-query';
import {deleteAccCode, deleteUserName} from './acc_code';

export const storeService = async (columnName: string, value: any) => {
  try {
    let newValue = typeof value === 'object' ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(`@${columnName}`, newValue);
  } catch (e) {}
};

export const getService = async (columnName: string) => {
  try {
    let value = await AsyncStorage.getItem(`@${columnName}`);
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

export const getServiceJSON = async (columnName: string) => {
  try {
    let value = await AsyncStorage.getItem(`@${columnName}`);
    if (value !== null) {
      return JSON.parse(value);
    }
    return {};
  } catch (e) {}
};

export const storeServiceBoolean = async (
  columnName: string,
  value: boolean,
) => {
  const strValue = !!value ? 'true' : 'false';
  await storeService(columnName, strValue);
};

export const getServiceBoolean = async (columnName: string) => {
  const strValue = await getService(columnName);
  const boolValue = strValue == 'true' ? true : false;
  return boolValue;
};

export const deleteService = async (columnName: string) => {
  try {
    await AsyncStorage.removeItem(`@${columnName}`);
  } catch (e) {}
};

export const asyncLogoutService = async (
  languageTxt: any,
  queryClient: QueryClient,
) => {
  try {
    let queryKeys: Array<string> = [];
    Object.keys(languageTxt?.reactQueryKeys).forEach(key => {
      Object.keys(languageTxt?.reactQueryKeys?.[key]).forEach(nestedValue => {
        queryKeys.push(languageTxt?.reactQueryKeys[key][nestedValue]);
      });
    });

    queryKeys.forEach(key => {
      queryClient.setQueryData(key, undefined);
    });

    await deleteService(languageTxt?.reactAsyncStorageKeys?.appInfo);
    await deleteUserName();
    await deleteAccCode();
  } catch (error) {}
};
