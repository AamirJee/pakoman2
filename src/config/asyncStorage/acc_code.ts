import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAccCode = async (value: string) => {
  try {
    await AsyncStorage.setItem('@acc_code', value);
  } catch (e) {}
};

export const getAccCode = async () => {
  try {
    let value = await AsyncStorage.getItem('@acc_code');
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

export const deleteAccCode = async () => {
  try {
    await AsyncStorage.removeItem('@acc_code');
  } catch (e) {}
};

export const storeUserName = async (value: string) => {
  try {
    await AsyncStorage.setItem('@userName', value);
  } catch (e) {}
};

export const getUserName = async () => {
  try {
    let value = await AsyncStorage.getItem('@userName');
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

export const deleteUserName = async () => {
  try {
    await AsyncStorage.removeItem('@userName');
  } catch (e) {}
};

export const storeAccPassword = async (value: string) => {
  try {
    await AsyncStorage.setItem('@acc_password', value);
  } catch (e) {}
};

export const getAccPassword = async () => {
  try {
    let value = await AsyncStorage.getItem('@acc_password');
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

export const deleteAccPassword = async () => {
  try {
    await AsyncStorage.removeItem('@acc_password');
  } catch (e) {}
};
