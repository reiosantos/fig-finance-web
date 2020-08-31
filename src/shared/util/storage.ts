import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants/constants';

const saveData = (key: string, data: any) => {
  const bytes = CryptoJS.AES.encrypt(JSON.stringify(data.toString()), SECRET_KEY);
  localStorage.setItem(key, bytes.toString());
};

const getData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return false;
  } catch (e) {
    return false;
  }
};

/**
 * function to get user access token
 */
const getAccessToken = (): boolean | string => {
  try {
    const data = localStorage.authData;
    if (data) {
      const bytes = CryptoJS.AES.decrypt(data.toString(), SECRET_KEY);
      const decryptedData: any = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData && decryptedData.access_token ? decryptedData.access_token : false;
    }
    return false;
  } catch (e) {
    return false;
  }
};

const Storage = {
  saveData,
  getData,
  getAccessToken
};

export default Storage;
